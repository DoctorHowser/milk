import {takeEvery, put, select} from 'redux-saga/effects';
import axios from 'axios'

import  {FETCH_QUALITIES, SET_QUALITIES}  from '../actions/qualities.actions'


function* fetchQualities(action) {
    try {
        const {qualities} = yield select(store => store.milkQualities)
        if (qualities.length) {
            return;
        }
        const {data} = yield axios.get('/api/qualities');
        yield put({type: SET_QUALITIES, payload: data})
    } catch (err) {
        yield put({type : 'ERROR'})
        console.error(err)
    }

}

function* qualitiesSaga() {
    yield takeEvery(FETCH_QUALITIES, fetchQualities);
  }
  
  export default qualitiesSaga;