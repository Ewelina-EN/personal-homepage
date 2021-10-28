import { all } from 'redux-saga/effects';
import { personalHomepageSaga } from '../features/personalHomapage/personalHomepageSaga';

export default function* saga() {
    console.log("saga");
    yield all([
        personalHomepageSaga(),
    ]);
}