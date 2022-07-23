import React from 'react';
import aven from '../../Media/org/Aven.png';
import amara from '../../Media/org/Amara.png';
import circle from '../../Media/org/Circle.png';
import kyan from '../../Media/org/Kyan.png';
import treva from '../../Media/org/Treva.png';

const Clins = () => {
    return (
        <div>
             <h1 className="text-xl text-primary text-center">5,000+ high-impact teams rely on Fieldx</h1>
             <div className="lg:flex mx-auto justify-evenly my-12 ">
                <img src={aven} alt="" />
                <img src={amara} alt="" />
                <img src={circle} alt="" />
                <img src={kyan} alt="" />
                <img src={treva} alt="" />
             </div>
            
        </div>
    );
};

export default Clins;