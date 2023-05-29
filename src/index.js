import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './front-end/App';
import { AuthProvider } from '/Users/guotianfu/Desktop/hackaton/src/front-end/LoginPage/LoginPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);

