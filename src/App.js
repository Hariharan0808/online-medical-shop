import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signin from './components/Login';
import Register from './components/Register';
import ProductList from './components/product';
function App() {
  return (
    <div>     
      
      <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product" element={<ProductList/>} />

            </Routes>
       </Router>
      </div> 
  );
}

export default App;