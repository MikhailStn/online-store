import { useState, useEffect } from "react";
import "./mainOverlay.scss";

export function MainOverlay() {
  const [style, setStyle] = useState({ opacity: 0, marginTop: "-100px" });

  useEffect(() => {
    setStyle({ opacity: 1, marginTop: "0" });
  }, []);

  return (
    <div className="overlay">
      <div className="overlay__content">
        <p style={style} className="overlay__info">
          Experience the future now. Get your hands on the latest computer novelties and unlock a world of endless possibilities!{" "}
        </p>
      </div>
    </div>
  );
}
