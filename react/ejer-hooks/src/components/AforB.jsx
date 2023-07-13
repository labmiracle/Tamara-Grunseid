import React, { useState } from "react";

export default function AforB() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    const modifiedText = inputText.replace(/a/g, "b");
    setText(modifiedText);
  };

  return <input type="text" value={text} onChange={handleChange} />;
}
