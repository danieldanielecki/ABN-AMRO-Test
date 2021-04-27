// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Vuetify");
  });

  it("Contains header and application title", () => {
    cy.visit("/");
    cy.contains("header", "ABN Test");
  });

  it("Contains footer and author name", () => {
    cy.visit("/");
    cy.contains("footer", "Daniel Danielecki");
  });

  it("Visits about url", () => {
    cy.visit("/about");
    cy.contains("h1", "This is an about page");
  });
});
