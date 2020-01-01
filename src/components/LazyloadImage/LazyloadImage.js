import React, { Component } from 'react';

import "./LazyloadImage.css";

class LazyloadImage extends Component {

    handleLazyloadOnClick = () => {
        const { lazyPlace, id, playEffectLazyloadImage, fetchSong } = this.props;


        playEffectLazyloadImage(lazyPlace, id);
        fetchSong(id);
    };

    render() {
        const { thumbnail, lazyPlace, id, lazyToggle, lazyActived, pauseEffectLazyloadImage, isPlaying, actTogglePlay} = this.props;
        return (
            <div className="lazyload-img" onClick={() => actTogglePlay()}>
                <img src={thumbnail} alt="thumb"/>
                {
                    isPlaying && lazyToggle && lazyPlace === this.props.whereCurrent && id === lazyActived ?
                        <div className="lazyload-loading" onClick={() => pauseEffectLazyloadImage()}>
                            <div className="obj"></div>
                            <div className="obj"></div>
                            <div className="obj"></div>
                            <div className="obj"></div>
                            <div className="obj"></div>
                            <div className="obj"></div>
                            <div className="obj"></div>
                            <div className="obj"></div>
                        </div> :
                        <div className="lazyload-icon" onClick={() => this.handleLazyloadOnClick()}>
                            <i className="ion-play"></i>
                        </div>
                }
            </div>
        );
    };
};

export default LazyloadImage;