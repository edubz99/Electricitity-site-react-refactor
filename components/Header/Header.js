import React from 'react';
import './Header.scss';

const Header = ({ titleClass, titleContext,subtitleClass, subtitleContext }) => {
    return (
        <div className="section-header">
            <h1 className={titleClass}>{titleContext}</h1>
            <p className={subtitleClass}>{subtitleContext}</p>
        </div>
    )
}

export default Header;