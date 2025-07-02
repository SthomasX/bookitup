import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import UserHome from './Pages/UserHome';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard'; // ✅ Import Admin Dashboard
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
        <Route path="/user/home" element={<UserHome />} /> // Add this component
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* ✅ Admin Dashboard Route */}
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
