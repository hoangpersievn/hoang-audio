import React from 'react';
import { Link } from 'react-router-dom';
import { changeAlias } from '../../utils/func';

import "./LinkArtist.css";

const LinkArtist = ({artists, definePath, defineTitle, className}) => {

    const renderArtists = (artists) => {
        let result = "";

        if(artists) {
            result = artists.map((artist, index) => (
                <Link 
                    key={index}
                    to={`/${changeAlias(definePath)}/${changeAlias(artist)}`}
                >
                        {artist}
                </Link>
            ))
        }
        return result;
    };

    return (
        <div className={`comma ${className || ""}`}>
            {renderArtists(artists)}
        </div>
    );
};

export default LinkArtist;