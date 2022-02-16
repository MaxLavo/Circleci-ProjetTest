import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Css from "./Accueil.css";
import logo from "../../Images/logo.png";
import logoCTM from "../../Images/logo-ctm.png";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  background: "#99ccff",
  m: 5,
  border: 1,
  width: "50rem",
  height: "45rem",
};

export default function Accueil(props) {
  const { setMenu } = props;
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles, borderRadius: 15 }}>
          <Box
            sx={{
              p: 1,
              mt: 10,
              mx: "auto",
              textAlign: "center",
            }}
          >
            <img src={logo} width={150} />
          </Box>
          <Box textAlign="center" sx={{ mt: 5 }}>
            <Button
              className="Button"
              variant="contained"
              onClick={() => setMenu("1")}
            >
              Débuter une partie
            </Button>
          </Box>
          <Box textAlign="center" sx={{ mt: 5 }}>
            <Button
              className="Button"
              variant="contained"
              onClick={() => setMenu("2")}
            >
              Gérer la partie
            </Button>
          </Box>
          <Box textAlign="center" sx={{ mt: 5 }}>
            <Button
              className="Button"
              variant="contained"
              onClick={() => setMenu("3")}
            >
              Historique
            </Button>
          </Box>
          <Box
            sx={{
              p: 1,
              mt: 15,
              mr: 1,
              textAlign: "right",
            }}
          >
            <img src={logoCTM} width="350" height="104" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
