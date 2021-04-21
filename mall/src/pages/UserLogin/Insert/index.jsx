/* eslint-disable */
import React, { Component } from "react";
import "../../../css/user.css";
import { Button, message, Space, Typography, Form, Input } from "antd";
import axios from "axios";
import qs from "qs";
const { Title } = Typography;

//布局
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
export default class index extends Component {
  onFinish = (values) => {
    const { uname, uphone, upwd } = values;
    values = { uname, uphone, upwd };
    //发送请求
    axios
      .post("/api1/user/SelectUser", qs.stringify({ uname: values.uname }))
      .then((response) => {
        if (response.data.code === 201) {
          // 验证账号是否存在
          this.error(response.data.msg);
        } else {
          //注册账号成功1s后跳转到登录页
          axios
            .post("/api1/user/Reg", qs.stringify(values))
            .then((response) => {
              this.success();
              setTimeout(() => {
                this.props.history.push("/");
              }, 1000);
            });
        }
      })
      .catch((error) => alert("服务器繁忙"));
  };
  //成功提示
  success = () => {
    message.success({
      content: "注册成功",
      className: "custom-class",
      style: {
        margin: "40vh auto",
      },
    });
  };
  //错误处理回调
  error = (msg) => {
    message.error({
      content: msg,
      className: "custom-class",
      style: {
        margin: "40vh auto",
      },
    });
  };
  /* 返回登录组件 */
  Cancel = () => {
<<<<<<< HEAD
    this.props.history.push("/user");
=======
    this.props.history.push("/");
>>>>>>> 701eae47c6fd0fa83bd29e614ffae035ec02bd06
  };
  render() {
    return (
      <>
        <div className="header">欢迎来到优选商城</div>
        {/* 注册 */}
        <div className="content">
          <Space
            align="baseline"
            style={{
              width: "70%",
              display: "flex",
              justifyContent: 'flex-start',
              marginLeft:'2vw'
            }}
          >
            <p onClick={this.Cancel} style={{marginRight:'3vw'}}> 密码登录</p>
            <Title level={3} style={{marginRight:'3vw'}}>注册账户</Title>
          </Space>
          <br />
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="uname"
              rules={[{ required: true, message: "账户不能为空" }]}
            >
              <Input
                placeholder="账号"
                bordered={false}
                style={{
                  borderBottom: "1px solid #BFBFCD",
                  width: "90vw",
                  height: "12vw",
                }}
              />
            </Form.Item>
            <Form.Item
              name="uphone"
              rules={[{ required: true, message: "手机号不能为空" }]}
            >
              <Input
                placeholder="请输入手机号"
                bordered={false}
                style={{
                  borderBottom: "1px solid #BFBFCD",
                  width: "90vw",
                  height: "12vw",
                }}
              />
            </Form.Item>

            <Form.Item
              name="upwd"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input.Password
                placeholder="请输入密码"
                bordered={false}
                style={{
                  borderBottom: "1px solid #BFBFCD",
                  width: "90vw",
                  height: "12vw",
                }}
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="btn">
              注册
            </Button>
          </Form>
        </div>
<<<<<<< HEAD
        
=======
>>>>>>> 701eae47c6fd0fa83bd29e614ffae035ec02bd06
      </>
    );
  }
}
