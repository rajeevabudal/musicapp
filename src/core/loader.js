import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const Loader = () => (
  <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 45,
          position: "absolute",
          top: 280,
        }}
        spin
      />
    }
  />
);
export default Loader;