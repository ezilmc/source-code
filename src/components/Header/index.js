import React from "react";
import { Link} from "react-router-dom";
import './Header.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import logo from '../../assets/img/logo.png';
import IntroCorousel from '../IntroCorousel';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <React.Fragment>
            <header id="header" className={window.location.pathname === '/'?'':'inner-page'}>
                <div className="container-fluid">

                    <Navbar color="faded" light expand="md">
                        <NavbarBrand href="/"><img src={logo} alt="" title="" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem active={window.location.pathname === "/"}>
                                    <NavLink href="/" >Home</NavLink>
                                </NavItem>
                                <NavItem active={window.location.pathname === "/learning"}>
                                    <NavLink  href="/learning">Learning</NavLink>
                                </NavItem>
                                <NavItem active={window.location.pathname === "/contact-us"}>
                                    <NavLink  href="/contact-us">Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <button type="button" className="btn btn-round-lg btn-lg">Login</button>
                                </NavItem>
                                
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
           
             {window.location.pathname === '/' ? <IntroCorousel /> : null }
             </React.Fragment>
        );
    }
}

/*const Header = (props) => {
    return (
        <React.Fragment>
            <header id="header">
                <div className="container-fluid">

                    <div id="logo" className="pull-left">
                        <a href="#intro"><img src={logo} alt="" title="" /></a>
                    </div>

                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="#intro">Home</a></li>
                            <li><a href="#about">Learning</a></li>
                            <li><a href="#services">Contact Us</a></li>
                            <li><button type="button" className="btn btn-round-lg btn-lg">Login</button></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <IntroCorousel />
            
        </React.Fragment>
    );
};*/

export default Header;