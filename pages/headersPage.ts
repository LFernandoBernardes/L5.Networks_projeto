import { type Page, type Locator, expect } from '@playwright/test';

class Headers {
  readonly page: Page;
  // Soluções Menu
  readonly solutionsLink: Locator;
  readonly callboxLink: Locator;
  readonly qualitimeLink: Locator;
  readonly tiSimplifiedLink: Locator;
  // CallBox Pagina
  readonly callboxImage: Locator;
  readonly callboxHeading: Locator;
  // Qualitime Pagina
  readonly qualitimeHeading: Locator;
  readonly qualitimeText: Locator;
  // TI + Simples Página
  readonly tiSimplifiedImage: Locator;
  readonly tiSimplifiedText: Locator;
  // Nossos Clientes
  readonly nossosClientesLink: Locator;
  readonly testimonialsHeading: Locator;
  // Conteúdo
  readonly conteudoLink: Locator;
  readonly blogLink: Locator;
  readonly ebookLink: Locator;
  // Contato
  readonly contatoLink: Locator;
  readonly jasouclienteLink: Locator;
  readonly vendasLink: Locator;
  readonly whatsappLink: Locator;
  

  constructor(page: Page) {
    this.page = page;
      // Soluções Menu
    this.solutionsLink = page.getByRole('link', { name: 'SOLUÇÕES' });
    this.callboxLink = page.getByRole('link', { name: 'Callbox Colaboração por voz,' });
    this.qualitimeLink = page.getByRole('link', { name: 'Qualitime Gestão de equipes ' });
    this.tiSimplifiedLink = page.getByRole('link', { name: 'TI + Simples Gestão de TI simplificada' });
      // CallBox Pagina
    this.callboxImage = page.getByRole('img', { name: 'Callbox pabx ip' });
    this.callboxHeading = page.getByRole('heading', { name: 'A plataforma completa de atendimento' });
      // Qualitime Pagina
    this.qualitimeHeading = page.getByText('Home Office, sim ou não?');
    this.qualitimeText = page.locator('#hs_cos_wrapper_module_1678971152457');
      // TI + Simples Página
    this.tiSimplifiedImage = page.getByRole('img', { name: 'logo-tisimples' });
    this.tiSimplifiedText = page.getByText('Cuide do seu negócio');
      // Nossos Clientes
    this.nossosClientesLink = page.getByRole('link', { name: 'NOSSOS CLIENTES', exact: true });
    this.testimonialsHeading = page.getByText('DEPOIMENTOS', { exact: true });
    // Conteúdo 
    this.conteudoLink = page.getByRole('link', { name: 'CONTEÚDO', exact: true });
    this.blogLink = page.getByRole('link', { name: 'BLOG Leia os conteúdos' });
    this.ebookLink = page.getByRole('link', { name: 'Novo eBook Gestão de equipe' })
    // Contato
    this.contatoLink = page.getByRole('link', { name: 'CONTATO', exact: true });
    this.jasouclienteLink = page.getByRole('link', { name: 'JÁ SOU CLIENTE Conte com o' });
    this.vendasLink = page.getByRole('link', { name: 'FALE COM VENDAS Entenda como' });
    this.whatsappLink = page.getByRole('link', { name: 'Envie um WhatsApp' });

  }

  async visitHomePage() {
    await this.page.goto('https://www.l5.com.br/');
  }

  async verifyHomePageTitle() {
    await expect(this.page).toHaveTitle('L5 Networks - soluções em telefonia, CRM e Gestão de TI');
  }

  async openSolutionsMenu() {
    await this.solutionsLink.click();
  }

  async verifySolutionsCategories() {
    await expect(this.callboxLink).toBeVisible();
    await expect(this.qualitimeLink).toBeVisible();
    await expect(this.tiSimplifiedLink).toBeVisible();
  }

  async openCallbox() {
    await this.callboxLink.click();
    await expect(this.page).toHaveTitle('Callbox, a plataforma de atendimento da L5 Networks');
    await expect(this.callboxImage).toBeVisible();
    await expect(this.callboxHeading).toBeVisible();
  }

  async openQualitime() {
    await this.qualitimeLink.click();
    await expect(this.page).toHaveTitle('Qualitime - Solução para Produtividade e gerenciamento de equipes');
    await expect(this.qualitimeHeading).toBeVisible();
    await expect(this.qualitimeText).toContainText(
      'Precisamos de mais pessoas na equipe? Eles produzem de casa? Mantém o foco no trabalho remoto?'
    );
  }

  async openTISimplified() {
    await this.tiSimplifiedLink.click();
    await expect(this.page).toHaveTitle('L5 Networks - soluções em telefonia, CRM e Gestão de TI');
    await expect(this.tiSimplifiedImage).toBeVisible();
    await expect(this.tiSimplifiedText).toBeVisible();
  }

  async openNossosClientes() {
    await this.nossosClientesLink.click();
    await expect(this.testimonialsHeading).toBeVisible();
  }

  async verifyConteudoCategories(){
    await this.conteudoLink.click();
    await expect(this.blogLink).toBeVisible();
    await expect(this.ebookLink).toBeVisible();
  }

  async openBloglink(){
    await this.conteudoLink.click();
    await this.blogLink.click();
    await expect(this.page).toHaveTitle('Blog L5');
    await expect(this.page).toHaveURL('https://www.l5.com.br/blog');
  }

  async openEbooklink() {
    await this.conteudoLink.click();
    await this.ebookLink.click();
    await expect(this.page).toHaveTitle('eBook Gestão de equipe em home office');
    await expect(this.page).toHaveURL('https://materiais.l5.com.br/ebook-gestao-de-equipe-em-home-office');
  }

  async verifyContatoCategories(){
    await this.contatoLink.click()
    await expect(this.jasouclienteLink).toBeVisible();
    await expect(this.vendasLink).toBeVisible();
  }

  async openJasouCliente() {
    await this.contatoLink.click()
    await this.jasouclienteLink.click();
    await expect(this.page).toHaveTitle('L5 | Área do Cliente');
    await expect(this.page).toHaveURL('https://areadocliente.l5.com.br/painel/login');
    await expect(this.page.getByText('Área do Cliente')).toBeVisible();
    await this.page.getByRole('textbox', { name: 'Digite o seu e-mail' }).click();
    await this.page.getByRole('button', { name: 'Solicitar código de acesso' }).click();
  }

  async openVendaLink() {
    await this.contatoLink.click()
    await this.vendasLink.click();
  //  await expect(this.page).toHaveTitle('Contato L5 Networks | Cloud PBX, CRM & Gestão de TI.');
  //  await expect(this.page).toHaveURL('https://www.l5.com.br/vendas');
    await expect(this.page.getByText('Descubra como a L5')).toBeVisible(); 
    await expect(this.whatsappLink).toBeVisible();
  } 


}

export default Headers;
