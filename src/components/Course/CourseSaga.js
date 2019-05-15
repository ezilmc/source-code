import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
    GET_COURSES,
    COURSES_RECEIVED,
    GET_COURSE,
    COURSE_RECEIVED,
    API_ERRORED,
    GET_COURSE_UNITS,
    COURSE_UNITS_RECEIVED
} from '../../constants/actionTypes'; 
import axios from 'axios';

export default function* courseActionWatcher() {
    
    yield takeEvery(GET_COURSES, getCourses);
    yield takeEvery(GET_COURSE, getCourse);
    yield takeEvery(GET_COURSE_UNITS, getCourseUnits);
}

function* getCourses() {
    
    try {
        const payload = yield axios.get(`${process.env.REACT_APP_API_ROOT}/courseList.json`)
            .then(response => response.data);
        yield put({ type: COURSES_RECEIVED, payload});
    }catch (e) {
        yield put({ type: API_ERRORED, payload: e})
    }
}

function* getCourse(action) {
    console.log('Course here');
    try {
        const payload = yield axios.get(`${process.env.REACT_APP_API_ROOT}/course.json`)
            .then(response => response.data);
        yield put({ type: COURSE_RECEIVED, payload});
    }catch (e) {
        yield put({ type: API_ERRORED, payload: e})
    }
}

function* getCourseUnits(action) {
    console.log('Course Units here');
    try {
        const payload = yield axios.get(`${process.env.REACT_APP_API_ROOT}/units.json`)
            .then(response => response.data);
        yield put({ type: COURSE_UNITS_RECEIVED, payload});
    }catch (e) {
        yield put({ type: API_ERRORED, payload: e})
    }
}
