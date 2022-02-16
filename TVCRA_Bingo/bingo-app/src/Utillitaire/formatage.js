const formatage = (boules, setDerniereBoule) => {
  if (boules.length > 1) {
    let boulePrecedente = "";
    if (boules[boules.length - 1] <= 15) {
      boulePrecedente = "B" + boules[boules.length - 1];
    }
    if (boules[boules.length - 1] > 15 && boules[boules.length - 1] <= 30) {
      boulePrecedente = "I" + boules[boules.length - 1];
    }
    if (boules[boules.length - 1] > 30 && boules[boules.length - 1] <= 45) {
      boulePrecedente = "N" + boules[boules.length - 1];
    }
    if (boules[boules.length - 1] > 45 && boules[boules.length - 1] <= 60) {
      boulePrecedente = "G" + boules[boules.length - 1];
    }
    if (boules[boules.length - 1] > 60 && boules[boules.length - 1] <= 75) {
      boulePrecedente = "O" + boules[boules.length - 1];
    }
    setDerniereBoule(boulePrecedente);
  }
};
const GestionCouleur = (uneBoule) => {
  if (uneBoule <= 15) {
    document.getElementById(uneBoule).removeAttribute("disabled");
    document.getElementById(uneBoule).style.color = "white";
    document.getElementById(uneBoule).style.backgroundColor = "#1976d2";
  }
  if (uneBoule > 15 && uneBoule <= 30) {
    document.getElementById(uneBoule).removeAttribute("disabled");
    document.getElementById(uneBoule).style.color = "White";
    document.getElementById(uneBoule).style.backgroundColor = "Red";
  }
  if (uneBoule > 30 && uneBoule <= 45) {
    document.getElementById(uneBoule).removeAttribute("disabled");
    document.getElementById(uneBoule).style.color = "Black";
    document.getElementById(uneBoule).style.backgroundColor = "#d3d3d3";
  }
  if (uneBoule > 45 && uneBoule <= 60) {
    document.getElementById(uneBoule).removeAttribute("disabled");
    document.getElementById(uneBoule).style.color = "White";
    document.getElementById(uneBoule).style.backgroundColor = "Black";
  }
  if (uneBoule > 60 && uneBoule <= 75) {
    document.getElementById(uneBoule).removeAttribute("disabled");
    document.getElementById(uneBoule).style.color = "Black";
    document.getElementById(uneBoule).style.backgroundColor = "Orange";
  }
};
export { formatage, GestionCouleur };
