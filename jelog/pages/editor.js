import React, { useRef, useState } from "react";

export default function editor() {
  const [text, setText] = useState("");
  const [lineText, setLineText] = useState([]);
  const [lineTag, setLineTag] = useState([]);
  const [lineClass, setLineClass] = useState([]);

  const onInput = (e) => {
    // console.dir(e.target.children); // 자식 요소들을 가지고 올 수 있음.
  //   setLineText(e.target.children[1]?.innerText);
  //   setLineTag(e.target.children[1]);
  //   setLineClass(e.target.children[1]?.className);

  //   setText(e.target.innerText);
  // };
  // console.log(`내용 : ${lineText} / 태그 : ${lineTag} / 클래스 : ${lineClass}`);
  // console.log(text);

  return (
    <div>
      <div
        contentEditable="true" // html 태그를 텍스트 입력 가능하도록 하는 옵션
        suppressContentEditableWarning // 하위 요소들을 수정 할 수 있다는 경고문을 제거 해줌. (그 외 모든 경고문 제외 가능)
        onInput={onInput}
      ></div>
      <div contentEditable="false" suppressContentEditableWarning>
        {text}
      </div>
    </div>
  );
}
