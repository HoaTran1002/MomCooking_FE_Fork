// import * as React from "react";

// LoadingPage.js hoặc tên tập tin bạn đang sử dụng
// import React from "react";
import "./style.css"; // Đường dẫn đến tập tin CSS

export default function LoadingPage() {
  return (
    <div className="w-full ">
      <center>
        <br></br>
        <br></br>
        <br></br>
        <div className="loader" id="loader"></div>
        <div className="loader" id="loader2"></div>
        <div className="loader" id="loader3"></div>
        <div className="loader" id="loader4"></div>
        <span id="text">LOADING...</span>
        <br></br>
      </center>
    </div>
  );
}
