import LoginPage from '../Pages/LoginPage';
import catalog from '../Pages/catalog';

describe ('Flujo 1: Inicio de sesion exitoso', () =>{
  it('Debe ingresar al panel de administrador exitosamente', () =>{
    
    cy.clearCookies();
    cy.clearLocalStorage();
    LoginPage.visit();
    LoginPage.login('demo','1q2w3e4r5t');
    cy.get('.admin-user-account-text').should('contain','demo');
  });

  it('crear producto',()=>{
    catalog.createProducts();
  })
});