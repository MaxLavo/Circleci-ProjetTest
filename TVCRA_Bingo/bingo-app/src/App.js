import React, { useEffect, useState } from "react";
import Acceuil from "./Places/Accueil/Accueil.js";
import DebuterParties from "./Places/Debuter/DebuterPartie.js";
import Gestion from "./Places/Gestion/Gestion.js";
import Historique from "./Places/Historique/Historique.js";

const App = () => {
  let [listeBouleTirer] = useState([]);
  const [menu, setMenu] = useState("0");

  useEffect(() => {}, [menu]);

  const choix = () => {
    console.log("Menu :" + menu);
    if (menu == "0") {
      return <Acceuil setMenu={setMenu} />;
    }
    if (menu == "1") {
      return (
        <DebuterParties listeBouleTirer={listeBouleTirer} setMenu={setMenu} />
      );
    }
    if (menu == "2") {
      return <Gestion listeBouleTirer={listeBouleTirer} setMenu={setMenu} />;
    }
    if (menu == "3") {
      return <Historique setMenu={setMenu} />;
    }
  };
  return <div className="App">{choix()}</div>;
};

export default App;
