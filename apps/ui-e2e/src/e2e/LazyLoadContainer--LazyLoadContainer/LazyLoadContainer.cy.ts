describe('ui: LazyLoadContainer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=lazyloadcontainer--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LazyLoadContainer!');
    });
});
