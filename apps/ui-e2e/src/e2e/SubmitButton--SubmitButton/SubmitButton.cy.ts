describe('ui: SubmitButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=submitbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SubmitButton!');
    });
});
