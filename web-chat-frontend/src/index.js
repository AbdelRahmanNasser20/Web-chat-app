
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// After
import { createRoot } from 'react-dom';

const root = document.getElementById('root');
if (root !== null) {
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
}