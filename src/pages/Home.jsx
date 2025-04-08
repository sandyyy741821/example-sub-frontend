import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = () => {
    setLoading(true); 
    setApiResponse(''); 

    fetch('http://13.51.101.168:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    })
      .then(response => response.json())
      .then(data => {
        setApiResponse(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data from the API:', error);
        setLoading(false); 
      });
  };

  return (
    <div className="App">
      <h1>Enter your name:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit} disabled={loading}>Send</button>

      {loading ? <h2>Loading...</h2> : <h2>{apiResponse}</h2>} 
    </div>
  );
};

export default App;
