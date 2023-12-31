import React from 'react';
import { Layout, Space } from 'antd';
import HeaderComp from './header';
import ContentComp from './content';
const { Header, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 100,
//   paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};
const contentStyle = {
  backgroundColor: '#fff',
};
const Home = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    // size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}><HeaderComp/></Header>
      <Content style={contentStyle}><ContentComp/></Content>
    </Layout>
  </Space>
);
export default Home;