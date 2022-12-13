import React, { createElement, useEffect, useRef, useState } from "react";
import stlye from "./style/editor.module.css";
export default function editor() {
  const [text, setText] = useState(""); // contentEditable 박스 내 상태관리 state

  // contentEditable 박스 내 입력값이 있는 경우 test state 로 전달.
  const onInput = (e) => {
    setText(e.target.innerText);
  };

  const setH1 = () => {
    setStyle("h1");
  };

  const setH2 = () => {
    setStyle("h2");
  };

  const setH3 = () => {
    setStyle("h3");
  };

  const setH4 = () => {
    setStyle("h4");
  };

  const setBold = () => {
    setStyle("bold");
  };

  const setItalic = () => {
    setStyle("italic");
  };

  const setUnderLine = () => {
    setStyle("underline");
  };

  const setStrikethrough = () => {
    setStyle("strikethrough");
  };

  const setCodeBlock = () => {};

  const setQuote = () => {};

  const setImg = () => {};

  function setStyle(style) {
    document.execCommand(style);
  }

  return (
    <div>
      <div>
        <button onClick={setH1}>H1</button>
        <button onClick={setH2}>H2</button>
        <button onClick={setH3}>H3</button>
        <button onClick={setH4}>H4</button>
        <button onClick={setBold}>
          <b>굵게</b>
        </button>
        <button onClick={setItalic}>
          <i>기울기</i>
        </button>
        <button onClick={setUnderLine}>
          <u>밑줄</u>
        </button>
        <button onClick={setStrikethrough}>
          <s>가로선</s>
        </button>
        <button onClick={setCodeBlock}>코드</button>
        <button onClick={setQuote}>인용구</button>
        <button onClick={setImg}>이미지</button>
      </div>
      <div className={stlye.flex}>
        <div className={stlye.editor_box}>
          <div
            contentEditable="true"
            suppressContentEditableWarning
            onInput={onInput}
          ></div>
        </div>
        <div
          id="target_box"
          contentEditable="false"
          suppressContentEditableWarning
        ></div>
      </div>
      <div>
        <button>저장</button>
        <button>HTML로 보기</button>
      </div>
    </div>
  );
}
