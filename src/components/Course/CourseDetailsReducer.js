import {
    GET_COURSE,
    COURSE_RECEIVED,
    COURSE_PAGE_UNLOADED,
    COURSE_NAV_TOGGLED,
    GET_COURSE_UNITS,
    COURSE_UNITS_RECEIVED
} from '../../constants/actionTypes';

const initialState = {
    course: {},
    isCourseNavExpanded: false,
    selectedLevel: {
          id: 1,
          name: 'Level 1',
          levelCode: 'L1'
        },
    units: []
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
        case GET_COURSE_UNITS:
             return {
                ...state,
                selectedLevel: action.payload?{...action.payload}:state.selectedLevel,
                loading: true
            };
        case COURSE_UNITS_RECEIVED:
            return {
                ...state,
                units: [...action.payload],
                loading: false
            };
        
        default:
            return state;
    }
};