describe('example', () => {
  it('should have button', () => {
    cy.visit('../../example.html');
    cy.get('button').should('exist');
  })
})
