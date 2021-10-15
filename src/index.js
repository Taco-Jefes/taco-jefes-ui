import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { usePromiseTracker } from 'react-promise-tracker';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const LoadingIndicator = props => {
  const  { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && 
    <div
      style={{
        width : "100%",
        height : "100",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
      }}>
    <Spinner animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  )
}


const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
