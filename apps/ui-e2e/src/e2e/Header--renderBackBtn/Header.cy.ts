describe('ui: renderBackBtn component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=renderbackbtn--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to renderBackBtn!');
    });
});
