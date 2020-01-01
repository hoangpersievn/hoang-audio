import { combineReducers } from 'redux';

import chartReducer from './ChartReducer';
import songReducer from './SongReducer';
import trackReducer from './TrackReducer';
import queueReducer from './queueReducer';
import uiReducer from './uiReducer';
import authen from './AuthenReducer';

const AllReducers = combineReducers({
    chartState: chartReducer,
    songData: songReducer,
    trackState: trackReducer,
    queueState: queueReducer,
    UIState: uiReducer,
    authenState: authen
});

export default AllReducers;