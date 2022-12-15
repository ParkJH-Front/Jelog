import React, { useState } from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { mdx } from "mdx.js";

const BlogPostEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSave = () => {
    // convert the markdown content to an .mdx file using the mdx library
    const mdxContent = mdx.sync(content);

    // save the .mdx file to the file system or database
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Quill
        value={content}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline"],
            ["link", "image"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            ["clean"],
          ],
        }}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};
