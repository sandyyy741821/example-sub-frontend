import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.rejectUnauthorized = false;

const App = () => {
  const [name, setName] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setApiResponse('');

    axios
      .post(
        'https://13.51.101.168:5000/api',  // Use HTTPS to make the request
        { name: name },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          referrerPolicy: 'unsafe-url',
        }
      )
      .then((response) => {
        setApiResponse(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
        setLoading(false);
        setApiResponse('Error occurred while fetching data');
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
      <button onClick={handleSubmit} disabled={loading}>
        Send
      </button>

      {loading ? <h2>Loading...</h2> : <h2>{apiResponse}</h2>}
    </div>
  );
};

export default App;
