import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios'

import  {FETCH_QUALITIES, SET_QUALITIES}  from '../actions/qualities.actions'


function* fetchQualities(action) {
    const {data} = yield axios.get('/api/qualities');
    yield put({type: SET_QUALITIES, payload: data})
}

function* qualitiesSaga() {
    yield takeEvery(FETCH_QUALITIES, fetchQualities);
  }
  
  export default qualitiesSaga;