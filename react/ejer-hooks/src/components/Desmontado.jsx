import { useEffect } from "react";

export default function Desmontado() {
  useEffect(() => {
    return () => {
      console.log("Desmontado!");
    };
  }, []);

  return null;
}
