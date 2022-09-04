describe('ui: PWDRequisite component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pwdrequisite--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PWDRequisite!');
    });
});
