context('Product Info', () => {
  beforeEach(() => {
    cy.setCookie('ProjectId', '975bf280-fd91-488c-994c-2f04416e5ee3')
    cy.visit('coffees/brazil-natural-barra-grande')
  })
  
  it('should display the correct data of the product', () => {
    cy.get(".header-row").should('have.text', 'Dancing Goat')

    cy.get(".product-detail header h2").should('have.text', 'Brazil Natural Barra Grande')

    cy.get(".product-detail .row-fluid img").should('have.attr', 'alt', 
      'Brazil Natural Barra Grande')

    cy.get(".product-detail .row-fluid img").should('have.attr', 'src', 
      'https://assets-us-01.kc-usercontent.com:443/975bf280-fd91-488c-994c-2f04416e5ee3/988caa85-d8fe-4c72-9b26-180d8822a14e/brazil.jpg')

    cy.get(".product-detail .row-fluid .description").should('contain', 
      'Taste Natural Barra Grande from the high altitudes of Poco Fundo')


    cy.get(".product-detail .row-fluid .description .product-detail-properties").within(() => {
    
      cy.get("dt").then(($dts) => {
            expect($dts, '4 items').to.have.length(4)
            expect($dts.eq(0), 'first item').to.contain('Farm')
            expect($dts.eq(1), 'second item').to.contain('Variety')
            expect($dts.eq(2), 'third item').to.contain('Processing')
            expect($dts.eq(3), 'fourth item').to.contain('Altitude')
          })

      cy.get("dd").then(($dls) => {
            expect($dls, '4 items').to.have.length(4)
            expect($dls.eq(0), 'first item').to.contain('Sitio Barra Grande')
            expect($dls.eq(1), 'second item').to.contain('Yellow Catuai, Mundo Novo')
            expect($dls.eq(2), 'third item').to.contain('Dry (Natural)')
            expect($dls.eq(3), 'fourth item').to.contain('3900 feet')
          })
    })
  })
})
