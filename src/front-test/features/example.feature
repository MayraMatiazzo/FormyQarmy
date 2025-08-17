
Feature: Registro 

@Smoke
  Scenario: Registro exitoso de usuario nuevo
    Given el usuario se encuentra en la pagina de login y registro
    When el usuario completa el formulario con:
      | Name     | Email           |
      | Mayra    | may12@gmail.com | 
    And el usuario hace clic en "Signup"
    Then el usuario visualiza el radio button "Mrs"

@Smoke
 Scenario: Registro con email ya existente
 Given el usuario se encuentra en la pagina de login y registro
  When el usuario completa el formulario con:
       | Name     | Email           |
       | Mayra    | mayqa@gmail.com | 
   And el usuario hace clic en "Signup"
  Then el usuario deberia seguir viendo el boton "Signup"

@Smoke
Scenario: Registro completo de nuevo usuario
  Given el usuario se encuentra en la pagina de signup
  When el usuario completa el formulario de account information:
    | Title | Name | Email             | Password | Day | Month | Year | Newsletter | Offers |
    | Mr    | May  | may1234@gmail.com | 12345    | 10  | May   | 1990 | true       | true   |
  And el usuario completa el formulario de address information:
    | FirstName | LastName | Company   | Address         | Address2 | Country | State | City    | Zipcode | MobileNumber |
    | May       | Martinez | MiEmpresa | Calle Falsa 123 | Piso 2   | India   | Delhi | Delhi   | 110001  | 1234567890   |
  And el usuario hace clic en "Create Account"
  Then el usuario debería ver el mensaje de registro exitoso
