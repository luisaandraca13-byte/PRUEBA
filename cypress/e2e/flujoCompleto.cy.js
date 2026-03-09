import LoginPage from '../Pages/LoginPage';
import Jobs from '../Pages/Jobs';
import Customer from '../Pages/Customer';
import catalog from '../Pages/catalog';

describe ('Flujo completo', () =>{
    it('Inicio de sesion exitoso', () =>{

        cy.clearCookies();
        cy.clearLocalStorage();

        LoginPage.visit();
        LoginPage.login('demo','1q2w3e4r5t');
        cy.get('.admin-user-account-text').should('contain','demo');

        });

    it('Creacion de JOB', () =>{
        Jobs.createJobs();
    });

    it('Editar job',() =>{
        Jobs.editJobs();
    });

    it('Delete job',() =>{
        Jobs.deleteJobs();
    });

    it('columnas',() =>{
        Jobs.visibleColumns();
    })

    it('Crear customer',() =>{
        Customer.createCustomer()
    })

    it('exportar excel',()=>{
        Customer.exportDoc();
    })

    it('crear producto',()=>{
        catalog.createProducts();
    })
});