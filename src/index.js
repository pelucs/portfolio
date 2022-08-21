import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScrollContextProvider } from './contextAPI/ScrollContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollContextProvider>
      <App />
    </ScrollContextProvider>
  </React.StrictMode>
);