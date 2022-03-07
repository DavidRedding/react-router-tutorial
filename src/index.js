import React from 'react';
import ReactDOM from 'react-dom';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
