import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './Button';
import Form from './Form';
import UserGreeting from './UserGreeting';
import Formsubmit from "./Formsubmit"
import Demo from "./Demo"

const root = ReactDOM.createRoot(document.getElementById('root'));
const existingUsernames = ['user1', 'user2'];
root.render(
  <React.StrictMode>
  {/* <Button></Button> */}
  {/* <Form></Form> */}
  {/* <Formsubmit existingUsernames={existingUsernames} /> */}
  <Demo></Demo>
  {/* <UserGreeting></UserGreeting> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
