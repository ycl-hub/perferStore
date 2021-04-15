/* eslint-disable */
import React, { Component } from "react";
import "../../css/user.css";
import { Button, message, Space, Typography, Form, Input  } from "antd";
import axios from "axios";
import qs from 'qs';
const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default class index extends Component {
    //登录请求
  onFinish = (values) => {
    console.log("Success:", values);
    axios.post('/api1/user/login',qs.stringify({
      uname:values.username,
      upwd:values.password
    })).then((response)=>{
      if(response.data.code==200){
        this.success()
        setTimeout(() => {
          this.props.history.push(`/mobile/${values.username}`);
        }, 2000);
      }else{
        this.error(response.data.msg)
      }
      
    }).catch((error)=>{
       alert('服务器端繁忙，请稍后重试')
    })
  };
  //成功提示
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  success = () => {
    message.success({
      content: "登录成功",
      className: "custom-class",
      style: {
        margin:'40vh auto'
      },
    });
  };
  //错误提示
  error = (msg) => {
    message.error({
      content: msg,
      className: "custom-class",
      style: {
        margin:'40vh auto'
      },
    });
  };
  //去往注册组件
  Cancel=()=>{
    console.log('1234')
    this.props.history.push('/insert')
  }
  render() {
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
              marginLeft:'2vw'
            }}
          >
            <Title level={3} style={{marginRight:'3vw'}}>密码登录</Title>
            <p onClick={this.Cancel}> 注册账户</p>
          </Space>
          <br />
          <Space></Space>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            style={{lineHeight:'10vw'}}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "账户不能为空" },
              ]}
              
            >
              <Input placeholder='请输入账号' bordered={false} style={{borderBottom:'1px solid #BFBFCD',width:'90vw',height:'15vw'}}/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "密码不能为空" },
              ]}
            >
              <Input.Password placeholder='请输入密码' bordered={false} style={{borderBottom:'1px solid #BFBFCD',width:'90vw',height:'12vw'}}/>
            </Form.Item>

        
              <Button type="primary" htmlType="submit" className='btn'>
                登录
              </Button>
        
          </Form>
          
        </div>
      </>
    );
  }
}
