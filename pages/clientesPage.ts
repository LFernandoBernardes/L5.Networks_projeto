import { Page, expect } from '@playwright/test';
import L5Page from '../pages/headersPage';

export class ClientesPage {
  readonly page: Page;
  readonly nossosClientesLink: Locator;
  readonly setoresText: { [key: string]: Locator };
  readonly vejaLink: Locator;
  readonly entendaLink: Locator;


  constructor(page: Page) {
    this.page = page;
    this.nossosClientesLink = page.getByRole('link', { name: 'NOSSOS CLIENTES', exact: true });
    this.setoresText = {
      varejo: page.getByText('Varejo / Comércio Case da'),
      industria: page.getByText('Indústria Case e Depoimento'),
      educacao: page.getByText('Educação Depoimento do CNA,'),
      saude: page.getByText('Saúde Case do Dr. Consulta.'),
      financeiros: page.getByText('Serviços Financeiros Confira'),
      outros: page.getByText('Outros Setores Além dos'),
    };
    this.vejaLink = page.locator('#hs_cos_wrapper_module_1680097126022').getByRole('link', { name: 'VEJA' });
    this.entendaLink = page.getByRole('link', { name: 'ENTENDA' });

  }

  async visitHomePage() {
    await this.page.goto('https://www.l5.com.br/');
  }

  async openClientesSection() {
    await this.nossosClientesLink.click();
  }

  async verifySetoresVisibility() {
    for (const key in this.setoresText) {
      await expect(this.setoresText[key]).toBeVisible();
    }
  }

  async clickVarejoLink() {
    await this.vejaLink.click();
    await expect(this.page).toHaveURL('https://www.l5.com.br/vertical-varejo');

  }

  async clickIndustriaLink() {
    await this.entendaLink.click();
    await expect(this.page).toHaveURL('https://www.l5.com.br/vertical-industria');
  }


}
