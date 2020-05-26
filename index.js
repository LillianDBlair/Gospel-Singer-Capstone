import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";


const render = (st) => {
    document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main(st)}
    ${Footer()}
    `;
    
    addNavListeners();
};

render(state.Home);

//nav links event listener
function addNavListeners () {
    document.querySelectorAll("nav a").forEach(el => {
    el.addEventListener("click", event => {
        event.preventDefault();
        let page = event.target.textContent;
        render(state[page]);
    });
});
}


<script>
    function submitForm() {
    document.contact-form.submit();
    document.contact-form.reset();
}
</script>

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