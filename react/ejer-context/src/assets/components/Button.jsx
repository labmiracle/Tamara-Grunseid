import React, { useContext } from "react";
import { LanguageContext } from "../../App";

const Button = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return <button onClick={toggleLanguage}>Cambiar idioma</button>;
};

export default Button;
