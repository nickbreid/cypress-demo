describe("my first test", () => {
    it("does not do much", () => {
        cy.visit("http://localhost:3000")
            .get("#firstName")
            .type("Nick")
            .get("#lastName")
            .type("Reid")
            .get("#email")
            .type("nreid@mdsol.com")
            .get("button")
            .click()
            .get("#firstName")
            .should("have.value", "Nick")
            .should("be.disabled");

        cy.findByText(/congrats, Nick!/i).should("exist");
    });
});
