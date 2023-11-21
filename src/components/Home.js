import React, { useState } from "react"
import './Home.css'
import Footer from "./Footer";
import img from './img.jpg';
import { Link } from "react-router-dom";


const Home = () => {
    const [menu,setMenu] = useState("home");
  return (
    <div>

         <div className="navbar">
            <ul className="menu">
                <li onClick={()=>{setMenu("home")}}><b>Home{menu==='home'?<hr/>:<></>}</b></li>
                <li onClick={()=>{setMenu("shop")}}><b>Product{menu==='shop'?<hr/>:<></>}</b></li>
                <li onClick={()=>{setMenu("about")}}><b>About{menu==='about'?<hr/>:<></>}</b></li>
            </ul>
            <div className="logo">
                <h1>Medical Shop</h1>
            </div>  aq``
            <div className="navbutton">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/register"><button>Register</button></Link>
            </div>
        </div>
        <div className='background-image' style={{ backgroundImage: `url(${img})` }}>
        </div> 
       
        <Footer />    
    </div>
      
   
  )
}

export default Home;