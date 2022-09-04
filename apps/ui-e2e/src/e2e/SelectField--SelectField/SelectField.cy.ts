describe('ui: SelectField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=selectfield--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SelectField!');
    });
});
