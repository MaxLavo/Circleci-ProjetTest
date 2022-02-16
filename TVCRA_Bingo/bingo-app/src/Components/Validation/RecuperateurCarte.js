import React, { useState } from "react";
import Bingo from "../../server/domain/Bingo.mjs";
import TextField from "@mui/material/TextField";
import CarteJeu from "../VisualisationTypeJeu/CarteJeu";

const RecuperateurCarte = (props) => {
  const [carteTrouvee, setCarteTrouvee] = useState(false);
  const [valeur, setValeur] = useState("");
  const [carte, setCarte] = useState({});
  const { pattern, listeBouleTirer } = props;

  const onTextChange = (e) => {
    setValeur(e.target.value);
  };
  const regex =
    /^(3600[1-9]|360[1-9][0-9]|36[1-9][0-9]{2}|3[7-9][0-9]{3}|4[0-4][0-9]{3}|45000)$/;

  const afficherCarte = async (cardId) => {
    let res = await Bingo.getCardById(cardId);
    setCarte(res);
    setCarteTrouvee(true);
  };

  return (
    <div className="RecuperateurCarte">
      <TextField
        label="Identifiant de carte"
        type="text"
        onKeyDown={(e) => {
          if (valeur.match(regex)) {
            if (e.key === "Enter") {
              afficherCarte(e.target.value);
            }
          }
        }}
        inputProps={{
          maxLength: 5,
        }}
        onChange={onTextChange}
        error={!valeur.match(regex)}
        helperText={!valeur.match(regex) ? "Id invalide" : ""}
      />{" "}
      <br />
      <br />{" "}
      {carteTrouvee ? (
        <CarteJeu
          size={500}
          carte={carte}
          pattern={pattern}
          boulesTirees={listeBouleTirer}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default RecuperateurCarte;
