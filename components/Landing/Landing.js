import React from 'react';
import './Landing.scss';
import Header from '../Header/Header';

const Landing = () => {
    return (
        <div className="section-wrapper">
           <Header titleContext={"City Electrical Contractors"} classes={"title"} subtitleContext={"Electrical and Instrumentation Plant Construction ·  Maintenance · Commercial Building Installations · Shutdown · House Wiring · Panel Wiring · Lighting · Inspections ·  Commissioning"} />
        </div>
    )
}

export default Landing;