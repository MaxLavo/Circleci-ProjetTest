import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import TypeJeu from "../../Components/VisualisationTypejeu/TypeJeu.js";
import EtatBoules from "../../Components/Etat/EtatBoules.js";
import Tirer from "../../Components/Tirer/Tirer.js";
import TableauBingo from "../../Components/Tableau/TableauBingo.js";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CompteurBoule from "../../Components/Compteur/CompteurBoule";

const DebuterPartie = (props) => {
  const [typeJeu, setTypeJeu] = useState("Stand");
  const [pattern, setPattern] = useState([]);
  const [derniereBoule, setDerniereBoule] = useState("");
  let { listeBouleTirer, setMenu } = props;
  const [nbBoules, setNbBoules] = useState(listeBouleTirer.length);

  useEffect(() => {}, []);

  const changerTypeJeu = () => {
    switch (typeJeu) {
      case "Stand":
        setTypeJeu("T");
        setPattern([0, 1, 2, 3, 4, 7, 12, 17, 22]);
        break;
      case "T":
        setTypeJeu("X");
        setPattern([0, 4, 6, 8, 12, 16, 18, 20, 24]);
        break;
      case "X":
        setTypeJeu("Cerf");
        setPattern([0, 1, 5, 6, 18, 24]);
        break;
      case "Cerf":
        setTypeJeu("Cont");
        setPattern([0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24]);
        break;
      case "Cont":
        setTypeJeu("Full");
        setPattern([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24,
        ]);
        break;
      case "Full":
        setTypeJeu("Stand");
        setPattern([]);
        break;
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2.4}></Grid>
        <Grid item xs={2.4}></Grid>
        <Grid item xs={2.4}>
          <TypeJeu size={100} pattern={pattern} />
          <Button
            onClick={() => {
              changerTypeJeu();
            }}
          >
            Changer
          </Button>
        </Grid>
        <Grid item xs={2.4}></Grid>
        <Grid item xs={2.4}>
          <EtatBoules derniereBoule={derniereBoule} />
          <CompteurBoule nbBoules={nbBoules} />
        </Grid>
      </Grid>
      <Grid container spacing={2} textAlign="center">
        <Grid direction="column" item xs={10}>
          <TableauBingo
            derniereBoule={derniereBoule}
            setDerniereBoule={setDerniereBoule}
            listeBouleTirer={listeBouleTirer}
            setNbBoules={setNbBoules}
          />
        </Grid>
        <Grid item xs={2} style={{ marginTop: "15vh" }}>
          <Tirer
            listeBouleTirer={listeBouleTirer}
            setDerniereBoule={setDerniereBoule}
            setNbBoules={setNbBoules}
          />
        </Grid>
      </Grid>
      <br />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="success"
        sx={{ ml: 5 }}
        style={{ padding: "11px", width: "5px" }}
        onClick={() => setMenu(0)}
      >
        <KeyboardBackspaceIcon />
      </Button>
    </div>
  );
};
export default DebuterPartie;
