
Feature: Registro 

@Smoke
  Scenario: Registro exitoso de usuario nuevo
    Given el usuario navega a la pagina de registro
    When el usuario completa el formulario con:
      | Name     | Email           |
      | Mayra    | mayra@gmail.com | 
    And el usuario hace clic en "Signup"
    Then el usuario debería ver el mensaje "Enter Account Information"

@Smoke
  Scenario: Registro con email ya existente
    Given el usuario está en la página de registro
    When el usuario completa el formulario con:
      | Name     | Email           |
      | Mayra    | mayra@gmail.com | 
    And el usuario hace clic en "Signup"
    Then el usuario debería ver el mensaje "Email Address already exist!"

