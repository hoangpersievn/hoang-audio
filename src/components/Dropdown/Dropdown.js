import React, { Component } from 'react';

import './Dropdown.css';

class Dropdown extends Component {

    handleOptionOnClickNextUp = () => {
        const { actAddSongToQueue, toggleDropDown, id, thumbnail, artists, title, where, queue, fetchSong } = this.props;

        toggleDropDown(where, id);
        actAddSongToQueue({id, thumbnail, artists, title});
        if(!queue.length){
            fetchSong(id)
        }
    };

    render() {
        const { toggleModal } = this.props;
         
        return (
            <div className="dropdown-box">
                <div className="options-container">
                    <div className="option" onClick={() => this.handleOptionOnClickNextUp()}>
                        <img src={`${process.env.PUBLIC_URL}/svg/queue-add.svg`} alt="add" />
                        <label htmlFor="nextUp">Add to next up</label>
                    </div>
                    <div className="option" onClick={() => toggleModal()}>
                        <img src={`${process.env.PUBLIC_URL}/svg/queue-next.svg`} alt="next" />
                        <label htmlFor="playList">Add to playlist</label>
                    </div>
                    <div className="option">
                        <i className="ion-android-share-alt"></i>
                        <label htmlFor="share">Share</label>
                    </div>
                </div>
            </div>
        );
    };
};

export default Dropdown;