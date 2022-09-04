describe('ui: SocialButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=socialbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SocialButton!');
    });
});
