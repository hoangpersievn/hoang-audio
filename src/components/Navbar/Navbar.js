import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import NavLinkCustom from './NavLinkCustom';

import './Navbar.css';
class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navLinks : [
                { label : 'HOME', to : '/', exact : true },
                { label : 'CHARTS', to : '/charts', exact : false },
                { label : 'ALBUMS', to : '/albums', exact : false },
                { label : 'ARTISTS', to : '/artists', exact : false }
            ]
        };
    };

    componentDidMount() {
        this.rootElm = ReactDOM.findDOMNode(this);
        this.bugerElm = this.rootElm.querySelector('.burger');
        this.navElm = this.rootElm.querySelector('.nav-links');
        this.navArr = this.rootElm.querySelectorAll('.nav-links li');

    };

    showNavLinks = (navLinks) => {
        let result = "";
        
        if(navLinks.length > 0) {
            result = navLinks.map((link, index) => {
                return (
                    <NavLinkCustom
                        key={index}
                        to={link.to}
                        label={link.label}
                        activeOnlyWhenExact={link.exact}
                    />
                );
            });
        }
        return result;
    };

    navLinksSlide = () => {
        this.navElm.classList.toggle('nav-fade');
        this.bugerElm.classList.toggle('burger-toggle');
        this.navArr.forEach((link, index) => {
            if(link.style.animation)
                link.style.animation = "";
            else
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    };


    render() {
        const { isAuthenticated, logOut, user } = this.props;

        return (
            <header>
                <div className="logo">
                    <Link to="/"><h4>Persie Hoang</h4></Link>
                </div>
                <div className="search">
                    <i className="ion-search"></i>
                    <input className="search-input" type="text" placeholder="Search for songs"/>
                </div>
                <nav>
                    <ul className="nav-links">
                        {this.showNavLinks(this.state.navLinks)}
                        {
                            !isAuthenticated ?
                            <NavLinkCustom
                                label="Log in"
                                to="/login"
                                exact={false}
                                srcImg="svg/login.svg"
                            /> :
                            <NavLinkCustom
                                label={user.email}
                                to="/mymusic"
                                exact={false}
                            />
                        }
                        {
                            isAuthenticated ?
                            <li>
                                <Link to="/" onClick={() => logOut()}>
                                    <img src={`${process.env.PUBLIC_URL}/svg/sign-out-option.svg`} alt=""/>
                                </Link>
                            </li> :
                            ""
                        }
                    </ul>
                </nav>
                <div className="burger" onClick={() => this.navLinksSlide()}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </header>
        );
    };
};

export default Navbar;