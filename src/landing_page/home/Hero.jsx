import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const navigate=useNavigate();
function Hero() {
    const { user, setUser } = useAuth();
      const handleClick = (e) => {
        e.preventDefault();
        if (user) {
          window.location.href = "https://zerodha-dashboard-ypwy.onrender.com"; // Change if deployed
        } else {
          navigate("/signup");
        }
      };
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png" alt='Hero' className='mb-5'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button className="p-3 fs-5 btn btn-primary mb-5" style={{width:"20%", margin:"0 auto"}} onClick={handleClick}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;