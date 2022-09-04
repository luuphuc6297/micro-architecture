describe('ui: PhoneFiled component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=phonefiled--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PhoneFiled!');
    });
});
