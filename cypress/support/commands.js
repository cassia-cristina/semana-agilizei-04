
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

Cypress.Commands.add('tweet', () => {
  cy.get('textarea[type=text]').type('Quero ser especialista em automação de testes');
  cy.xpath('//button[contains(text(),"Tweet")]').click();

  cy.get('[role=alert]').invoke('text').then(($value) => {
    cy.log($value);
  })
})

Cypress.Commands.add('cloudinary', () => {
  // cy.intercept
  // 1. RouteMatcher - mapeamento, filtro da rota
  // 2. RouteHandler (opcional) - controlar o que a rota vai retornar (mock)
  cy.intercept({
    method: 'GET',
    hostname: 'res.cloudinary.com'
  }, {
    statusCode: 200,
    fixture: 'logo'
  }).as('cloudinary');
})