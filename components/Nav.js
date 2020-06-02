export default links => `
<nav>
  <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
    ${links.reduce(
      (html, link) =>
        html +
        `<li><a href="/${link.name !== "Home" ? link.name : ""}" name="${
          link.name
        }" data-navigo>${link.text}</a></li>`,
      ``
    )}
    </ul>
  </nav>
`;
