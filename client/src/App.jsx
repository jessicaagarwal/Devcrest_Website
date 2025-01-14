import './App.css';
import { Navbar } from './components/Navbar';
// import { Navbar } from './components/Navbar';
import { Hometext } from './components/Hometext';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Events } from './components/Events';
// import { Navbar2 } from './components/Navbar2';

function App() {
  return (
    <Router>
      <div className="bod">
        <Navbar />
        {/* <Navbar2/> */}

        <Routes>
          <Route path="/" element={<Hometext />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/event" element={<Events/>} />
{/*           <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
