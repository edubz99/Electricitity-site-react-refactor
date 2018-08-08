import React from 'react';
import './Landing.scss';
import Header from '../Header/Header';

const Landing = () => {
    return (
        <div className="section-wrapper">
           <Header titleClass={"landing-title"} titleContext={"City Electrical Contractors"} subtitleContext={"Electrical and Instrumentation Plant Construction ·  Maintenance · Commercial Building Installations · Shutdown · House Wiring · Panel Wiring · Lighting · Inspections ·  Commissioning"} subtitleClass={"landing-subtitle"} />
        </div>
    )
}

export default Landing;