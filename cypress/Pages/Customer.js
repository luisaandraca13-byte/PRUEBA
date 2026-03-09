class Customer {
    createCustomer (){
        cy.get('#menu-magento-customer-customer > a:nth-child(1)').click({force:true});
        cy.get('#menu-magento-customer-customer li.item-customer-manage span').click({force:true});
        cy.get('#add span').click();
        cy.get('[name="customer[prefix]"]', {timeout:10000}).click().type('prefijo');
        cy.get('[name="customer[firstname]"]').click().type('prueba');  
        cy.get('[name="customer[lastname]"]').click().type('test');
        cy.get('[name="customer[suffix]"]').click().type('sujifo');
        
        const randomString = Math.random().toString(36).substring(2, 7);
        const email = `user_${randomString}@random.com`;
        cy.get('[name="customer[email]"]').type(email);
        cy.get('#save').click();
        cy.get('tr.data-row',{timeout:10000}).first().find(':nth-child(3)').should('contain.text', 'prefijo').and('contain.text', 'sujifo');
    }

    exportDoc(){
        
        cy.get('button[data-action="grid-filter-expand"]').first().should('be.visible').click();
        cy.get('[name="created_at[from]"]').clear().type(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US'));
        cy.get('[name="created_at[to]"]').clear().type(new Date().toLocaleDateString('en-US'));
        cy.get('.admin__footer-main-actions > .action-secondary').click({force:true});
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .admin__data-grid-actions-wrap > .admin__data-grid-action-export > .admin__action-dropdown').click({force:true});
        cy.get('[data-bind="afterRender: $data.setToolbarNode"] > :nth-child(1) > .admin__data-grid-actions-wrap > .admin__data-grid-action-export > .admin__action-dropdown-menu > .admin__action-dropdown-footer-main-actions > .action-secondary').click({force:true});
    }
} export default new Customer();