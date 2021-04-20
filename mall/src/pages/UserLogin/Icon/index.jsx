import React, { Component } from "react";
import "../../../css/user.css";
import { QqOutlined, WechatOutlined, MessageOutlined } from "@ant-design/icons";
export default class index extends Component {
  render() {
    return (
      <div
        style={{
          margin:'15vw 0 0 0',
          width: "100%",
          textAlign: "center",
          display:'flex',
          justifyContent:'space-around'
        }}
        className='footerIcon'
      >
        <QqOutlined className="icon"/>
        <WechatOutlined className="icon" />
        <MessageOutlined className="icon" />
      </div>
    );
  }
}
