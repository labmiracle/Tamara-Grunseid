import React, { useContext } from "react";
import { LanguageContext } from "../../App";

const MainText = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <p>{language === "es" ? "Texto en español" : "Text in English"}</p>
      <p>
        {language === "es"
          ? "Otro texto en español"
          : "Another text in English"}
      </p>
    </div>
  );
};

export default MainText;
