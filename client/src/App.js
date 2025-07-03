// 🔝 All imports at the top
import './App.css';
import './login.css'; // Make sure this file exists and matches the case exactly

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import UserHome from './Pages/UserHome';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import SignUp from './Pages/usersignup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CategoryPage from './Pages/CategoryPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<CategoryPage category="movies" />} />
        <Route path="/comedy" element={<CategoryPage category="comedy" />} />
        <Route path="/music" element={<CategoryPage category="music" />} />
        <Route path="/festivals" element={<CategoryPage category="festivals" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
