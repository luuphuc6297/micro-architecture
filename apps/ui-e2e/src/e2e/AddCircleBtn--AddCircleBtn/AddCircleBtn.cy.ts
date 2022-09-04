describe('ui: AddCircleBtn component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=addcirclebtn--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AddCircleBtn!');
    });
});
