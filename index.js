import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

const render = (st = state.Home) => {
  console.log(st);
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;

  router.updatePageLinks();
  addNavToggle();
};

router
  .on({
    ":page": params => {
      console.log(params.page);
      render(state[capitalize(params.page)]);
    },
    "/": () => render(state.Home),
  })
  .resolve();

render(state.Home);

function addNavToggle() {
  // add menu toggle to bars icon ar in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

function listenForFormEvent() {
  document.querySelectorAll("form").forEach((form) =>
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(event.target);
    })
  );
}
listenForFormEvent();
