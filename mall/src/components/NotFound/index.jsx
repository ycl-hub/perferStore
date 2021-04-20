import React, { Component } from "react";
import { Empty } from "antd";
export default class index extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          paddingTop:'30vh',
          justifyContent: "center",
        }}
      >
        <Empty description="网络繁忙请稍后重试" />
      </div>
    );
  }
}
