
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nabar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="flex mx-auto">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
