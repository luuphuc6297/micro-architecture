describe('ui: renderUploadArea component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=renderuploadarea--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to renderUploadArea!');
    });
});
