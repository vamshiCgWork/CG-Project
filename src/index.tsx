import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DashBoard from './DashBoard/DashBoard'
import reportWebVitals from './reportWebVitals';
import Formik2 from './Form/Formik2'
import Log from './components/Log'
import FinalForm from './components/FinalForm'
import { Signup } from '../src/YupandFormik/Signup'
ReactDOM.render(
  <React.StrictMode>
    <App />

    {/* <FinalForm /> */}
    {/* <DashBoard /> */}
    {/* <Formik2 /> */}
    {/* <Signup /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
