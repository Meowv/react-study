import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM } from './actionTypes'

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