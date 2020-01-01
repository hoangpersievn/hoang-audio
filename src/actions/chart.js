import * as Types from '../constants/Types';

const popTypes = {
    pop: 'IWZ9Z0BW',
    kpop: 'IWZ9Z0BO',
    vpop: 'IWZ9Z08I',
};

export const fetchChart = (popType) => {

    return dispatch => {
        //call api
        switch (popType) {
            case 'pop':
                dispatch({ type: Types.FETCH_POP_CHART });
                break;
            case 'kpop':
                dispatch({ type: Types.FETCH_KPOP_CHART });
                break;
            case 'vpop':
                dispatch({ type: Types.FETCH_VPOP_CHART });
                break;
            default:
                break;
        }
    };
};

export const actChangeActiveChart = (popType) => {

    return (dispatch, getState) => {
        const state = getState();

        if (Object.keys(state.chartState[popType]).length) {
            dispatch({ type: Types.CHANGE_ACTIVE_CHART, popType });
        } else {
            fetchChart(popType);
        }

    };
};