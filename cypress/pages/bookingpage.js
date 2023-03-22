import { elements } from "../objects/objects";

class hotelbooking {
  constructor() {}

  visit() {
    cy.wait(1000);
    cy.visit(elements.link);
  }

  fill() {
    cy.wait(1000);
    cy.get(elements.firstName).type("Ree");
    cy.wait(1000);
    cy.get(elements.lastName).type("Mahloko");
    cy.wait(1000);
    cy.get(elements.price).type("500");

    cy.get(elements.deposit)
      .select("false")
      .invoke("val")
      .should("eq", "false");

    cy.get(elements.checkIn).type("2020-01-01");
    cy.get(elements.checkOut).type("2020-01-02");
    cy.get(elements.save).click();

    cy.wait(3000);

    cy.get(elements.rows).its("length").should("be.gte", 1);
  }

  verify() {
    cy.wait(1000);
    cy.get(elements.rows).each(($el, index, $list) => {
      let cellData = $el.find(elements.tableCell).text();
      if (cellData.includes("Ree")) {
        cy.get($el).find(elements.tableCell).should("contain", "Ree");
        cy.get($el).find(elements.tableCell).should("contain", "Mahloko");
        cy.get($el).find(elements.tableCell).should("contain", "500");
        cy.get($el).find(elements.tableCell).should("contain", "false");
        cy.get($el).find(elements.tableCell).should("contain", "2020-01-01");
        cy.get($el).find(elements.tableCell).should("contain", "2020-01-02");
      }
    });
  }

  delete() {
    cy.wait(1000);
    cy.get(elements.delete).as('deleteButton').should('be.visible').should('be.enabled');
    cy.wait(1000); // adjust the time as necessary
    cy.get('@deleteButton').click({ multiple: true });
  }
  
}

export default hotelbooking;
