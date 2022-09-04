describe('ui: CustomizedSnackbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customizedsnackbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CustomizedSnackbar!');
    });
});
