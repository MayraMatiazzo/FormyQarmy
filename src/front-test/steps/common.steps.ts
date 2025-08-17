import { Given } from '@cucumber/cucumber';
import { pages } from '../hooks/hook';

Given('el usuario se encuentra en la pagina de login y registro', async () => {
  await pages[0].goto('https://automationexercise.com/login');
  await pages[0].waitForLoadState('domcontentloaded');
});

Given('el usuario se encuentra en la pagina de signup', async () => {
  await pages[0].goto('https://automationexercise.com/signup');
  await pages[0].waitForLoadState('domcontentloaded');
  await pages[0].waitForLoadState('networkidle');
  await pages[0].waitForTimeout(2000);           
});


