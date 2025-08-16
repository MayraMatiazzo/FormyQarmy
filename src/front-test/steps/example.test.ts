import { Given, When, Then } from '@cucumber/cucumber';
import { pages } from '../hooks/hook'; // objeto page desde hooks
import * as L from '../locators/exampleLocators';
import { expect } from '@playwright/test';

Given('el usuario navega a la pagina de registro', async () => {
  await pages[0].goto('https://automationexercise.com/login');
});

Given('el usuario está en la página de registro', async () => {
  await pages[0].goto('https://automationexercise.com/login');
});

When('el usuario completa el formulario con:', async (dataTable) => {
  const data = dataTable.hashes()[0]; // tomar la primera fila
  await pages[0].fill(L.camponame, data.Name);
  await pages[0].fill(L.campoemail, data.Email);
});


When('el usuario hace clic en {string}', async (button) => {
  if (button === 'Signup') {
    await pages[0].click(L.signup);
  }
});

Then('el usuario debería ver el mensaje {string}', async (message) => {
  const locator = pages[0].locator(`text=${message}`);
  await locator.waitFor({ state: 'visible', timeout: 15000 });
  await expect(locator).toBeVisible();
});




/*import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
  inputLabel,
  buttonSearch,
  divResult
} from '../locators/exampleLocators';
import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getElementByRole
} from '../utils/interactions';

Given("User navigates to MercadoLibre page", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When('User search for cars options', async function () {
  for (const page of pages) {
    await getByPlaceholderAndClickIt(page, inputLabel);
    await getByPlaceholderAndFillIt(page, inputLabel, "auto");
    await page.locator(buttonSearch).click();
  }
});

Then('It should show all the results according to the search', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", divResult)).toBeTruthy();
  }
}); 

*import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getElementByRole
} from '../utils/interactions';


Given('el usuario navega a la pagina de registro', async () => {
  await page.goto('https://automationexercise.com/login');
});

When('el usuario completa el formulario con:', async (dataTable) => {
  const data = dataTable.rowsHash();
  await page.fill(L.camponame, data.Name);
  await page.fill(L.campoemail, data.Email Address);
});

When('el usuario hace clic en {string}', async (button) => {
  if(button === 'Signup') {
    await page.click(L.signup);
  }
});

Then('el usuario debería ver el mensaje {string}', async (message) => {
  if(message === 'Enter Account Information') {
    await expect(page.locator(L.mensaje)).toBeVisible();
});
*/ 