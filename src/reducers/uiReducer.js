import * as Types from '../constants/Types';

const initialState = {
    dropDown: {
        where: '',
        activeId: '',
        show: false
    },
    lazyloadImage: {
        where: '',
        activeId: '',
        toggle: false
    },
    isModal: false
};

export default (state=initialState, action) => {

    switch(action.type) {

        case Types.TOGGLE_DROPDOWN: {
            return toggleDropDown(state, action);
        }
        case Types.EFFECT_LAZYLOAD_IMAGE_PLAY:
            return playEffectLazyloadImage(state, action);
        case Types.EFFECT_LAZYLOAD_IMAGE_PAUSE:
            return {
                ...state,
                lazyloadImage: {
                    where: '',
                    activeId: '',
                    toggle: true
                }
            };
        case Types.TOGGLE_MODAL: 
            return {...state, isModal: !state.isModal};
        default:
            return state;
    };
};

const toggleDropDown = (state, action) => {
    const { where, id } = action.payload;

    return {
        ...state,
        dropDown: {
            where: where !== state.dropDown.where ? where : "",
            activeId: id !== state.dropDown.id ? id : "",
            show: id !== state.dropDown.id
        }
    };
};

const playEffectLazyloadImage = (state, action) => {
    const { where, id } = action.payload;

    return {
        ...state,
        lazyloadImage: {
            where: where,
            activeId: id,
            toggle: id !== state.lazyloadImage.id
        }

    };
};

