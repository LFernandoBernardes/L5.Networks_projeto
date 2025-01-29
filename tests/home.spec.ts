import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('L5 Website Tests', () => {
  let Homepage: HomePage;

  test.beforeEach(async ({ page }) => {
    Homepage = new HomePage(page);
    await Homepage.visitHomePage();
  });

  test('Clicar Callbox botão Saiba mais', async () => {
    await Homepage.clickSaibaMaisCallbox();
    await Homepage.navigateBackToHome();
  });

  test('Clicar Qualitime botão Saiba mais', async () => {
    await Homepage.clickSaibaMaisQualitime();
    await Homepage.navigateBackToHome();
  });

  test('Clicar Microsoft Teams botão Saiba mais', async () => {
    await Homepage.clickSaibaMaisMicrosoftTeams(); 
  })

  test('Clicar Google WorkSpace botão Saiba mais', async () => {
    await Homepage.clickSaibaMaisGoogleWorkspace();
    await Homepage.navigateBackToHome();
  });

  test('Clicar Conheça Nossos Clientes botão', async () => {
    await Homepage.clickConhecaNossosClientes();
    await Homepage.navigateBackToHome();
  });

  test('Clicar Entre em Contato', async () => {
    await Homepage.clickEntreEmContato();
    await Homepage.navigateBackToHome();
  });

});
