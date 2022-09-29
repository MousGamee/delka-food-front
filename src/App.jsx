import logo from './logo.svg';
import './App.css';
import Navbar from './components/General/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/General/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
