import { Header, Nav, Main, Footer } from "./components";

function render() {
    const rootDiv = document.querySelector("#root");
    rootDiv.innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
    `;
}

render();