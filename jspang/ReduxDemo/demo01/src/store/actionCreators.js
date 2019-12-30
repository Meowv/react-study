import axios from 'axios'
import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST, GET_LIST_WITH_SAGA } from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const AddItemAction = () => ({
    type: ADD_ITEM
})

export const DeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const GetListAction = (data) => ({
    type: GET_LIST,
    data
})

export const GetTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
            const data = res.data
            const action = GetListAction(data)
            dispatch(action)
        })
    }
}

export const GetTodoListWithSage = () => ({
    type: GET_LIST_WITH_SAGA
})