import * as Types from '../constants/Types';

export const toggleDropDown = (where, id) => {

    return dipatch => {
        dipatch({
            type: Types.TOGGLE_DROPDOWN,
            payload: {where, id}
        });
    };
};

export const playEffectLazyloadImage = (where, id) => {
    
    return dispatch => {
        dispatch({ type: Types.EFFECT_LAZYLOAD_IMAGE_PLAY, payload: {where, id} });
    };
};

export const pauseEffectLazyloadImage = () => {

    return dispatch => {
        dispatch({ type: Types.EFFECT_LAZYLOAD_IMAGE_PAUSE });
    };
};

export const toggleModal = () => {
    
    return dispatch => {
        dispatch({ type: Types.TOGGLE_MODAL });
    };
};
