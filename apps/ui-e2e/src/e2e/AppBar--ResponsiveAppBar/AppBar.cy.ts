describe('ui: ResponsiveAppBar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=responsiveappbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ResponsiveAppBar!');
    });
});
