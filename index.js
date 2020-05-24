import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";


function render(st) {
    const rootDiv = document.querySelector("#root");
    rootDiv.innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main(st)}
    ${Footer()}
    `;
}

render(state.Home);

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