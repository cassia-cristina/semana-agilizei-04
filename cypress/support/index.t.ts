declare namespace Cypress {
    interface Chainable {
  
      /**
       * @example comando usado para fazer login com token
       */
      login(): void
  
      /**
       * @example comando que gera as informações de token
       */
  
      token(): void
  
    }
  }