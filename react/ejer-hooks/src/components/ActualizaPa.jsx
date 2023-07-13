import { useEffect } from "react";

export default function ActualizaPa(props) {
  useEffect(() => {
    console.log("Actualizando!");
  }, [props]);

  return null;
}
