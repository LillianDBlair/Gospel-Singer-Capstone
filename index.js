import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";


const render = (st = state.Home) => {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;



  
  addNavEventListeners();
  addNavToggle();
};

render(state.Home);

//nav links event listener
function addNavEventListeners() {
  document.querySelectorAll("nav a").forEach(navLink => {
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.textContent]);
      // it could have been this
      // let selectedPage = event.target.textContent;
      // let pieceOfState = state[selectedPage]
      // render(pieceOfState);
    });
  });
}

function addNavToggle() {
  // add menu toggle to bars icon ar in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

function listenForFormEvent() {
  document.querySelectorAll("form").forEach(form =>
    form.addEventListener("submit", event => {
      event.preventDefault();
      console.log(event.target);
    })
  );
}
listenForFormEvent()