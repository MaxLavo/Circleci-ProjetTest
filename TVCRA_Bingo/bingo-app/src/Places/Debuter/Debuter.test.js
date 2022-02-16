import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import Debuter from "./DebuterPartie.js";

// describe("Debuter", () => {
//   test("Devrait avoir le TableauBingo", () => {
//     render(<Debuter />);
//     //expect(screen.getByText("Nombres de boules en jeu:")).toBeInTheDocument();
//     //expect(screen.getByRole("textbox")).toBeInTheDocument();
//     expect(screen.getByText("B1")).toBeInTheDocument();
//   });
// });

describe("Debuter", () => {
  test("Devrait augmenter compteur, afficher derniere boule et tableau", () => {
    const dom = render(<Debuter />);
    userEvent.type(screen.getByRole("textbox"), "b2{enter}");
    expect(screen.getByText("Good")).toBeInTheDocument();
    expect(screen.getByTestId("Compteur").textContent).toEqual("1");
    const B2 = dom.container.querySelector("#B2");
    expect(B2).not.toBeDisabled();
    expect(screen.getByTestId("derniereBoule").textContent).toEqual("B2");
  });
});

describe("Debuter", () => {
  test("Devrait rien faire", () => {
    const dom = render(<Debuter />);
    userEvent.type(screen.getByRole("textbox"), "b54");
    expect(screen.getByText("Boule non valide.")).toBeInTheDocument();
    expect(screen.getByTestId("Compteur").textContent).toEqual("");
    const B2 = dom.container.querySelector("#B2");
    expect(B2).toBeDisabled();
    expect(screen.getByTestId("derniereBoule").textContent).toEqual("");
  });
});
