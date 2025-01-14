import './App.css';
import { Navbar } from './components/Navbar';
import { Hometext } from './components/Hometext';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Events } from './components/Events';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Change to HashRouter

function App() {
  return (
    <Router>
      <div className="bod">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hometext />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Events />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
