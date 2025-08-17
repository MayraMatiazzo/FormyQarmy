Feature: Login

@Smoke
Scenario: Login sin completar campos
  Given el usuario se encuentra en la pagina de login y registro
  When el usuario hace clic en "Login" sin ingresar Email ni Password
  Then el usuario debería ver una alerta indicando que complete los campos

@Smoke
Scenario: Login incorrecto
  Given el usuario se encuentra en la pagina de login y registro
  When el usuario ingresa "may@gmail.com" en el campo Email Address
  And el usuario ingresa "qarmy" en el campo Password
  And el usuario hace clic en "Login"
  Then el usuario debería ver el mensaje de login incorrecto "Your email or password is incorrect!"

@Smoke
Scenario: Login exitoso
  Given el usuario se encuentra en la pagina de login y registro
  When el usuario ingresa "mayqarmy@gmail.com" en el campo Email Address
  And el usuario ingresa "mayraqarmy" en el campo Password
  And el usuario hace clic en "Login"
  Then el usuario debería ver el mensaje de login correcto "Logged in as mayra"

