import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import designImg from '../assets/desing.png';
import cloudImg from '../assets/cloud.png';
import dataImg from '../assets/data-analytics.png';
import codingImg from '../assets/coding.png';
import { FaCogs, FaChartLine, FaShieldAlt, FaNetworkWired } from 'react-icons/fa'; 


const FeatureContainers = () => {
    return (
        <section className="container my-5">
            <div className="row text-center">
                <div className="col-md-6 mb-4">
                    <div className="p-4 bg-dark ">
                        <FaCogs size={50} className="mb-3 text-primary" /> 
                        <h2 className="fw-bold">Efficient Solutions</h2>
                        <p>Providing tailored software solutions that enhance operational efficiency for various industries.</p>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="p-4  bg-dark">
                        <FaChartLine size={50} className="mb-3 text-primary" /> 
                        <h2 className="fw-bold">Data-Driven Insights</h2>
                        <p>Empowering decision-making through data analytics and AI, ensuring competitive advantages.</p>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="p-4 bg-dark ">
                        <FaShieldAlt size={50} className="mb-3 text-primary" /> 
                        <h2 className="fw-bold">Secure Infrastructure</h2>
                        <p>Building robust and secure systems that comply with industry standards for maximum protection.</p>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="p-4 bg-dark ">
                        <FaNetworkWired size={50} className="mb-3 text-primary" />
                        <h2 className="fw-bold">Seamless Connectivity</h2>
                        <p>Ensuring seamless integration across systems for smooth and reliable connectivity in operations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureContainers;
