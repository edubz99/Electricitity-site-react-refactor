
import React from 'react';

const Service = ({ title, context }) => {
    return (
        <div className="card">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{context}</p>
        </div>
    );
};

export default Service;
