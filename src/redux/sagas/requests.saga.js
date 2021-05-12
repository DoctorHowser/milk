import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios'

function* fetchRequests(action) {
    try {

        const {data} = yield axios.get('/api/requests');
        yield put({type: 'SET_REQUESTS', payload: data})
    } catch (err) {
        yield put({type : 'ERROR'})
        console.error(err)
    }

}

function* addRequest(action) {
    try {
        yield axios.post('/api/requests', action.payload);
        if(action.onSuccess) {
            action.onSuccess()
        }
        yield put({type : 'SET_MESSAGE', payload : 'Added!'})

        yield put({type: 'FETCH_REQUESTS'})
    } catch (error) {
        
    }
}

function* deleteRequest(action) {
    try {
        yield axios.delete(`/api/requests/${action.payload}`)
        yield put({type : 'SET_MESSAGE', payload : 'Deleted!'})
        yield put({type: 'FETCH_REQUESTS'})
    } catch (error) {
        
    }
}

function* requestsSaga() {
    yield takeEvery('FETCH_REQUESTS', fetchRequests);
    yield takeEvery('ADD_REQUEST', addRequest);
    yield takeEvery('DELETE_REQUEST', deleteRequest)
  }
  
  export default requestsSaga;