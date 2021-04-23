import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';


function* updateUser(action) {
  try {
    yield axios.put('/api/user', action.payload);
    if (action.onComplete) {
      action.onComplete()
    }
    yield put({type: 'FETCH_USER'});
  } catch (err) {
    console.log(err);
  }
}

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });

   

    yield put({ type: 'EDIT_SELECTED_QUALITIES',  payload: response.data.qualities })
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* setEdit() {
  try{
    console.log('in set Edit')
    const {userData} = yield select(store => store.user);
    yield put({type: 'SET_EDIT_USER', payload: userData})
  } catch (err) {
    console.log(err)
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('SET_EDIT_USER_FLOW', setEdit);
  yield takeLatest('UPDATE_USER', updateUser );
}

export default userSaga;
