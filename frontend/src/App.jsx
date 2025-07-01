import React from 'react';

const App = () => {
  return (
    <div >
      <form action="onSubmit" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <button>Singup</button>
      </form>
    </div>
  );
}

export default App;
