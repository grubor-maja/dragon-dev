import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    return (
        <section className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold hero-title">Powering the Future with Innovative Software Solutions</h1>
                    <p className="lead hero-subtitle">
                        Dragon Dev is dedicated to delivering cutting-edge software solutions across various industries, including Cybersecurity, HealthTech, Finance, Retail, and PharmaTech. Our expertise drives digital transformation, efficiency, and growth.
                    </p>
                    <div className="d-flex gap-3">
                        <button className="btn btn-primary btn-lg">Get Started</button>
                        <button className="btn btn-outline-secondary btn-lg">Learn More</button>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img 
                        src="https://darvideo.tv/wp-content/uploads/2019/10/IT-and-Software-Video-1.png" 
                        alt="Dragon Dev Solutions" 
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
