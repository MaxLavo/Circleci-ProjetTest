import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import Accueil from "./Accueil.js";

test("Devrait avoir les boutons à l'accueil ", () => {
  const { container, getByText } = render(<Accueil />);
  const B1 = container.getElementsByTagName("button").item(0);
  const B2 = container.getElementsByTagName("button").item(1);
  const B3 = container.getElementsByTagName("button").item(2);
  expect(B1).toHaveTextContent("Débuter une partie");
  expect(B2).toHaveTextContent("Gérer la partie");
  expect(B3).toHaveTextContent("Historique");
});

test("Devrait avoir les deux logos", () => {
  const { container, getByText } = render(<Accueil />);
  const logoCTM = container.getElementsByTagName("img").item(1);
  expect(logoCTM).toBeInTheDocument();
  const logo = container.getElementsByTagName("img").item(0);
  expect(logo).toBeInTheDocument();
});
