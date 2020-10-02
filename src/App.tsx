import React from 'react';
import styled from 'styled-components';
import {useGetAllUsers} from '../src/api/users';


function App() {
  const data = useGetAllUsers();

  return (
    <div className="App">
      <h1>Planned Test</h1>
      <div>
        <button type="button">Retrieve Users</button>
      </div>
      <div>
        <h2>Users</h2>
        min: <input name="minAge" value="0" type="number" />
        max: <input name="maxAge" value="100" type="number" />
        <button type="button">Filter by age</button>
      </div>
    </div>
  );
}

export default App;
