import React from "react";
import { List, Card} from "antd";
const ListComp = ({ data, className }) => 
{
  console.log(data);
return(

  <List
    // itemLayout="horizontal"
    dataSource={data}
    bordered
    renderItem={(item) => (
      <List.Item className={className}>
        {/* <List.Item.Meta
          title={item.title}
          description={item.name}
        /> */}
        {item.name}
        
      </List.Item>
    )}
  />
)};
export default ListComp;
