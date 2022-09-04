describe('ui: AutoCompleteFiled component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=autocompletefiled--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AutoCompleteFiled!');
    });
});
