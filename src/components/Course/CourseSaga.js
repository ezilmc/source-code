import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
    GET_COURSES,
    COURSES_RECEIVED,
    GET_COURSE,
    COURSE_RECEIVED,
    API_ERRORED
} from '../../constants/actionTypes'; 
import axios from 'axios';

export default function* courseActionWatcher() {
    
    yield takeEvery(GET_COURSES, getCourses);
    yield takeEvery(GET_COURSE, getCourse);
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
    try {
        const payload = yield axios.get(`${process.env.REACT_APP_API_ROOT}/posts/${action.payload}`)
            .then(response => response.data);
        yield put({ type: COURSE_RECEIVED, payload});
    }catch (e) {
        yield put({ type: API_ERRORED, payload: e})
    }
}