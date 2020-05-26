import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";
import { doc } from "prettier";


const render = (st = state.Home) => {
    document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
    
    addNavEventListeners();
};

render(state.Home);

//nav links event listener
function addNavEventListeners () {
    document.querySelectorAll("nav a").forEach(navLink => {
    navLink.addEventListenerAll("click", event => {
        event.preventDefault();
        render(state[event.target.textContent]);
        // it could have been this
        // let selectedPage = event.target.textContent;
        // let pieceOfState = state[selectedPage]
        // render(pieceOfState);
    });
});
}


//menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});



// contact form script
<script>
    function submitForm() {
    document.contact-form.submit();
    document.contact-form.reset();
}
</script>

// request form functions and script
function submitForm() {
    var·frm = document.getElementsByName("request-form")[0];
    frm.submit(); 
    frm.reset();  
    return false; 
}

<script>
    function submitForm() {
    document.request-form.submit();
    document.request-form.reset();
}
</script>

function submitForm() {
    var·frm = document.getElementsByName("request-form")[0];
    frm.submit(); 
    frm.reset();  
    return false; 
}