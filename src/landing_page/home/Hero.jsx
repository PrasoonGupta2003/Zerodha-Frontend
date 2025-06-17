import React from 'react';
import { Link } from "react-router-dom";
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png" alt='Hero' className='mb-5'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <Link to="https://zerodha-backend-4jc1.onrender.com/signup" style={{ textDecoration: "none" }}>
                <button className="p-3 fs-5 btn btn-primary mb-5" style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
                </Link>
            </div>
        </div>
     );
}

export default Hero;