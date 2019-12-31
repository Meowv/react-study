import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { GetListAction } from './actionCreators'
import { GET_LIST_WITH_SAGA } from './actionTypes'

function* mySage() {
    yield takeEvery(GET_LIST_WITH_SAGA, getList)
}

function* getList() {
    const res = yield axios.get('https://www.fastmock.site/mock/7a3e574fb43c5b6aba4be91d34925a65/react/todos')
    const action = GetListAction(res.data)

    yield put(action)
}

export default mySage