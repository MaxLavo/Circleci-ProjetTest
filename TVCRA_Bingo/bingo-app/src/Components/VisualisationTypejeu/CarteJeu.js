import React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CaseTypeJeu from "./CaseTypeJeu";

const CarteJeu = (props) => {
  const size = props.size * 1.05;
  const dimens = props.size * (1 / 6) * 1.05;
  const padding = props.size / 100;
  const pattern = props.pattern;
  const carte = props.carte;
  const boulesTirees = props.boulesTirees;
  const lettres = ["B", "I", "N", "G", "O"];
  var texte = "";
  console.log("CarteJeu: " + carte[lettres[2]][4]);

  const choisirCouleur = (bouleTamponee, colonne, rangee) => {
    var couleur = "#bcbcbc";
    var intersection = colonne + rangee * 5;
    if (boulesTirees.includes(bouleTamponee)) {
      couleur = "#4D6DFF";
      if (pattern != [] && pattern.includes(intersection)) {
        couleur = "#00BD48";
      }
    }
    return couleur;
  };

  return (
    <Box>
      <Card
        style={{ backgroundColor: "#999999", borderRadius: "15%" }}
        sx={{ width: size, height: size }}
      >
        <CardContent
          sx={{ pt: padding, pl: padding, pr: padding, pb: padding }}
        >
          {[...Array(5)].map((x, rangee) => (
            <Grid
              sx={{
                margin: dimens * 0.005,
              }}
              container
              key={rangee}
            >
              {[...Array(5)].map(
                (x, colonne) => (
                  colonne === 2 && rangee === 2
                    ? (texte = "FREE")
                    : (texte = carte[lettres[colonne]][rangee]),
                  (
                    <CaseTypeJeu
                      key={colonne + rangee * 5}
                      couleur={choisirCouleur(
                        carte[lettres[colonne]][rangee],
                        colonne,
                        rangee
                      )}
                      dimens={dimens}
                      texte={texte}
                    />
                  )
                )
              )}
            </Grid>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CarteJeu;
