// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import Content from './components/Content'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='bg-black flex flex-col justify-center items-center'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
        <Navbar1 />
      </Router>
    </div>
  );
}

export default App;
