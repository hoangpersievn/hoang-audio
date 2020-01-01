import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playEffectLazyloadImage, pauseEffectLazyloadImage } from '../actions/ui';
import { fetchSong, actTogglePlay } from '../actions/song';
import LazyloadImage from '../components/LazyloadImage/LazyloadImage';

export default function (WrappedComponent) {

    class HaveLazyloadImage extends Component {

        renderLazyloadImage = (lazyPlace, { id, thumbnail }) => (
            <LazyloadImage lazyPlace={lazyPlace} id={id} thumbnail={thumbnail} {...this.props} />
        )

        render() {
            return (
                <WrappedComponent {...this.props} renderLazyloadImage={this.renderLazyloadImage} />
            )
        };
    };

    const mapStateToProps = state => {
        const { where, activeId, toggle } = state.UIState.lazyloadImage;
        const { songData } = state;

        return {
            whereCurrent: where,
            lazyActived: activeId,
            lazyToggle: toggle,
            isPlaying: songData.isPlaying
        }
    };

    return connect(mapStateToProps, {
        playEffectLazyloadImage,
        fetchSong,
        pauseEffectLazyloadImage,
        actTogglePlay
    })(HaveLazyloadImage);
};