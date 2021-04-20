/* eslint-disable */
import React, { Component } from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import "../../css/mobile.css";
import { NavLink } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div className="footer">
        <NavLink to="/mobile/home" activeClassName="int">
          <HomeOutlined className="footicon" />
          <p className="text">首页</p>
        </NavLink>
        <NavLink to="/mobile/group" activeClassName="int">
          <AppstoreOutlined className="footicon" />
          <p className="text">分类</p>
        </NavLink>
        <NavLink to="/1" activeClassName="int">
          <ShoppingCartOutlined className="footicon" />
          <p className="text">购物车</p>
        </NavLink>
        <NavLink to="/3" activeClassName="int">
          <UserOutlined className="footicon" />
          <p className="text"> 个人中心</p>
        </NavLink>
      </div>
    );
  }
}
