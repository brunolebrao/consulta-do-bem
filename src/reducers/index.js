import { combineReducers } from "redux";
import login from '../components/Login/loginReducer'
import home from '../components/Home/homeReducer'
import detail from '../components/Detail/detailReducer'

export default combineReducers({
    login,
    home,
    detail
})