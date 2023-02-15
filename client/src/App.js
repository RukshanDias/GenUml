import './App.css';
import Navbar from './components/nav/navbar/Navbar.js';
import Home from './pages/Home/Home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Home />} />
          {/* <Route path="/products" element={<Products />} />
      <Route path="/sign-up" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;