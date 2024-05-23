import React from 'react';
import { Route, Routes } from'react-router-dom';
import UserDetails from './components/UserDetails/UserDetails';
import UserList from './components/UserList/UserList'
import UserForm from './components/UserForm/UserForm'
import Home from './pages/Home'

import './App.css';

function App() {
  return (
    <div className="App">
       <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/user-details" element={<UserDetails />} />
    </div>
  );
}

export default App;
