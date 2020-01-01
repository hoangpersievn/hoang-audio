import * as Types from '../constants/Types';
import CallApi from '../utils/CallApi';

export const fetchSong = (id) => {
    
    return dispatch => {
        dispatch({ type: Types.START_FETCHING_SONG });
        CallApi(`song/${id}`).then( ({ data }) => {
            dispatch({ type: Types.FETCH_SONG_SUCCESS, data}) ;
            dispatch({ type: Types.ADD_SONG_TO_QUEUE, song: {
                title: data.title, id, artists: data.artists, thumbnail: data.thumbnail
            }});
        }).catch( err => {
            console.log(err);
            dispatch({ type: Types.FETCH_SONG_FAILURE });
        })
    }
};

export const actOnPause = () => {
    return dispatch => {
        dispatch({ type: Types.ON_PAUSE });
    }
};

export const actOnPlay = () => {
    return dispatch => {
        dispatch({ type: Types.ON_PLAY });
    };
};

export const actTogglePlay = () => {
    return dispatch => {
        dispatch({ type: Types.TOGGLE_PLAY });
    };
};