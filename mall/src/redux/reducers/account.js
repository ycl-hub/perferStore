//引入常量
import {SAVEACCOUNT} from '../constant'
// 对person进行初始化和后期加工
const initState ={uname:'无',upwd:'111'} //初始化状态
export default function account_Reducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
        case SAVEACCOUNT:
            return data
        default:
            return preState
    }
}