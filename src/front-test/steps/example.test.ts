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

//login sin campos

When('el usuario hace clic en "Login" sin ingresar Email ni Password', async () => {
  const page = pages[0];
  const loginButton = page.locator(L.ButtonLogin2);

  await loginButton.waitFor({ state: 'attached', timeout: 15000 });
  await loginButton.click({ force: true });
});

Then('el usuario debería ver una alerta indicando que complete los campos', async () => {
  const page = pages[0];

  page.on('dialog', async dialog => {
    const text = dialog.message();
    if (!text.toLowerCase().includes('fill out this field')) { 
      throw new Error(`El mensaje de alerta esperado no coincide: ${text}`);
    }
    await dialog.dismiss();
  });

  const loginButton = page.locator(L.ButtonLogin2);
  await loginButton.click();
});