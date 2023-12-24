import React from "react";
import { List, Card} from "antd";
const ListComp = ({ data, className }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item className={className}>
        <List.Item.Meta
          title={item.title}
          description=<Card>{item.name}</Card>
        />
        
      </List.Item>
    )}
  />
);
export default ListComp;
