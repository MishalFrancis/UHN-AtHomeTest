/// <reference types="cypress" />


describe('Home Page-Work',  () => {

  it('visit home page-->should navigate to Home Page', () => {
//visit Home Page
cy.visit('https://humanfactors.ca/')
//check that the Home page is loaded
cy.title().should('eq', 'HHF | Healthcare Human Factors – Home')
  })

it('Work Button from Header-->should navigate to correct Page', () => {
  //visit Home Page
  cy.visit('https://humanfactors.ca/')
  //navigate to Work Page from Work button on Header
  cy.get('#menu-header').get('#menu-item-901').click()
  //validate that the Work Page is loaded correctly
  cy.title().should('eq', 'HHF | Healthcare Human Factors – Our Work')
  

})

it('Work Button from Footer-->should navigate to correct Page', () => {
 
   //visit Home Page
  cy.visit('https://humanfactors.ca/')
  //navigate to Work Page from Work button on Footer  
  cy.get('#menu-footer').get('#menu-item-905').click()
   //validate that the Work Page is loaded correctly
  cy.title().should('eq', 'HHF | Healthcare Human Factors – Our Work')
  



})

})
