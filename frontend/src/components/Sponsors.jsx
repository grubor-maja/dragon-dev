import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import microsoftImg from '../assets/microsoft.png';
import samsungImg from '../assets/samsung.png';
import huaweiImg from '../assets/huawei.png';
import amazonImg from '../assets/amazon.png';
import googleImg from '../assets/google.webp';

const Sponsors = () => {
    return (
        <section className=" py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <img src={amazonImg} alt="Amazon" className="sponsor-logo mx-3" />
                <img src={googleImg} alt="Google" className="sponsor-logo mx-3" />
                <img src={huaweiImg} alt="Huawei" className="sponsor-logo mx-3" />
                <img src={microsoftImg} alt="Microsoft" className="sponsor-logo mx-3" />
                <img src={samsungImg} alt="Samsung" className="sponsor-logo mx-3" />
            </div>
        </section>
    );
};

export default Sponsors;