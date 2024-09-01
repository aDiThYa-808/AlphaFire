import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path is correct

// If you are using React 18 or higher, use createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// For React 17 or below, use ReactDOM.render
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
