describe('ui: UploadAvatar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uploadavatar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UploadAvatar!');
    });
});
