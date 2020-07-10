import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//const UserContext = React.createContext()

ReactDOM.render(
  <React.StrictMode>
    {/*  <UserContext.Provider> */}
    <App />
    {/*   </UserContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
