import { Page, expect } from '@playwright/test';
import L5Page from '../pages/headersPage';

export class HomePage {
  constructor(private readonly page: Page) {}

  async visitHomePage() {
    await this.page.goto('https://www.l5.com.br/');
  }

  async clickSaibaMaisCallbox() {
    await this.page.locator('#hs_cos_wrapper_module_16780421031472').getByRole('link', { name: 'Saiba mais' }).click();
    await expect(this.page).toHaveTitle('Callbox, a plataforma de atendimento da L5 Networks');
    //await expect(this.page.getByRole('img', { name: 'Callbox pabx ip' })).toBeVisible();
  }

  async clickSaibaMaisQualitime() {
    await this.page.locator('#hs_cos_wrapper_module_16780433420627').getByRole('link', { name: 'Saiba mais' }).click();
    await expect(this.page).toHaveTitle('Qualitime - Solução para Produtividade e gerenciamento de equipes ');
    await expect(this.page.getByText('Precisamos de mais pessoas na')).toBeVisible();
  }

  async clickSaibaMaisMicrosoftTeams() {
    await this.page.locator('#hs_cos_wrapper_module_16780354269933').getByRole('link', { name: 'Saiba mais' }).click();
  //  await this.page.getByRole([href='https://www.l5.com.br/integracao-microsoft-teams?hsLang=pt-br']).click();
    await expect(this.page).toHaveURL('https://www.l5.com.br/integracao-microsoft-teams');
  }

  async clickSaibaMaisGoogleWorkspace() {
    await this.page.locator('#hs_cos_wrapper_module_16780361902793').getByRole('link', { name: 'Saiba mais' }).click();
    await expect(this.page).toHaveURL('https://www.l5.com.br/integracao-google-workspace');
    await expect(this.page.getByText('Google Workspace + telefonia')).toBeVisible();
  }

  async clickConhecaNossosClientes() {
    await this.page.getByRole('link', { name: 'Conheça nossos clientes' }).click();
  }

  async clickEntreEmContato() {
    await this.page.getByRole('link', { name: 'Entre em contato agora' }).click();
    await expect(this.page).toHaveTitle('Contato L5 Networks | Cloud PBX, CRM & Gestão de TI.');
    await expect(this.page.getByText('Descubra como a L5 pode')).toBeVisible();
  }

  async navigateBackToHome() {
    await this.page.locator('#hs_cos_wrapper_Navbar_with_Menu').getByRole('link', { name: 'HOME', exact: true }).click();
  }

}
