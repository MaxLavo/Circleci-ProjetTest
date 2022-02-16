import React, { useState } from "react";
import { TextField } from "@mui/material";
import { GestionCouleur } from "../../Utillitaire/formatage";
function Tirer(props) {
  const { setDerniereBoule, setNbBoules } = props;
  const [boule, setBoule] = useState("");
  let { listeBouleTirer } = props;
  let [bouleformater, setBouleformater] = useState("");
  const formatBoule = () => {
    const numeroBoule = parseInt(boule.match(/\d{1,2}/)[0]);
    if (numeroBoule <= 15) {
      bouleformater = "B" + numeroBoule;
      document.getElementById(numeroBoule).style.color = "white";
      document.getElementById(numeroBoule).style.backgroundColor = "#1976d2";
    }
    if (numeroBoule > 15 && numeroBoule <= 30) {
      bouleformater = "I" + numeroBoule;
      document.getElementById(numeroBoule).style.color = "White";
      document.getElementById(numeroBoule).style.backgroundColor = "Red";
    }
    if (numeroBoule > 30 && numeroBoule <= 45) {
      bouleformater = "N" + numeroBoule;
      document.getElementById(numeroBoule).style.color = "Black";
      document.getElementById(numeroBoule).style.backgroundColor = "#d3d3d3";
    }
    if (numeroBoule > 45 && numeroBoule <= 60) {
      bouleformater = "G" + numeroBoule;
      document.getElementById(numeroBoule).style.color = "White";
      document.getElementById(numeroBoule).style.backgroundColor = "Black";
    }
    if (numeroBoule > 60 && numeroBoule <= 75) {
      bouleformater = "O" + numeroBoule;
      document.getElementById(numeroBoule).style.color = "Black";
      document.getElementById(numeroBoule).style.backgroundColor = "Orange";
    }
    document.getElementById(numeroBoule).removeAttribute("disabled");
  };
  const onTextChange = (e) => {
    setBoule(e.target.value);
  };
  const handleSubmit = () => {
    document.getElementById("BouleEntree").value = "";
    formatBoule();
    const numeroBoule = parseInt(bouleformater.match(/\d{1,2}/)[0]);
    if (!listeBouleTirer.includes(numeroBoule)) {
      listeBouleTirer.push(numeroBoule);
      setNbBoules(listeBouleTirer.length);
      setDerniereBoule(bouleformater);
      console.log(listeBouleTirer);
    }
  };
  const regex =
    /^([Bb]?)([0]?[1-9]|1[0-5])$|^([Ii]?)(1[6-9]|2[0-9]|30)$|^([Nn]?)(3[1-9]|4[0-5])$|^([Gg]?)(4[6-9]|5[0-9]|60)$|^([Oo]?)(6[1-9]|7[0-5])$/;

  return (
    <div style={{ width: 200, height: 200 }}>
      <TextField
        id="BouleEntree"
        label="Entrez une boule"
        onKeyDown={(e) => {
          if (boule.match(regex)) {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }
        }}
        inputProps={{
          maxLength: 3,
        }}
        variant="outlined"
        type="text"
        onChange={onTextChange}
        error={boule === " " || !boule.match(regex)}
        helperText={
          boule === " " || !boule.match(regex) ? "Boule non valide." : "Good "
        }
      />{" "}
    </div>
  );
}

export default Tirer;
