import { combineReducers } from 'redux';
import courses from './components/Course/CourseListReducer';
import courseDetails from './components/Course/CourseDetailsReducer';

export default combineReducers({
    courses,
    courseDetails
});