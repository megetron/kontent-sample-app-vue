// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('assertItems', (expected_items) => {
  var expected_items_length = expected_items.length
  
  if (expected_items_length)
  {
    cy.get('#product-list article').then((actual_items) => {
      expect(actual_items, `${expected_items_length} items`).to.have.length(expected_items_length)

      for (var i = 0; i < expected_items_length; i++) {
        expect(actual_items.eq(i), `item #${i}`).to.contain(expected_items[i])
      }
    })
  }
  else{
    cy.get('#product-list article').should('not.exist')
  }
})


Cypress.Commands.add('filterBy', (filter_text) => {
    cy.get('.product-filter label').within(() => {
      cy.contains(filter_text).click()
    })
})

