import * as views from "./views";

export default () => `
<main>
    ${views.Home()}
    ${views.Contactme()}
    ${views.Media()}
    ${views.Forms()}
</main>
`