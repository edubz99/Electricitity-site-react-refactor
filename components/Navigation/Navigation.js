import React, { Component } from 'react';
import './Navigation.scss';
import Number  from '../Number/Number';
import Link  from '../Link/Link';
import FaCodeBars from 'react-icons/lib/fa/bars';

class Navigation extends Component {
    state = {
        isMenuOpen: false,
        width: window.innerWidth
    }

    componentWillMount = () => {
        window.addEventListener('resize', this.handleResize.bind(this) )
    }
    handleResize = () => {
        this.setState({
            width: window.innerWidth
        });
    }
    toggleMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }
    renderMenu = () => {
        return (
            <div className="nav-items">
                <div className="phone-numbers">
                    <Number content="+263 77 543 2822" />
                    <Number content="+263 78 486 0948" />
                </div>
                <div className="links">
                    <Link content="About" url="#"/>
                    <Link content="Services" url="#"/>
                    <Link content="Gallery" url="#"/>
                    <Link content="Contact" url="#"/>
                </div>
            </div>
        )
    }
    render() {
        const isMobile = this.state.width <= 600;
        
        return (
            <div className="navigation">
                <FaCodeBars className="icon" onClick={this.toggleMenu}/>

                {
                    isMobile ?
                        (this.state.isMenuOpen ? this.renderMenu() : null)
                    : this.renderMenu()
                }
            </div>
        );
    }
}

export default Navigation;