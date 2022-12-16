import { useState } from "react";

export default function Editor() {
  const [text, setText] = useState("");
  const [contentSource, setContentSource] = useState([]);
  const content = (event) => {
    setText(event.target.innerHTML);
  };

  return (
    <container>
      <div
        contentEditable="true"
        suppressHydrationWarning
        onChange={content}
      ></div>
      <div contentEditable="false" suppressHydrationWarning>
        {text}
      </div>
    </container>
  );
}
