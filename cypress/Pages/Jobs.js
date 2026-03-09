class Jobs {
    createJobs(){
        cy.get('#add span').should('be.visible').click();
        cy.get('.admin__field-control > [name="title"]', {timeout:10000}).click().type('prueba1');
        cy.get('#container div[data-index="settings"] span[data-bind="i18n: label"]').click();
        cy.get('[name="entity"]').select('catalog_product');
        cy.get('[name="behavior"]').select('append');
        cy.get('[name="import_source"]').select('file');
        cy.get('[name="file_path"]').click();
        cy.get('[name="file_path"]').type('var/import/products.csv');
        cy.get('#container span[data-bind="text: title"]').click();
        cy.get('#save span').click();
    }

    editJobs(){
        cy.get('tr.data-row').first().find('a.action-menu-item').contains('Edit').click();
        cy.get('.admin__field-control > [name="title"]', {timeout:10000}).should('be.visible').click().type('edicion');  
        cy.get('#save span').click();
    }

    deleteJobs(){

        cy.get('tr.data-row').first().find('input.admin__control-checkbox').check({ force: true });
        cy.get('button.action-select').contains('Actions').first().click({ force: true });

        //Esperamos específicamente a que el menú deje de estar oculto
        cy.get('ul.action-menu._active').should('be.visible').find('span.action-menu-item').contains('Delete').click({ force: true });
        cy.get('button.action-accept').contains('OK').should('be.visible').click();
    }
    
    visibleColumns(){
        cy.get('button.admin__action-dropdown').contains('Columns').click();
        const columnsToHide = ['Cron', 'Frequency', 'Entity Type', 'Import Source'];

        columnsToHide.forEach((column) => {
            cy.get('.admin__field-option').contains('label', column).parent().find('input[type="checkbox"]').uncheck({ force: true });
        });

        cy.get('body',{timeout:10000}).click(0, 0);
    }
} export default new Jobs();