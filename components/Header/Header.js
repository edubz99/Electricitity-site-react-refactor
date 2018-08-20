import React from 'react';
import './Header.scss';

const Header = ({ titleContext, subtitleContext, classes }) => {
    return (
        <div className="section-header">
            <h1 className={classes}>{titleContext}</h1>
            <p className="subtitle">{subtitleContext}</p>
        </div>
    )
}

export default Header;