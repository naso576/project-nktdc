import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/public/home/Home';
import LoginPage from './components/public/login/loginPage';
import UserProfile from './components/public/profile/userProfile';
import useLoginStore from './components/store/mainStore';

function App() {
  const loginStore = useLoginStore((state) => state.login);
const name = useLoginStore((state) => state.username);
  return (
    <Router>
      <Routes>     
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />    
      <Route path="/profile" element={<UserProfile name="John Doe" email={name || ''}   />} />
      </Routes>
    </Router>
  );
}

export default App;
