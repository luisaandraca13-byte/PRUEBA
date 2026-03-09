class catalog {
    createProducts(){
        cy.get('#menu-magento-catalog-catalog > [onclick="return false;"]').click({force:true});
        cy.get('.item-catalog-products > a').click({force:true});
        cy.get('.admin__data-grid-loading-mask', { timeout: 30000 }).should('not.be.visible');
        cy.get('#add_new_product-button').click({force:true});
        cy.get('[name="product[name]"]',{timeout:30000}).should('be.visible').type('prueba_obligatorio');
        cy.get('[name="product[price]"]').clear().type(Math.floor(Math.random() * 90 + 10).toString());
        cy.get('[data-index="gallery"] > .fieldset-wrapper-title > .admin__collapsible-title').click({force:true});
        cy.get('.uppy-Dashboard-input').first().selectFile('cypress/fixtures/prueba.jpg', { force: true });
        cy.get('[data-index="attributes"] > .fieldset-wrapper-title > .admin__collapsible-title').click({force:true});
        cy.get('[name="product[qa262]"]').click({force:true}).type('prueba');
        cy.get('[name="product[qa12345]"]').click({force:true}).type('prueba');
        cy.get('#save-button').click({force:true});
       

    }
} export default new catalog();