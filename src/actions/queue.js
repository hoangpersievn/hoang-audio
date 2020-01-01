import * as Types from '../constants/Types';

export const toggleQueue = () => {
    return dispatch => {
        dispatch({ type: Types.TOGGLE_QUEUE });
    }
};

export const actAddSongToQueue = (song) => {

    return dispatch => {
        dispatch({ type: Types.ADD_SONG_TO_QUEUE, song});
    };
};

export const actClearQueue = () => {
    
    return dispatch => {
        dispatch({ type: Types.CLEAR_QUEUE });
    };
};

export const actDeleteQueueItem = (id) => {

    return dispatch => {
        dispatch({ type: Types.DELETE_QUEUE_ITEM, id });
    }
};