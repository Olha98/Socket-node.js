import React, { useEffect } from "react";
import css from "./JoinBlock.module.css";
import CustomScrollbars from "./Scroll";
import axios from "axios";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./sockerList.module.css";
import { List, Avatar } from "antd";
import "react-virtualized/styles.css";
import "antd/dist/antd.css";
import massage from '../image/sourdce.gif'


function JoinBlock() {
  useEffect(() => {
    api();
  });

  const birthdayStyle = `
  .ant-avatar > img {
    background-color: #2911b3;
    
}

.ant-list-item {
  border-radius: 60px;
  background-color: #2911b3;
  margin: 10px;
}

.ant-list-items{
  background-color: none;
}

`;

  const api = async () => {
    // const data = await axios.get("https://quotes.rest​/quote");
    // console.log(data);
  };

  const storeSockers = useSelector((state) => state.textSockers);
  return (
    <>
    <style>{birthdayStyle}</style>
    <div className={css.wrapper}>
        <CustomScrollbars style={{ width: 600, height: 300 }}>
      <div className={css.wrapper_list}>
        <List
          itemLayout="horizontal"
          dataSource={storeSockers}
          renderItem={(item) => (
            <TransitionGroup>
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
                        <Avatar src={massage}/>
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
          </CustomScrollbars>
    </div>
    </>
  );
}

export default JoinBlock;
