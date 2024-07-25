import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {random} from "lodash"
/*
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
/*
const fun = () => {
  console.log("very simple package")
}
  */
const IndexPackage = () => {
  const [state, setState] = useState("test component")
  useEffect(() => {setState("test component try ")},[])
  console.log("state= " + state + " ------")
  
  const dd = random(3,9)
  console.log(dd)
  return (
    <>
      <p>{`${state} - ${dd}`}</p>
    </>
  )
}

export default IndexPackage