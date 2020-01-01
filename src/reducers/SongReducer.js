import * as Types from '../constants/Types';

const initialState = {
    data: {},
    isFetching: false,
    isPlaying: false
};

export default (state=initialState, action) => {

    switch(action.type) {
        case Types.TOGGLE_PLAY:
            return { ...state, isPlaying: !state.isPlaying };
        case Types.ON_PLAY:
            return { ...state, isPlaying: true};
        case Types.ON_PAUSE:
            return { ...state, isPlaying: false};
        case Types.START_FETCHING_SONG: 
            return { ...state, isFetching: true };
        case Types.FETCH_SONG_SUCCESS: 
            return { ...state,data: action.data, isFetching: false, isPlaying: true };
        case Types.FETCH_SONG_FAILURE:
            return { ...state, isFetching: false };
        default:
            return state;
    };
};
