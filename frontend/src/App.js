
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';

const App = () => {
  const [data, setData] = useState([]);

  const addData = (item) => {
    fetch('http://localhost:5000/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(newData => setData([...data, newData]))
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/form')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Form</h1>
      <Form onSubmit={addData} />
      <h2>Data</h2>
      <Table data={data} />
    </div>
  );
};

export default App;
