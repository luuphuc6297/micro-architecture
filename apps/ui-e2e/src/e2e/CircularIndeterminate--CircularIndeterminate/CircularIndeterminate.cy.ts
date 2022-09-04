describe('ui: CircularIndeterminate component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=circularindeterminate--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CircularIndeterminate!');
    });
});
