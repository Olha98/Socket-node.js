import React from "react";
import css from "./JoinBlock.module.css";
import {getNewSocker} from '../redux/actions.js/sockerActions.js'
import { connect, useSelector } from 'react-redux';
// import InfiniteScroll from "react-infinite-scroller";
import io from "socket.io-client";
import { List, Avatar } from "antd";
import "react-virtualized/styles.css";
import "antd/dist/antd.css";

const data = [
  {
    id: "4",
    title: "Ant Design Title 1",
  },
  {
    id: "3",
    title: "Ant Design Title 2",
  },
  {
    id: "2",
    title: "Ant Design Title 3",
  },
  {
    id: "1",
    title: "Ant Design Title 4",
  },
];

function JoinBlock({onGetNewSocker}) {

 const storeSockers = useSelector(state => state.textSockers);
 console.log(storeSockers,"storeSockers")
//  storeSockers && storeSockers.map(storeSocker => console.log(storeSocker,"re"));
  const socket = io("http://localhost:9999/");
//   const arraySokets = [];

  socket.on("message", (data) => {
	console.log(data);
	onGetNewSocker(data);
    // arraySokets.push(data);
   
    // console.log(arraySokets);
  });

  return (
    <div className={css.wrapper}>
      <div className={css.wrapper_list}>
      
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
       
      </div>
    </div>
  );
}

const mapDispatchToProps = {
	onGetNewSocker: getNewSocker,
  };

export default connect(null, mapDispatchToProps)(JoinBlock);
