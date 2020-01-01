import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import Social from './Social';

import './Authen.css';

class Authen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signState: true,
            email: "",
            password: ""
        };
    }

    toggleLogin = () => {
        this.setState({ signState : !this.state.signState });
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    };

    renderProcessing = () => (
        <button disabled={this.props.authenState.isProcessing}>
            <div className="loading">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </button>
    );

    handleFormSubmit = (e) => {
        const { logIn } = this.props;
        const { email, password } = this.state;

        e.preventDefault();
        logIn({email, password});
    };

    render() {
        const { signState } = this.state;
        const { authenState } = this.props;
        const { from } = this.props.location.state || { from: '/'}
        
        if(authenState.isAuthenticated)
            return <Redirect to={from}/>

        return (
            <div className="authen">
                <div className={`container ${signState ? "" : "right-panel-active"}`} id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <Social/>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name..." name="name"/>
                            <input type="email" placeholder="Email..." />
                            <input type="password" name="password" placeholder="Password..." />
                            <button>Sign up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={(e) => this.handleFormSubmit(e)}>
                            <h1>Sign in</h1>
                            <Social/>
                            <span>or use your email for registration</span>
                            <input type="email" placeholder="Email..." name="email" onChange={(e) => this.handleInputChange(e)}/>
                            <input type="password" name="password" placeholder="Password..." onChange={(e) => this.handleInputChange(e)}/>
                            <a href="/">Forgot your password ?</a>
                            {/* <button disabled={authenState.isProcessing}>
                                {`${!authenState.isProcessing ? "Sign in" : this.renderProcessing()}`}
                            </button> */}
                            { 
                                !authenState.isProcessing ? 
                                <button type="submit">Sign in</button> :
                                this.renderProcessing()
                            }
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome back !</h1>
                                <p>To keep connected with us please login with your pesonal info</p>
                                <button className="ghost" id="signIn" onClick={() => this.toggleLogin()}>Sign in</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend !</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={() => this.toggleLogin()}>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(Authen);