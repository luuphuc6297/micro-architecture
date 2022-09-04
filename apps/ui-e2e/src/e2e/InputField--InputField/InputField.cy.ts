describe('ui: InputField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputfield--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to InputField!');
    });
});
