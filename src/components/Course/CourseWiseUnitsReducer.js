import {
    GET_COURSE,
    COURSE_RECEIVED,
    COURSE_PAGE_UNLOADED,
    COURSE_NAV_TOGGLED
} from '../../constants/actionTypes';

const initialState = {
    units: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_UNITS:
            return {
                ...state,
                loading: true
            };
        case UNITS_RECEIVED:
            return {
                ...state,
                course: {...action.payload},
                loading: false
            };
        case UNITS_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
};