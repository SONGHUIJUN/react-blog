import React from "react";
import "./Page.css";

const count = 10;

function Page() {
  return (
    <div className="Page">
      <div>共{count}页</div>
      <div>首页</div>
      <div>上一页</div>
      <div>下一页</div>
      <div>尾页</div>
    </div>
  );
}

export default Page;