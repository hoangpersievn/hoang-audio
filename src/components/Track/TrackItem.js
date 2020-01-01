import React from 'react';
import { Link } from 'react-router-dom';
import { changeAlias } from '../../utils/func';
import LinkArtist from '../LinkArtist/LinkArtist';


const TrackItem = ({ title, order, thumbnail, artists, id, renderDropDown, toggleDropDown, renderLazyloadImage}) => (
    <li className="track-item">
        <div className="track-position">
            {order+1}
        </div>
        {renderLazyloadImage('track', {id, thumbnail})}
        <div className="track-detail">
            <div className="track-title">
                <Link to={`/song/${changeAlias(title)}/${id}`}>{title}</Link>
            </div>

            <LinkArtist
                artists={artists}
                definePath={"nghe-si"}
            />
        </div>
        <div className="track-actions">
            <div className="track-toolbar">
                <button className="sc-ir">
                    <i className="ion-android-download"></i>
                </button>
                <button className="sc-ir">
                    <i className="ion-android-share"></i>
                </button>
                <button className="sc-ir" onClick={() => toggleDropDown('track', id)}>
                    <i className="ion-more"></i>
                </button>
            </div>
        </div>
        {renderDropDown('track', {id, thumbnail, artists ,title})}
    </li>
);

export default TrackItem;