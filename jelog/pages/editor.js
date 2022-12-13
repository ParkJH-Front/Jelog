import React, { createElement, useEffect, useRef, useState } from "react";
import stlye from "./style/editor.module.css";
export default function editor() {
  const [text, setText] = useState(""); // contentEditable 박스 내 상태관리 state
  const testObject = []; // 최종 object 화 할 array

  // contentEditable 박스 내 입력값이 있는 경우 test state 로 전달.
  const onInput = (e) => {
    setText(e.target.innerText);
  };

  // test state 의 입력값을 \n(엔터, 줄바꿈) 기준으로 나눔
  const contentBlock = text.split("\n");

  // 줄단위로 나눠진 입력값을 object 화
  contentBlock.map((contant, index) => {
    testObject.push({
      line: index, //줄번호
      contant: contant, //내용
      tag: "p", //적용할 HTML TAG, 기본은 p
      style: "", //적용할 CSS 스타일, 기본은 ""
    });
  });

  // 아이디어 : testObject 가 변경될 때 마다, 출력박스에 해당 element를 생성한다.
  // 1. useEffect() 활용 / 실패 실제로 element가 생성이 안됨.
  // {
  //   useEffect(() => {
  //     testObject.map((item) => {
  //       ReactDom.rander(
  //         React.createElement(`${item.tag}`, {
  //           children: `${item.contant}`,
  //         })
  //       );
  //     });
  //   });
  // }

  return (
    <div>
      <div>
        <button>H1</button>
        <button>H2</button>
        <button>H3</button>
        <button>H4</button>
        <button>
          <b>굵게</b>
        </button>
        <button>
          <i>기울기</i>
        </button>
        <button>
          <u>밑줄</u>
        </button>
        <button>
          <s>가로선</s>
        </button>
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
        <div contentEditable="false" suppressContentEditableWarning></div>
      </div>
      <div>
        <button>저장</button>
        <button>HTML로 보기</button>
      </div>
    </div>
  );
}
