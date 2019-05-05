import { takeEvery, call, put, all} from 'redux-saga/effects';
import courseActionWatcher from './components/Course/CourseSaga';

export default function* rootSaga() {
    yield all([
        courseActionWatcher()
    ])
};