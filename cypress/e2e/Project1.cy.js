// import "cypress-mochawesome-reporter/register";
import { elements } from "../objects/objects";
import hotelbooking from "../pages/bookingpage";



describe('Testing the hotel booking form', () => {

  const page = new hotelbooking();
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it('Adding data to form', () => {
   // const page = new hotelbooking();
    page.visit();
    page.fill();
    
  })

  it('Verifying data', () => {
    page.visit();
    //data takes time to load
    cy.wait(5000);
    page.verify();
  })

  it('Deleting row', () => {
   page.visit();
    //data takes time to load
    cy.wait(5000);
    page.delete();
 })
})