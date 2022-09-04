describe('ui: TemporaryDrawer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=temporarydrawer--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TemporaryDrawer!');
    });
});
