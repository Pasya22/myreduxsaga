import {
    takeEvery,
    all
} from "redux-saga/effects";
import ActionTypes from "../Constant/ActionType"
import {
    handleADDUser,
    handleUpdateUser,
    handleDeleteUser,
    handleUser
} from '../sagas/UserSaga';

function* WacthALl() {
    yield all([
        takeEvery(ActionTypes.GET_USERS, handleUser),
        takeEvery(ActionTypes.ADD_USER, handleADDUser),
        takeEvery(ActionTypes.UPDATE_USER, handleUpdateUser),
        takeEvery(ActionTypes.DEL_USER, handleDeleteUser),
    ])
}

export default WacthALl