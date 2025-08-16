
Feature: Registro 

@Smoke
  Scenario: Registro exitoso de usuario nuevo
    Given el usuario se encuentra en la pagina de registro
    When el usuario completa el formulario con:
      | Name     | Email           |
      | Mayra    | may12@gmail.com | 
    And el usuario hace clic en "Signup"
    Then el usuario visualiza el radio button "Mrs"

@Smoke
 Scenario: Registro con email ya existente
 Given el usuario se encuentra en la pagina de registro
  When el usuario completa el formulario con:
       | Name     | Email           |
       | Mayra    | mayqa@gmail.com | 
   And el usuario hace clic en "Signup"
  Then el usuario deberia seguir viendo el boton "Signup"

  Feature: Login

@Smoke
 Scenario: Login exitoso
    Given el usuario se encuentra en la pagina de login
    When el usuario ingresa "mayqarmy@gmail.com" en el campo Email Address
    And el usuario ingresa "mayraqarmy" en el campo Password
    And el usuario hace clic en "Login"
    Then el usuario debería ver el mensaje "Logged in as mayra"