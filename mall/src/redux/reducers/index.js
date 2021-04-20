/* 该文件用于汇总所有reducer为一个 */
//  
import {combineReducers} from 'redux'
import account from './account'


//合并reducers 变为一个总的reducer
const allReducer = combineReducers({
	account
})
export default allReducer