import {
    GET_COURSES,
    COURSES_RECEIVED,
    COURSES_PAGE_UNLOADED,
    SHOW_COURSE_DETAILS,
    HIDE_COURSE_DETAILS,
    COURSE_NAV_TOGGLED,
    CLOSE_MODAL
} from '../../constants/actionTypes';

const initialState = {
    courses: {},
    selectedCourseId: null,
    isModalOpen: false,
    isCourseNavExpanded: false
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
        case SHOW_COURSE_DETAILS:
            return {
                ...state,
                selectedCourseId: action.payload,
                isModalOpen: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                selectedCourseId: null,
                isModalOpen: false
            };
        case HIDE_COURSE_DETAILS:
            return {
                ...state,
                selectedCourseId: null,
                isModalOpen: false
            };
        
        default:
            return state;
    }
};