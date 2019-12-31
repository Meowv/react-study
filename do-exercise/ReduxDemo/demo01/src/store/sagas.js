import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { GetListAction } from './actionCreators'
import { GET_LIST_WITH_SAGA } from './actionTypes'

function* mySage() {
    yield takeEvery(GET_LIST_WITH_SAGA, getList)
}

function* getList() {
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const action = GetListAction(res.data)

    yield put(action)
}

export default mySage