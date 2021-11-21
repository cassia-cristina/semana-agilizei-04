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

    /**
    * @example comando para cadastrar tweet
    */
    tweet(): void

    /**
    * @example comando para controlar o que a rota vai retornar (mock)
    */
    cloudinary(): void

  }
}