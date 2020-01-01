import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({thumbnail, title, id}) => (
    <div className="panel-card">
        <div className="card-img">
            <img src={thumbnail || `${process.env.PUBLIC_URL}/images/album_default.png`} alt=""/>
            <div className="wrapped-img">
                <Link to="/playlist/id">
                    <i className="ion-ios-play"></i>
                </Link>
                <div className="icon-close">
                    <i className="ion-android-close"></i>
                </div>
            </div>
        </div>
        <div className="card-info">
            <p>info</p>
        </div>
    </div>
);

export default CardItem;