import React from 'react';
import './Wrapper.scss'

const Wrapper = (props) => {
    return (
        <div className= "master-wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;