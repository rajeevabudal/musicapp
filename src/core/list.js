import React from 'react';
import { List } from 'antd';
const ListComp = ({data, className}) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item className={className}>
        <List.Item.Meta
          //avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={item.title}
          //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);
export default ListComp;