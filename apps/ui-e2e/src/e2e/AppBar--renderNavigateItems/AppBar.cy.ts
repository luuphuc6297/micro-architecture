describe('ui: renderNavigateItems component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rendernavigateitems--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to renderNavigateItems!');
    });
});
