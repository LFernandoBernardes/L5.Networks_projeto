import { test } from '@playwright/test';
import L5Page from '../pages/headersPage';
import { ClientesPage } from '../pages/clientesPage';

test.beforeEach(async ({ page }) => {
  const SoluçõesPage = new L5Page(page);
  await SoluçõesPage.visitHomePage();
  await SoluçõesPage.verifyHomePageTitle();
});



test.describe('Testes da página de Clientes', () => {
  test('Check todos os Setores', async ({ page }) => {
    const clientesPage = new ClientesPage(page);
    await clientesPage.visitHomePage();
    await clientesPage.openClientesSection();
    await clientesPage.verifySetoresVisibility();
  });

  test('Link Varejo', async ({ page }) => {
    const clientesPage = new ClientesPage(page);
    await clientesPage.openClientesSection();
    await clientesPage.clickVarejoLink();

  });

  test('Link Indústria', async ({ page }) => {
    const clientesPage = new ClientesPage(page);
    await clientesPage.openClientesSection();
    await clientesPage.clickIndustriaLink();
  });

});
