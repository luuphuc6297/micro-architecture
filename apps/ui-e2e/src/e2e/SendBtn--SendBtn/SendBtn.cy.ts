describe('ui: SendBtn component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sendbtn--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SendBtn!');
    });
});
