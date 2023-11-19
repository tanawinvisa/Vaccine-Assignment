describe('Hospitals', () => {
  it('video and 3 hospital images', () => {
    
      cy.visit('/api/auth/signin'); // Replace with your NextAuth login page URL
    
  
    
      // Assuming you have input fields for username and password
      cy.get('input[name="email"]').type('patientwin@gmail.com'); // Replace with your test username
      cy.get('input[name="password"]').type('6431320521'); // Replace with your test password
      cy.get('button[type="submit"]').click(); // Replace with your login button selector
  
      // You might need to wait for authentication to complete
      cy.wait(5000); // Adjust timing as per your application's authentication speed
  
      // Assert that the user is logged in successfully
      
  

    cy.visit('/')

    cy.get('video').should('be.visible')
    cy.get('video').should('have.prop', 'paused', false)

    cy.wait(5000)

    cy.get('button').contains('Pause').click()
    cy.get('video').should('have.prop', 'paused', true)

    cy.get('button').contains('Select Hospital Now').click()

    cy.get('img').should('have.length.gte', 3)
  })
})