context('Filters', () => {
  beforeEach(() => {
    cy.setCookie('ProjectId', '975bf280-fd91-488c-994c-2f04416e5ee3')
    cy.visit('store')
  })
  
  it('should have 5 filters in product filter menu', () => {
    cy.get(".product-filter .checkbox").its('length').should('be', 5)
  })

  it('should not filter items by default', () => {
    cy.assertItems(
      [
        'Brazil Natural Barra Grande',
        'Kenya Gakuyuni AA'
      ]
    )
  })

  it("should filter by 'Coffee processing' category", () => {
    cy.filterBy("Wet (Washed)")
    cy.assertItems(['Kenya Gakuyuni AA'])
  })
  
  it("should filter by 'Status' category", () => {
    cy.filterBy("Bestseller")
    cy.assertItems(['Kenya Gakuyuni AA'])
  })

  it("should filter by multiple categories", () => {
    cy.filterBy("Wet (Washed)")
    cy.filterBy("Dry (Natural)")
    cy.filterBy("Bestseller")
    cy.assertItems(['Kenya Gakuyuni AA'])
  })

  it("should support zero items results", () => {
    cy.filterBy("On sale")
    cy.assertItems([])
  })
})
