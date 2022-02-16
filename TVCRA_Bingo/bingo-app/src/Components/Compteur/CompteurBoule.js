import React, { useEffect } from "react";
import Badge from "@mui/material/Badge";

const CompteurBoule = (props) => {
  const { nbBoules } = props;
  return (
    <div>
      <h3>
        Nombres de boules en jeu:
        {
          <Badge
            data-testid="Compteur"
            badgeContent={nbBoules}
            color="secondary"
            sx={{
              marginLeft: 5,
              "& .MuiBadge-badge": {
                fontSize: 30,
                height: 40,
                minWidth: 40,
              },
            }}
          />
        }
      </h3>
    </div>
  );
};

export default CompteurBoule;
