import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const EtatBoules = (props) => {
  const { derniereBoule } = props;
  const [couleur, setCouleur] = useState("white");

  const changeColor = () => {
    const numeroBoule = parseInt(derniereBoule.match(/\d{1,2}/)[0]);
    console.log(numeroBoule);
    if (numeroBoule <= 15) {
      setCouleur("blue");
    }
    if (numeroBoule > 15 && numeroBoule <= 30) {
      setCouleur("red");
    }
    if (numeroBoule > 30 && numeroBoule <= 45) {
      setCouleur("lightgrey");
    }
    if (numeroBoule > 45 && numeroBoule <= 60) {
      setCouleur("black");
    }
    if (numeroBoule > 60 && numeroBoule <= 75) {
      setCouleur("orange");
    }
  };
  useEffect(() => {
    if (derniereBoule.match(/\d{1,2}/)) {
      changeColor();
    }
  }, [derniereBoule]);

  return (
    <div data-testid="derniereBoule">
      <CircularProgressbar
        value={100}
        text={derniereBoule}
        styles={buildStyles({
          pathColor: couleur,
        })}
      />
    </div>
  );
};

export default EtatBoules;
