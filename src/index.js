import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import reportWebVitals from './reportWebVitals';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import CreateBillPage from './components/CreateBillPage';
import RecentBill from './components/RecentBill';
import ProductManagement from './components/ProductManagement';
import UserDetails from './components/UserDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/create-bill" element={<CreateBillPage />} />
        <Route path="/recent-bill" element={<RecentBill />} />
        <Route path="/inventory" element={<ProductManagement />} />
        <Route path="/user-details" element={<UserDetails />} />
        
        
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
