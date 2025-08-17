import { Given, When, Then } from '@cucumber/cucumber';
import { pages } from '../hooks/hook'; // objeto page desde hooks
import * as L from '../locators/exampleLocators';
import { expect } from '@playwright/test';

//Registro

When('el usuario completa el formulario con:', async (dataTable) => {
  const data = dataTable.hashes()[0]; 
  await pages[0].fill(L.camponame, data.Name);
  await pages[0].fill(L.campoemail, data.Email);
});

When('el usuario hace clic en "Signup"', async () => {
  await pages[0].locator(L.signup).click();
});

Then('el usuario visualiza el radio button {string}', async (valor) => {
  const page = pages[0];
  const locator = page.locator(`input[type="radio"][name="title"][value="${valor}"]`);
  await locator.waitFor({ state: 'visible', timeout: 18000 });
  await expect(locator).toBeVisible();
});

Then('el usuario deberia seguir viendo el boton "Signup"', async () => {
  const page = pages[0];
  const locator = page.locator(L.signup);
  await locator.waitFor({ state: 'visible', timeout: 15000 });
  await expect(locator).toBeVisible();
});


//crear cuenta
Given('el usuario se encuentra en la pagina de signup', async () => {
  await pages[0].goto('https://automationexercise.com/signup');
  await pages[0].waitForLoadState('domcontentloaded');
});
// Registro completo de usuario - Account Information
When('el usuario completa el formulario de account information:', async (dataTable) => {
   const data = dataTable.hashes()[0];

  // Name
  await pages[0].locator('input[id="name"]').waitFor({ state: 'visible', timeout: 30000 });
  await pages[0].fill('input[id="name"]', data.Name);

  // Email (campo oculto con name=email_address)
  await pages[0].fill('input[name="email_address"]', data.Email);

  // Password
  await pages[0].locator('input[data-qa="password"]').waitFor({ state: 'visible', timeout: 30000 });
  await pages[0].fill('input[data-qa="password"]', data.Password);

  // Fecha de nacimiento
  await pages[0].locator('select[data-qa="days"]').waitFor({ state: 'visible', timeout: 30000 });
  await pages[0].selectOption('select[data-qa="days"]', data.Day);
  await pages[0].selectOption('select[data-qa="months"]', data.Month);
  await pages[0].selectOption('select[data-qa="years"]', data.Year);

  // Newsletter y Offers
  if (data.Newsletter === 'true') await pages[0].locator('input[id="newsletter"]').check();
  if (data.Offers === 'true') await pages[0].locator('input[id="optin"]').check();
});

// Address Information
When('el usuario completa el formulario de address information:', async (dataTable) => {
  const data = dataTable.rowsHash();

  await pages[0].locator('input[data-qa="first_name"]').waitFor({ state: 'visible', timeout: 30000 });
  await pages[0].fill('input[data-qa="first_name"]', data.FirstName);

  await pages[0].fill('input[data-qa="last_name"]', data.LastName);
  await pages[0].fill('input[data-qa="company"]', data.Company);
  await pages[0].fill('input[data-qa="address"]', data.Address);
  await pages[0].fill('input[data-qa="address2"]', data.Address2);

  await pages[0].selectOption('select[data-qa="country"]', data.Country);
  await pages[0].fill('input[data-qa="state"]', data.State);
  await pages[0].fill('input[data-qa="city"]', data.City);
  await pages[0].fill('input[data-qa="zipcode"]', data.Zipcode);
  await pages[0].fill('input[data-qa="mobile_number"]', data.MobileNumber);
});

// Botón Create Account
When('el usuario hace clic en "Create Account"', async () => {
  await pages[0].locator('button[data-qa="create-account"]').waitFor({ state: 'visible', timeout: 30000 });
  await pages[0].locator('button[data-qa="create-account"]').click();
});

// Mensaje de éxito
Then('el usuario debería ver el mensaje de registro exitoso', async () => {
  await pages[0].locator('h2:has-text("Account Created!")').waitFor({ state: 'visible', timeout: 30000 });
  const locator = pages[0].locator('h2:has-text("Account Created!")');
  await expect(locator).toBeVisible();
});



//Login

When('el usuario ingresa {string} en el campo Email Address', async (email) => {
  const input = pages[0].locator(L.EmailInput);
  await input.waitFor({ state: 'visible', timeout: 30000 });
  await input.fill(email);
});

When('el usuario ingresa {string} en el campo Password', async (password) => {
  const input = pages[0].locator(L.PasswordInput);
  await input.waitFor({ state: 'visible', timeout: 30000 });
  await input.fill(password);
});

When('el usuario hace clic en "Login"', async () => {
  const button = pages[0].locator(L.LoginButton);
  await button.waitFor({ state: 'visible', timeout: 10000 });
  await button.click();
});

//Login correcto

Then('el usuario debería ver el mensaje de login correcto {string}', async (mensaje) => {
  const locator = pages[0].locator(L.LoggedUser);
  await locator.waitFor({ state: 'visible', timeout: 15000 });
  await expect(locator).toHaveText(mensaje);
});

//login incorrecto

Then('el usuario debería ver el mensaje de login incorrecto {string}', async (mensaje) => {
  const page = pages[0];

  const form = page.locator('form[action="/login"]');
  await form.waitFor({ state: 'visible', timeout: 30000 });

  const emailInput = page.locator(L.EmailInput);
  await emailInput.waitFor({ state: 'visible', timeout: 15000 });

  const passwordInput = page.locator(L.PasswordInput);
  await passwordInput.waitFor({ state: 'visible', timeout: 15000 });

  const loginButton = page.locator(L.LoginButton);
  await loginButton.waitFor({ state: 'visible', timeout: 10000 });

  const errorLocator = page.locator(`p:has-text("${mensaje}")`);
  await errorLocator.waitFor({ state: 'visible', timeout: 15000 });
  await expect(errorLocator).toBeVisible();
});
