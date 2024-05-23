
import { BrowserRouter, Route, Routes } from'react-router-dom';
import UserDetails from './components/UserDetails/UserDetails';
import UserList from './components/UserList/UserList'
import UserForm from './components/UserForm/UserForm'
import Home from './components/pages/Home'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/UserDetails" element={<UserDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
