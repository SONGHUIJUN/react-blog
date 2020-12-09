import React, {useState, useEffect} from 'react';
import "./Hook.css";

// function useWebsocket(url, handle) {
//   useEffect(() => {
//     let ws = new WebSocket(url);
//     ws.onopen = () => {
//       ws.send("");
//     }
//     ws.onerror = () => {
//       console.log("发生错误")
//     };
//     ws.onclose = () => {
//       console.log("链接关闭")
//     };
//     ws.onmessage = (res) => {
//       handle(res.data)
//     };
//
//     return () => {
//       ws.close();
//     }
//   }, [url]);
// }

function MailModule(props) {
  // let url = "wss://192.168.106.13/opera/selfService/versionDeploymentWebSocket";
  // useWebsocket(url, Logger);
  const [list, setList] = useState([]);

  // function Logger(msg) {
  //   let res = JSON.parse(msg).resultValue.versionDeployList;
  //   setList(res);
  // }

  const listItem = list.map(value =>
    <p key={value.woNum} className="mail-list">{value.woNum}:<b>{value.systemName}</b><span style={{float:"right",color:"#0084ff"}}>{value.status}</span></p>
  );
  return (
    <div>
      <p>{props.usernmae},邮箱登录成功！</p>
      <div>
        {listItem}
      </div>
    </div>
  )
}

function Example(props) {
  const [count, setCount] = useState(props.count);
  const [city] = useState({name: "上海"});

  useEffect(() => {
    document.title = `点击了${count}次`;
  });
  return (
    <div>
      <p>点击了{count}次</p>
      <button onClick={() => setCount(count + 1)}>在{city.name}点击</button>
      <MailModule usernmae="jun"/>
    </div>
  )
}

export default Example;