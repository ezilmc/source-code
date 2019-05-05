import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';
import './Footer.scss';

const Footer = (props) => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-info">
                            <img src={logo} className="img-fluid"/>
                            <div className="social-links">
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>What we Offer?</h4>
                            <ul>
                                <li> <i className="fa fa-minus" aria-hidden="true"></i> <a href="#">For schools</a></li>
                                <li className="padding-left-23"> <a href="#">For families</a></li>
                                <li className="padding-left-23"> <a href="#">Math</a></li>
                                <li className="padding-left-23"> <a href="#">Language arts</a></li>
                                <li className="padding-left-23"> <a href="#">Science</a></li>
                                <li className="padding-left-23"> <a href="#">Social studies</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>About us</h4>
                            <ul>
                                <li className="padding-left-23"> <a href="#">For schools</a></li>
                                <li className="padding-left-23"> <a href="#">Company information</a></li>
                                <li className="padding-left-23"> <a href="#">Terms of service</a></li>
                                <li className="padding-left-23"> <a href="#">Privacy policy</a></li>
                                <li><i className="fa fa-minus" aria-hidden="true"></i> <a href="#">Press room</a></li>
                                <li className="padding-left-23"> <a href="#">Jobs</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Resources</h4>
                            <ul>
                                <li className="padding-left-23"> <a href="#">Help Center</a></li>
                                <li><i className="fa fa-minus" aria-hidden="true"></i> <a href="#">Blog</a></li>
                                <li className="padding-left-23"> <a href="#">Testimonials</a></li>
                                <li className="padding-left-23"> <a href="#">Research</a></li>
                                <li className="padding-left-23"> <a href="#">Contact us</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            
        </footer>
        
    );
};

export default Footer;