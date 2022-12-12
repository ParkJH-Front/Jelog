import React, { useRef, useState } from "react";
import stlye from "./style/editor.module.css";
export default function editor() {
  const [text, setText] = useState([]);

  const onInput = (e) => {
    setText(e.target.innerText);
  };

  return (
    <div>
      <div>
        <button>H1</button>
        <button>H2</button>
        <button>H3</button>
        <button>H4</button>
        <button>굵게</button>
        <button>기울기</button>
        <button>가로선</button>
        <button>코드</button>
        <button>인용구</button>
        <button>이미지</button>
        <button>강조</button>
      </div>
      <div className={stlye.flex}>
        <div className={stlye.editor_box}>
          <div
            contentEditable="true"
            suppressContentEditableWarning
            onInput={onInput}
          ></div>
        </div>
        <div contentEditable="false" suppressContentEditableWarning>
          {text}
        </div>
      </div>
      <div>
        <button>저장</button>
        <button>HTML로 보기</button>
      </div>
    </div>
  );
}
