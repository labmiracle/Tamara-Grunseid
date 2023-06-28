import { useState } from "react";

export default function TextImput() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Texto ingresado: {text}</p>
    </div>
  );
}
