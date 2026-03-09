class LoginPage {
    visit() {
        cy.visit('https://magento2demo.firebearstudio.com/admin_k1b5n8');
    }
    
    login(usuario, contraseña){
        cy.get('[name="login[username]"]').type(usuario);
        cy.get('[name="login[password]"]').type(contraseña);
        cy.get('.action-login').click();

    }
}export default new LoginPage();