import {
    GET_COURSE,
    COURSE_RECEIVED,
    COURSE_PAGE_UNLOADED,
    COURSE_NAV_TOGGLED
} from '../../constants/actionTypes';

const initialState = {
    course: {},
    isCourseNavExpanded: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_COURSE:
            return {
                ...state,
                loading: true
            };
        case COURSE_RECEIVED:
            return {
                ...state,
                course: {...action.payload},
                loading: false
            };
        case COURSE_PAGE_UNLOADED:
            return {};
        case COURSE_NAV_TOGGLED:
            return {
                ...state,
                isCourseNavExpanded: action.payload,
            };
        
        default:
            return state;
    }
};