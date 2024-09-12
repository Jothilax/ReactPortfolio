import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import BookConsultation from './BookConsultation';
import Footer from './Footer';

function App() {
  return (
    <>
    <Nav />
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/book' element={<BookConsultation />}/>
    </Routes>
    {/* <Home /> */}
    <Footer />
    </>
  );
}

export default App;
