import { useState } from "react";

export default function Form() {
  const [valorInput1, setValorInput1] = useState("");
  const [valorInput2, setValorInput2] = useState("");

  const handleInputChange1 = (event) => {
    setValorInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setValorInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Valor del Input 1:", valorInput1);
    console.log("Valor del Input 2:", valorInput2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Input 1:{" "}
        <input
          type="text"
          value={valorInput1}
          onChange={handleInputChange1}
        />{" "}
      </label>
      <br />
      <label>
        {" "}
        Input 2:{" "}
        <input
          type="text"
          value={valorInput2}
          onChange={handleInputChange2}
        />{" "}
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
