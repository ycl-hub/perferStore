import UserLogin from "../pages/UserLogin";
import Mobile from "../pages/Mobile";
import Insert from "../pages/UserLogin/Insert";
import MobileHome from "../components/Home";
import MobileGroup from "../components/Group";
import NotFound from "../components/NotFound";
import index from "../pages/Admin";
import shoplogin from '../pages/ShopLogin'
//主路由
export const mainRoutes = [
  {
    // 用户注册页
    path: "/insert",
    component: Insert,
    exact: true,
  },
  {
    // 手机端主组件
    path: "/mobile",
    component: Mobile,
    exact: true,
  },
  {
    // 默认的用户登录页
    path: "/user",
    component: UserLogin,
    exact: true,
  },
  {
    // 错误处理组件
    path: "/404",
    component: NotFound,
    exact: true,
  },
  {
    // 商家登录组件
    path: "/shop",
    component: shoplogin,
    exact: true,
  },
  {
    //商家后台组件
    path: "/admin",
    component: index,
    exact:true
  },
];
// 手机端路由 -->在手机端主组件中注册路由
export const mobileRoutes = [
  {
    // 手机端首页组件
    path: "/mobile/home",
    component: MobileHome,
    exact: true,
  },
  {
    // 手机端分类组件
    path: "/mobile/group",
    component: MobileGroup,
    exact: true,
  },
];
/* export const adminRoutes = [

];
 */