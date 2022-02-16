import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TypeJeu from "../../Components/VisualisationTypeJeu/TypeJeu.js";
import CarteJeu from "../../Components/VisualisationTypeJeu/CarteJeu";
import Bingo from "../../server/domain/Bingo.mjs";

import TextField from "@mui/material/TextField";
import RecuperateurCarte from "../../Components/Validation/RecuperateurCarte";

const Gestion = (props) => {
  const [pattern, setPattern] = useState([]);
  const [typeJeu, setTypeJeu] = useState("Stand");
  const [validated, setValidated] = useState(true);
  const [carteTrouvee, setCarteTrouvee] = useState(false);
  const { listeBouleTirer, setMenu } = props;

  const validate = (cardId) => {
    if (cardId > 45000 && cardId < 36001) {
      setValidated(false);
      return false;
    } else {
      setValidated(true);
      return true;
    }
  };

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

  const afficherCarte = async (cardId) => {
    let res = await Bingo.getCardById(cardId);
    setCarte(res);
    setCarteTrouvee(true);
  };
  console.log(listeBouleTirer);
  return (
    <Box
      sx={{
        width: 700,
        height: 300,
        mt: 5,
      }}
    >
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        textAlign={"center"}
      >
        Gestion de partie
      </Typography>
      <Button
        variant="outlined"
        color="success"
        sx={{ ml: 5 }}
        style={{ padding: "11px", width: "5px" }}
        onClick={() => setMenu(0)}
      >
        <KeyboardBackspaceIcon color="success" />
      </Button>
      <br />
      <br />
      <TypeJeu size={100} pattern={pattern} />
      <Button
        onClick={() => {
          changerTypeJeu();
        }}
      >
        Changer
      </Button>
      <br />
      <RecuperateurCarte listeBouleTirer={listeBouleTirer} pattern={pattern} />
    </Box>
  );
};

export default Gestion;
