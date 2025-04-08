import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleSubmit = () => {
    fetch('https://sub.example.com:5000/api', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }), 
    })
      .then(response => response.json())
      .then(data => {
        setApiResponse(data.message); 
      })
      .catch(error => {
        console.error('Error fetching data from the API:', error);
      });
  };

  return (
    <div className="App">
      <h1>Enter your name:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update name as user types
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Send</button>

      <h2>{apiResponse}</h2> {/* Display API response */}
    </div>
  );
};

export default App;
