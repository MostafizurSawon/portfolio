import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import About from './pages/About/About';

function App() {
  return (
    <>
     <Router>
       <Header></Header>
        <Routes>
        <Route exact path="/" element={<Home></Home>}>
          </Route>
          <Route path="/blogs" element={<Blogs></Blogs>}>
          </Route>
          <Route path="/about" element={<About></About>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
