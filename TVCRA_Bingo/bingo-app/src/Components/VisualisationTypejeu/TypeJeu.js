import React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CaseTypeJeu from "./CaseTypeJeu";

const TypeJeu = (props) => {
  const size = props.size;
  const dimens = (props.size * (1 / 6))*1.05;
  const padding = props.size / 100;
  const pattern = props.pattern;

  return (
    <Box>
      <Card
        style={{ backgroundColor: "#999999", borderRadius: "15%" }}
        sx={{ width: size, height: size }}
      >
        <CardContent sx={{ pt: padding, pl: padding, pr: 0, pb: 0 }}>
          {[...Array(5)].map((x, rangee) => (
            <Grid container key={rangee}>
              {[...Array(5)].map((x, colonne) => (
                <CaseTypeJeu
                  key={colonne + rangee * 5}
                  couleur={
                    pattern.includes(colonne + rangee * 5)
                      ? "#00BD48"
                      : "#bcbcbc"
                  }
                  dimens={dimens}
                />
              ))}
            </Grid>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TypeJeu;
