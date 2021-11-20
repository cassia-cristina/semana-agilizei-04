/* Cypress.Commands.add('login', () => {
    cy.get('input[type=email]').type('testscypress@teste.com');
    cy.get('input[type=password]').type('123456');
    cy.get('button[type=submit]').click();
}) */

Cypress.Commands.add('login', () => {

    cy.token().then(response => {
      const { token, user } = response.body.data.login
  
      window.localStorage.setItem('token', token)
      window.localStorage.setItem('user', JSON.stringify(user))
    })
  
  })
  
  Cypress.Commands.add('token', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}`,
      body: {
        "operationName": "login",
        "variables": {
          "email": "testscypress@teste.com",
          "password": "123456"
        },
        "query": "mutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      id\n      handle\n      avatar\n      fullname\n      __typename\n    }\n    __typename\n  }\n}\n"
      }
    })
  })