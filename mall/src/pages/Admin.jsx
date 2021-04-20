import React, { Component } from "react";
import { Layout, Menu, Avatar, Image, Card, Row, Col } from "antd";
// eslint-disable-next-line 
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
class Admin extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ height: "100vh" }} id="trigger">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <div className="logo" />
            <Menu.Item key="1" icon={<UserOutlined />} style={{ marginTop: 0 }}>
              首页
            </Menu.Item>
            <SubMenu key="sub1" icon={<LaptopOutlined />} title="数据台">
              <Menu.Item key="2">营收数据</Menu.Item>
              <Menu.Item key="3">用户数据</Menu.Item>
              <Menu.Item key="4">商品数据</Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              订单管理
            </Menu.Item>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="商品管理">
              <Menu.Item key="6">商品分类</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<LaptopOutlined />} title="设置">
              <Menu.Item key="7">系统设置</Menu.Item>
              <Menu.Item key="8">个人设置</Menu.Item>
      
            </SubMenu>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: "0 20px 0 0",
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 0 1px 0 dark",
            }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <Avatar
              src={
                <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
            />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
                            
                    <div className="site-card-wrapper">
                    <Row gutter={12}>
                    <Col span={4} className='border12'>
                        <Card title="今天订单" bordered={false}>
                        23 单
                        </Card>
                    </Col>
                    <Col span={4} className='border12'>
                        <Card title="今天营收" bordered={false}>
                        2555.00 ￥
                        </Card>
                    </Col>
                    <Col span={4} className='border12'>
                        <Card title="总营收" bordered={false}>
                        52000.00 ￥
                        </Card>
                    </Col>
                    </Row>
                </div>

          </Content>
          <Footer style={{ textAlign: "center" }}>底部</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
