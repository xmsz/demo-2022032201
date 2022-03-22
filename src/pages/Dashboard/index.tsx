import * as React from 'react';
import {  Table } from '@alifd/next';


const Dashboard = () => {
  const [scrollLeft, setScrollLeft] = React.useState(0)
  return (
    <div style={{
      overflow:"scroll",
      width:"200px"
    }}
    onScroll={(e)=>{
      setScrollLeft(e.currentTarget.scrollLeft)
    }}
    >
      <Table 
        style={{
        width:"1200px"
      }} dataSource={[{
        id: "1"
      }]}>
          <Table.Column title='ID' dataIndex='id'/>
        </Table>
        {/* <div style={{
          width:"1200px",
          height:"100px",
          background:"blue"
        }}>
          asd
        </div> */}
    </div>
  );
};

export default Dashboard;
