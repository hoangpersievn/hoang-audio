import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from '../components/Dropdown/Dropdown';
import { toggleDropDown, toggleModal } from '../actions/ui';
import { actAddSongToQueue } from '../actions/queue';
import { fetchSong } from '../actions/song';

export default function (WrappedComponent) {
    
    class HaveDropdown extends Component {

        renderDropDown = (where, {id, thumbnail, artists, title}) => {
            const { showDropDown, dropDownActiveId } = this.props;

            return showDropDown && where === this.props.where && id === dropDownActiveId && 
                <Dropdown
                    id={id}
                    thumbnail={thumbnail}
                    title={title}
                    artists={artists}
                    {...this.props}
                />
        };

        render() {
            return (
                <WrappedComponent {...this.props} renderDropDown={this.renderDropDown}/>
            );
        };
    };

    const mapStateToProps = state => {
        const { show, where, activeId } = state.UIState.dropDown;
        const { queue } = state.queueState;

        return {
            where: where,
            dropDownActiveId: activeId,
            showDropDown: show,
            queue
        };
    }
    
    return connect(mapStateToProps, {
        toggleDropDown,
        actAddSongToQueue,
        fetchSong,
        toggleModal
    })(HaveDropdown);
};
