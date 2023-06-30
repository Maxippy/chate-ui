import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/app'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

console.log(13);

root.render(
  <App />
)
console.log("12345678");
