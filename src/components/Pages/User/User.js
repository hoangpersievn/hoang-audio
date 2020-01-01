import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

import "./User.css";

const User = (props) => {
    const { toggleModal } = props;

    return (
        <div className="user">
            <div className="container">
                <div className="panel">
                    <div className="panel-title">
                        <Link to="/playlist/">
                            Playlist 
                            <i className="ion-ios-arrow-forward"></i>
                        </Link>
                    </div>
                    <div className="panel-content">
                        <div className="panel-card first-card" onClick={() => toggleModal()}>
                            <i className="ion-ios-plus-empty"></i>
                            <p>Tạo playlist mới</p>
                        </div>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;