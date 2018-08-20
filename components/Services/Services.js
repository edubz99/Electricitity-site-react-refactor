import React from 'react';
import Header from '../Header/Header';
import Service from './Service';

const Services = () => {
    return (
        <div className="section-wrapper">
            <Header titleClass={"services-title"} titleContext={"Services"} classes={"border title"} subtitleContext={"Our services are available for both domestic and commercial needs, no job is too small!"} subtitleClass={"services-subtitle"}/>
            <Service title={"Residential & Commercial Services"} context={"Whether Residential or Commercial, we can provide the necessary resources to meet your electrical needs."}/>
        </div>
    );
};

export default Services;