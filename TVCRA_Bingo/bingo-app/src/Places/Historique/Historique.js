import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Historique = (props) => {
  const { listeBouleTirer, setMenu } = props;
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
        Présentation des enregistements
      </Typography>

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
    </Box>
  );
};

export default Historique;
