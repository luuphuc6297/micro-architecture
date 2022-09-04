describe('ui: TextFiledLabel component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=textfiledlabel--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TextFiledLabel!');
    });
});
