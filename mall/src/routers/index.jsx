import UserLogin from '../pages/UserLogin'
import Mobile from '../pages/Mobile'
import Insert from '../pages/UserLogin/Insert'
//主路由
export const mainRoutes = [
  {// 默认的用户登录页
    path: "/",
    component: UserLogin,
    exact:true
  },
  {// 用户注册页
    path: "/insert",
    component: Insert,
    exact:true
  },
  {// 手机端主组件
    path: "/mobile/:uname",
    component: Mobile,
    exact:true
  },
];
// 手机端路由 -->在手机端主组件中注册路由
export const mobileRoutes = [
 
]