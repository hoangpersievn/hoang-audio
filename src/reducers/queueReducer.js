import * as Types from '../constants/Types';
import { removeById } from '../utils/func';

const initialState = {
    queue: [],
    ids: [],
    isQueue: false
};

export default (state=initialState, action) => {

    switch(action.type) {
        
        case Types.ADD_SONG_TO_QUEUE: 
            return addSongToQueue(state, action);
        case Types.TOGGLE_QUEUE: 
            return {
                ...state,
                isQueue: !state.isQueue
            };
        case Types.CLEAR_QUEUE:
            return { ...state, queue: [], ids: [] };
        case Types.DELETE_QUEUE_ITEM:
            return deleteQueueItem(state, action);
        default:
            return state;
    };
};

const addSongToQueue = (state, action) => {
    
    const matchId = state.ids.find(id => id === action.song.id);
    if(typeof matchId === "undefined") {
        return {
                ...state,
                queue: [...state.queue, action.song],
                ids: [...state.ids, action.song.id]
        };
    }
    return state;
};

const deleteQueueItem = (state, action) => {
    const { queue, ids } = state;
    
    const matchQueue = removeById(queue, action.id);
    const matchIds = removeById(ids, action.id);

    return {
        ...state,
        queue: matchQueue,
        ids: matchIds
    };
};
