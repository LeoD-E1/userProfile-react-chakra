import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserState from './components/User/ContextUser/UserState';

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>,
  document.getElementById('root')
);
