import React from 'react';
import { compose } from 'redux';
import HaveDropDown from '../../HOC/HaveDropDown';
import HaveLazyloadImage from '../../HOC/HaveLazyloadImage'
import TrackItem from './TrackItem';

import './Track.css';

const Track = (props) => {
    const { track } = props;

    const showTracks = (tracks) => {
        let result = "";

        if (tracks.length > 0)
            result = tracks.map((track, index) => {
                return (
                    <TrackItem
                        key={index}
                        order={index}
                        {...track}
                        {...props}
                    />
                );
            });
        return result;
    };

    return (
        <div className="track-list">
            {showTracks(track)}
        </div>
    );

}

export default compose(HaveDropDown, HaveLazyloadImage)(Track);