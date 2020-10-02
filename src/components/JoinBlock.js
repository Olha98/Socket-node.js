import React from "react";
import css from "./JoinBlock.module.css";
import axios from 'axios'
import { getNewSocker } from "../redux/actions.js/sockerActions.js";
import { connect, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from './sockerList.module.css';
// import InfiniteScroll from "react-infinite-scroller";
import io from "socket.io-client";
import { List, Avatar } from "antd";
import "react-virtualized/styles.css";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.css";


function JoinBlock({ onGetNewSocker }) {


  const socket = io("http://localhost:9999/");
  const storeSockers = useSelector((state) => state.textSockers);
  // console.log(storeSockers, "storeSockers");


  // function api(){
  //   axios.get('http://api.greatwords.ru/ ')
  //   .then(data=> console.log(data))
   
  // }

  // api()


  socket.on("message", (data) => {
    console.log(data);
    onGetNewSocker({ ...data, id: uuidv4() });
  });

  return (
    <div className={css.wrapper}>
      <div className={css.wrapper_list}>
        <List
          itemLayout="horizontal"
          dataSource={storeSockers}
          renderItem={(item) => (
            <TransitionGroup >
              <CSSTransition
                key={item.id}
                in={true}
                timeout={250}
                classNames={styles}
                unmountOnExit
              >
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.message}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              </CSSTransition>
            </TransitionGroup>
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
