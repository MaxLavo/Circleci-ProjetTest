import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const CaseTypeJeu = (props) => {
  const dimens = props.dimens * 0.9;
  const texte = props.texte;
  let couleur = props.couleur;
  let fontSize = dimens * 0.8;
  let lineHeight = 1.25;

  if (texte === "FREE") {
    fontSize = dimens * 0.3;
    lineHeight = 3.3;
    couleur = "00BD48";
  }

  return (
    <Grid item>
      <Card
        style={{ backgroundColor: couleur, fontSize: fontSize }}
        sx={{
          height: dimens,
          width: dimens,
          borderRadius: 20,
          textAlign: "center",
          margin: dimens * 0.005,
          lineHeight: lineHeight,
        }}
      >
        {texte}
      </Card>
    </Grid>
  );
};

export default CaseTypeJeu;
