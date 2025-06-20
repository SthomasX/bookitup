import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';
import SignUp from './Pages/usersignup'; // <-- import your SignUp page
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} /> {/* new route for SignUp */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

