describe('ui: renderPreview component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=renderpreview--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to renderPreview!');
    });
});
