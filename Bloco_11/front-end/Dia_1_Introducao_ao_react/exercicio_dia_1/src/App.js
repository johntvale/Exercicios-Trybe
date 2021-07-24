import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const list = ['item1', 'item2', 'item3', 'item4', 'item5']
  return (
    <div>
      <ul>
        {list.map((eachItem) => Task(eachItem))}
      </ul>
    </div>
  );
}

export default App;
