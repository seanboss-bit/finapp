import React from "react";

const PageList = (props) => {
  return (
    <div className="container">
      <p className="page-title">{props.title}</p>
      <div className="cont">{props.children}</div>
    </div>
  );
};

export default PageList;
