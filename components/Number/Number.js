import React from 'react';
import './Number.scss'

const Number = ({ className,content,icon }) => {
    //Verifying classes
    // const styles = ['nav-link'];

    // if (className)  {
    //     styles.push(className).join(' ');
    // }

    return (
        <a href={`tel:${content}`} className="phone-number">
            <span className="icon">{icon}</span>
            {content}
        </a>
    )
}

export default Number;
