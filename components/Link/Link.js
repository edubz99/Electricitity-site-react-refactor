import React from 'react';
import './Link.scss'

const Link = ({ url, content, classes }) => {
    return (
            <a href={url} className="link">{content}</a>
    )
}

export default Link;