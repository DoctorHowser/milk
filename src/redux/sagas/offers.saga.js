import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios'

function* fetchOffers(action) {
    try {

        const {data} = yield axios.get('/api/offers');
        yield put({type: 'SET_OFFERS', payload: data})
    } catch (err) {
        yield put({type : 'ERROR'})
        console.error(err)
    }

}

function* addOffer(action) {
    try {
        yield axios.post('/api/offers', action.payload);
        if(action.onSuccess) {
            action.onSuccess()
        }
        yield put({type: 'FETCH_OFFERS'})
    } catch (error) {
        
    }
}

function* deleteOffer(action) {
    try {
        yield axios.delete(`/api/offers/${action.payload}`)
        yield put({type: 'FETCH_OFFERS'})
    } catch (error) {
        
    }
}

function* offersSaga() {
    yield takeEvery('FETCH_OFFERS', fetchOffers);
    yield takeEvery('ADD_OFFER', addOffer);
    yield takeEvery('DELETE_OFFER', deleteOffer)
  }
  
  export default offersSaga;