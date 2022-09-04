describe('ui: CustomDivider component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customdivider--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CustomDivider!');
    });
});
