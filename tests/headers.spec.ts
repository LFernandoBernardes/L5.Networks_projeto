import { test } from '@playwright/test';
import L5Page from '../pages/headersPage';

test.beforeEach(async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.visitHomePage();
  await Headers.verifyHomePageTitle();
});

// Soluções
test('Soluções Abrir e Mostrar Menu', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.openSolutionsMenu();
  await Headers.verifySolutionsCategories();
});

test('Callbox - Open from Headers', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.openSolutionsMenu();
  await Headers.openCallbox();
});

test('Qualitime - Open from Headers ', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.openSolutionsMenu();
  await Headers.openQualitime();
});

test('TI + Simples - Open from Headers ', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.openSolutionsMenu();
  await Headers.openTISimplified();
});

// Nossos Clientes
test('Nossos Clientes - Open from Headers ', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.openNossosClientes();
});

// Conteúdos
test('Conteúdos Abrir e Mostra menu', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.verifyConteudoCategories();
})

test('Blog Open from headers', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.openBloglink();
})

test('Ebook Open from headers', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.openEbooklink();
})

// Contatos
test('Contatos Abrir e Mostra menu', async ({ page }) => {
  const Headers = new L5Page(page);
  await Headers.verifyContatoCategories();
})
