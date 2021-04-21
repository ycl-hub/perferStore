/* eslint-disable */
import React, { Component } from "react";
import "../../css/user.css";
import { Button, message, Space, Typography, Form, Input } from "antd";
import axios from "axios";
import qs from "qs";
import Icon from "./Icon";
import {connect} from 'react-redux'
import {save_account} from "../../redux/actions/account";
const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class index extends Component {
  //登录请求
  onFinish = (values) => {

    
    axios
      .post(
        "/api1/user/login",
        qs.stringify({
          uname: values.username,
          upwd: values.password,
        })
      )
      .then((response) => {
        if (response.data.code === 200) {
          this.success();
          setTimeout(() => {
            this.props.history.push(`/mobile`);
            const save_account ={uname:values.username,upwd:values.password}
            console.log(save_account)
            this.props.save_account(save_account)
          }, 1000);
        } else {
          this.error(response.data.msg);
        }
      })
      .catch((error) => {
        alert("服务器端繁忙，请稍后重试");
      });
  };
  //失败提示
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //成功提示
  success = () => {
    message.success({
      content: "登录成功",
      className: "custom-class",
      style: {
        margin: "40vh auto",
      },
    });
  };
  //错误提示
  error = (msg) => {
    message.error({
      content: msg,
      className: "custom-class",
      style: {
        margin: "40vh auto",
      },
    });
  };
  //去往注册组件
  Cancel = () => {
    console.log("1234");
    this.props.history.push("/insert");
  };
  render() {
    console.log(this.props.account,this.props)
    return (
      <>
        <div className="header">欢迎来到优选商城</div>
        {/* 登录 */}
        <div className="content">
          <Space
            align="baseline"
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "2vw",
            }}
          >
            <Title level={3} style={{ marginRight: "3vw" }}>
              密码登录
            </Title>
            <p onClick={this.Cancel}> 注册账户</p>
          </Space>
  
          <Space></Space>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            style={{ lineHeight: "10vw" }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "账户不能为空" }]}
            >
              <Input
                placeholder="请输入账号"
                bordered={false}
                style={{
                  borderBottom: "1px solid #DDDDDD",
                  width: "90vw",
                  height: "15vw",
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input.Password
                placeholder="请输入密码"
                bordered={false}
                style={{
                  borderBottom: "1px solid #DDDDDD",
                  width: "90vw",
                  height: "12vw",
                }}
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="btn">
              登录
            </Button>
            <Space
            align="baseline"
            style={{
              margin:"0",
              marginTop:"2vw",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <p>忘记密码?</p>
          </Space>
          </Form>
        </div>
        <Icon />
      </>
    );
  }
}
export default connect(
  state => ({
      account:state.account
  }),//映射状态
  {
    save_account,//映射操作状态的方法
  }
)(index)