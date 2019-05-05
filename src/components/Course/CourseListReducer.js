import {
    GET_COURSES,
    COURSES_RECEIVED,
    COURSES_PAGE_UNLOADED
} from '../../constants/actionTypes';

const initialState = {
    courses: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_COURSES:
            return {
                ...state,
                loading: true
            };
        case COURSES_RECEIVED:
            return {
                ...state,
                courses: {...action.payload},
                loading: false
            };
        case COURSES_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
};