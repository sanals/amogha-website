import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Temporarily removed StrictMode to prevent UNSAFE_componentWillMount warnings
// TODO: Replace all instances of react-helmet-async with DocumentHead and re-enable StrictMode
ReactDOM.createRoot(document.getElementById('root')!).render(<App />); 