import React from "react";
import { useSelector } from "react-redux";
import { List, Avatar } from "antd";
import "react-virtualized/styles.css";
import "antd/dist/antd.css";
import CustomScrollbars from "./Scroll";
import massage from "../image/sourdce.gif";
import css from "./block.module.css"

function JoinBlock() {
  const storeSockets = useSelector((state) => state.textSockets);

  const massageStyle = `
.ant-list-item{
  padding:10px;
  border: solid 1px #FC5185;
}

.ant-list-split .ant-list-item:last-child {
  border-bottom: solid 1px #FC5185;
}

.ant-list-split .ant-list-item:first-child:nth-last-child(n-3) {
  border-top: solid none;
  border-bottom: solid none;
}
`;

  return (
    <>
      <style>{massageStyle}</style>
      <div className={css.wrapper}>
        <CustomScrollbars style={{ width: 600, height: 600 }}>
          <div className={css.wrapper_list}>
            <List
              itemLayout="horizontal"
              dataSource={storeSockets}
              renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={massage} />}
                        title={<a href="https://ant.design">{item.message}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
               )}
               />
          </div>
        </CustomScrollbars>
      </div>
    </>
  );
}

export default JoinBlock;
