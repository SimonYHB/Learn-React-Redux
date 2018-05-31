
// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import {user} from './redux/user.redux'
//返回对应列表数据
import {chartuser} from './redux/chartuser'
import {chat} from './redux/chat.redux'
export default combineReducers({user,chartuser,chat})

