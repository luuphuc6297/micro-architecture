describe('ui: CustomizedPin component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customizedpin--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CustomizedPin!');
    });
});
