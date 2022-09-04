describe('ui: UniversalToggleBtn component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=universaltogglebtn--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UniversalToggleBtn!');
    });
});
