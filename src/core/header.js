import React, { useState } from 'react';
import { Menu } from 'antd';
const items = [
  {
    label: 'Music App',
    key: 'music',
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;