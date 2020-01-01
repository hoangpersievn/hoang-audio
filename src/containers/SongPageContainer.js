import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from '../utils/func';
import { fetchSong } from '../actions/song';
import { Pages } from '../components/index';

class SongPageContainer extends Component {

    componentDidMount() {
        const { id } = this.props.match;

        if(isEmpty(this.props.songData) || id !== this.props.songData.id){
            this.props.fetchSong(id);
        }
    };

    render() {
        return (
            <Pages.SongPage {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    const { songData } = state;
    return {
        songData: songData.data
    }
};

export default connect(mapStateToProps, {
    fetchSong
})(SongPageContainer);