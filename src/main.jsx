
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { MyProvider } from './context/data/MyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
  </MyProvider>,
)
