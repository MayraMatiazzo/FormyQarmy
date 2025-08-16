import { Given, When, Then } from '@cucumber/cucumber';
import { pages } from '../hooks/hook'; // objeto page desde hooks
import * as L from '../locators/exampleLocators';
import { expect } from '@playwright/test';

Given('el usuario se encuentra en la pagina de registro', async () => {
  await pages[0].goto('https://automationexercise.com/login');
});

When('el usuario completa el formulario con:', async (dataTable) => {
  const data = dataTable.hashes()[0]; 
  await pages[0].fill(L.camponame, data.Name);
  await pages[0].fill(L.campoemail, data.Email);
});

When('el usuario hace clic en {string}', async (button) => {
  if (button === 'Signup') {
    await pages[0].click(L.signup);
  }
});
Then('el usuario visualiza el radio button {string}', async (valor) => {
  const page = pages[0];
  const locator = page.locator(`input[type="radio"][name="title"][value="${valor}"]`);
  await locator.waitFor({ state: 'visible', timeout: 18000 });
  await expect(locator).toBeVisible();
});

Then('el usuario deberia seguir viendo el boton {string}', async (signup) => {
  const page = pages[0];
  const locator = page.locator(L.signup);
  await locator.waitFor({ state: 'visible', timeout: 15000 });
  await expect(locator).toBeVisible();
});



Given('el usuario se encuentra en la pagina de login', async () => {
  const page = pages[0];
  await page.goto ('https://automationexercise.com/login');
});

When('el usuario ingresa {string} en el campo Email Address', async (EmailLogin: string) => {
  const page = pages[0];
  await page.fill(L.EmailLogin, Email Address);
});

When('el usuario ingresa {string} en el campo Password', async (LoginPassword: string) => {
  const page = pages[0];
  await page.fill(L.LoginPassword, Password);
});

When('el usuario hace clic en {string}', async (loginButton) => {
  if (button === 'Signup') {
    await pages[0].click(L.loginButton);

Then('el usuario debería ver el mensaje {string}', async (valor) => {
  const page = pages[0];
  const locator = page.locator(`nav.navbar-nav li:nth-child(10) a`);
  await locator.waitFor({ state: 'visible', timeout: 18000 });
  await expect(locator).toBeVisible();