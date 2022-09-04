describe('ui: CustomizedPinField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customizedpinfield--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CustomizedPinField!');
    });
});
