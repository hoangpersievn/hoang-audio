import React from 'react';

import { LinkArtist } from '../../index';

import "./SongPage.css";

const SongPage = (props) => {
    const { thumbnail, artists, title } = props.songData;
    
    return (
        <div className="song">
            <div className="song-header">
                <div className="song-header-img">
                    <img src={thumbnail} alt=""/>
                </div>
                <div className="song-header-info">
                    <div className="song-header-song-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="song-header-song-artists">
                        <LinkArtist definePath="nghe si" artists={artists}/>
                    </div>
                </div>
                <div className="song-header-actions">
                    <button className="sc-ir">
                        <i className="ion-ios-download-outline"></i>
                    </button>
                    <button className="sc-ir">
                        <i className="ion-ios-plus-empty"></i>
                    </button>
                </div>
            </div>
            <div className="song-body">

            </div>
        </div>
    );
};

export default SongPage;