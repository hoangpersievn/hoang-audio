import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InputRange from 'react-input-range';
import { changeAlias } from '../../utils/func';
import { requestInterval, clearRequestInterval} from '../../requestInterval';
import { LinkArtist } from '../index';
import PlayerLoad from './PlayerLoad';

import 'react-input-range/lib/css/index.css';
import './Player.css';

class Player extends Component {

    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            isSeeking: false
        }
    };

    componentDidMount() {
        this.audio = this.refs.audio;
        this.audio.addEventListener('loadeddata', this.onLoadedData);
        this.audio.addEventListener('play', this.onPlay);
        this.audio.addEventListener('pause', this.onPause);
        this.audio.addEventListener('ended', this.onEnded);
        
    };

    componentWillUnmount() {
        this.audio.removeEventListener('loadeddata', this.onLoadedData);
        this.audio.removeEventListener('play', this.onPlay);
        this.audio.removeEventListener('pause', this.onPause);
        this.audio.removeEventListener('ended', this.onEnded);
    };

    componentDidUpdate(nextProp, nextState) {
        if (nextProp.isPlaying !== this.props.isPlaying) {
            if (this.props.isPlaying) {
              this.audio.play();
            } else {
              this.audio.pause();
            }
          }
    };

    onLoadedData = () => {

        if(this.props.songData)
            this.audio.play();
    
    };

    onPlay = () => {
        const { actOnPlay } = this.props;

        this.timer = requestInterval(this.updateProgress, 50);
        actOnPlay();
    };

    onPause = () => {
        const { actOnPause } = this.props;

        clearRequestInterval(this.timer);
        actOnPause();
    };

    onEnded = () => {
        clearRequestInterval(this.timer);

        this.onPause();
    };

    updateProgress = () => {
        let val = 0;
        if(this.audio.currentTime > 0) {
            val = (this.audio.currentTime / this.audio.duration *100).toFixed(0);
        }
        if(!this.state.isSeeking) {
            this.setState({
                progress: val 
            })
        }
    };

    handleChange = (value) => {
        this.setState({
            progress: value,
            isSeeking: true
        })
    };

    handleChangeComplete = (value) => {
        this.audio.play();
        if(this.audio.duration)
            this.audio.currentTime = (value / 100) * this.audio.duration; 
        this.setState({
            isSeeking: false
        })
    };

    formatTime = (s) => {
        const min = Math.floor(s / 60);
        const second = Math.floor(s) % 60;
        return `${min}:${second <= 9 ? `0${second}` : second.toString()}`;
    };

    findSong = (direction) => {
        const { queue, songData } = this.props;
        const idCurrent = songData.id;
        let index;

        for(let i in queue) {
            if(queue[i].id === idCurrent) {
                switch(direction) {
                    case 'next': 
                        index = (i+1) % queue.length;
                        break;
                    case 'prev':
                        index = (i+queue.length-1) % queue.length;
                        break;
                    default:
                        return null;
                };
                
                return queue[index];
            }
        };
        return undefined;
    };

    actDiriectionSong = (direction) => {
        const { fetchSong } = this.props;
        const directionSong = this.findSong(direction);

        if(!directionSong) return;
        const { id } = directionSong;

        fetchSong(id);
    };

    renderIconsPlay = () => {
        const { isPlaying } = this.props;

        return isPlaying ? <i className="ion-pause"></i> : <i className="ion-play"></i>
    };

    render() {
        const { progress } = this.state;
        const { songData, queue, isFetching } = this.props;

        return (
            <div className="player">
                <audio 
                    autoPlay
                    src={songData.source} 
                    crossOrigin='anonymous'
                    ref="audio"
                />
                <img src={songData.thumbnail} alt="" className="player-song-thumbnail" />
                <div className="player-info">
                    <Link to={`/song/${changeAlias(songData.title || "")}/${songData.id}`} className="ellipsis player-song-title">{songData.title}</Link>
                    <LinkArtist
                        artists={songData.artists}
                        definePath="nghe-si"
                    />
                </div>
                <div className="player-btns">
                    <button 
                        className="sc-ir player-btn"
                        onClick={() => this.actDiriectionSong('prev')}
                    >
                        <i className="ion-ios-rewind"></i>
                    </button>
                    <button className="sc-ir player-btn" onClick={() => this.props.actTogglePlay()}>
                        { isFetching ? <PlayerLoad/> : this.renderIconsPlay()}
                    </button>
                    <button 
                        className="sc-ir player-btn"
                        onClick={() => this.actDiriectionSong('next')}
                    >
                        <i className="ion-ios-fastforward"></i>
                    </button>
                </div>
                <div className="player-seek">
                    <span>{(this.audio && this.audio.currentTime) ? this.formatTime(this.audio.currentTime) : '0:00'}</span>
                    <InputRange
                        maxValue={100}
                        minValue={0}
                        value={Number(progress)}
                        onChange={value => this.handleChange(value)}
                        onChangeComplete={value => this.handleChangeComplete(value)}
                    />
                    <span>{(this.audio && this.audio.duration) ? this.formatTime(this.audio.duration) : '0:00'}</span>
                </div>
                <div className="player-other">
                    <button className="sc-ir player-btn" title="Loop">
                        <i className="ion-loop"></i>
                    </button>
                    <button 
                        className="sc-ir player-btn queue-btn" 
                        onClick={() => this.props.toggleQueue()}
                    >
                        <span className="queue-circle">{queue.length}</span>
                        <img className="player-icon" src={`${process.env.PUBLIC_URL}/svg/playlist.svg`} alt="playlist" />
                    </button>
                </div>
            </div>
        );
    };
};

export default Player;