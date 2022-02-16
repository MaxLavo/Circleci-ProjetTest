import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { formatage, GestionCouleur } from "../../Utillitaire/formatage";

const Tableau = (props) => {
  const [BouleCourant, setBouleCourante] = useState("");
  const [contextMenu, setContextMenu] = useState(null);
  let { listeBouleTirer, setNbBoules, setDerniereBoule, derniereBoule } = props;
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  useEffect(() => {
    formatage(listeBouleTirer, setDerniereBoule);
    const toutesLesBoules = document.getElementsByClassName("bouleBingo");
    [...toutesLesBoules];
    Array.from(toutesLesBoules).map((uneBoule) => {
      uneBoule.disabled = true;
      uneBoule.addEventListener("contextmenu", (e) => {
        setBouleCourante(uneBoule.innerHTML);
        handleContextMenu();
      });
    });

    listeBouleTirer.map((uneBoule) => {
      GestionCouleur(uneBoule);
    });
  }, []);
  const handleClose = () => {
    setContextMenu(null);
  };
  const handleContextMenu = () => {
    event.preventDefault();

    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };
  const supprimerUneBoule = () => {
    const numeroBoule = parseInt(BouleCourant.match(/\d{1,2}/)[0]);
    var index = listeBouleTirer.indexOf(numeroBoule);
    listeBouleTirer.splice(index, 1);
    setNbBoules(listeBouleTirer.length);
    formatage(listeBouleTirer, setDerniereBoule);
    console.log("suppression boule  " + listeBouleTirer);
    document.getElementById(numeroBoule).disabled = true;
    document.getElementById(numeroBoule).style.color = "White";
    document.getElementById(numeroBoule).style.backgroundColor = "White";
  };
  const lettres = ["B", "I", "N", "G", "O"];
  const nombres = {
    B: range(1, 15),
    I: range(16, 30),
    N: range(31, 45),
    G: range(46, 60),
    O: range(61, 75),
  };
  const styleBoule = {
    color: "White",
    padding: "20px",
    width: "7vh",
    height: "7vh",
    margin: "0.2vh",
    fontSize: 30,
  };
  const Boule = (lettre, nombre) => {
    return (
      <IconButton
        className="bouleBingo"
        sx={{ "&:hover": { backgroundColor: "transparent" } }}
        size="small"
        style={styleBoule}
        id={nombre}
      >
        {lettre + nombre}
      </IconButton>
    );
  };

  return (
    <div
      onClick={() => {
        handleClose();
      }}
    >
      <Grid container spacing={2} textAlign="center">
        {lettres.map((lettre) => (
          <Grid item xs={2.3}>
            <h1 style={{ marginBottom: "1vh", fontSize: 40 }}>{lettre}</h1>
            <Paper direction="column" elevation={3}>
              {nombres[lettre].map((nombre) => Boule(lettre, nombre))}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Menu
        id="menu"
        onClose={() => {
          handleClose;
        }}
        open={contextMenu !== null}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem
          onClick={() => {
            supprimerUneBoule();
            handleClose();
          }}
        >
          <ListItemIcon>
            <DeleteForeverIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Tableau;
