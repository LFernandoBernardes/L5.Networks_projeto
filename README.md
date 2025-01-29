# L5 Networks Test Project

Este projeto utiliza o **Playwright** com **TypeScript** para automatizar testes no site da [L5 Network](https://l5.com.br). Este é um projeto bem básico com o único objetivo de estudo da ferramenta Playwright com linguagem Typescript.

## Estrutura do Projeto

- `pages/` - Contém os arquivos de Page Object que encapsulam os localizadores e ações reutilizáveis.
  - Define ações específicas do site da L5 Networks.
- `tests/` - Contém os arquivos de teste.Separados por features
  - `clientes.spec.ts` - Executa os testes na página "Nossos Clientes" do site.
  - `headers.spec.tc` - Testes de Navegação dos links do cabeçario do site.
  - `home.spec.ts` - Testes na pagina home, links e botões de navagação dentro da home.
- `playwright.config.ts` - Arquivo de configuração do Playwright para especificar navegadores, diretórios de teste, entre outros.

## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

## Instalação

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO_CLONADO>
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Instale o Playwright e os navegadores necessários:

   ```bash
   npx playwright install
   ```

## Executando os Testes

Use o comando abaixo para rodar todos os testes:

```bash
npx playwright test
```

### Testar com Relatório Interativo

Execute o comando abaixo para gerar um relatório de teste:

```bash
npx playwright show-report
```

### Executar um Teste Específico

Para executar um teste específico, utilize o nome do arquivo do teste:

```bash
npx playwright test tests/headers.spec.ts
```

## Tecnologias Utilizadas

- **Playwright**: Framework de testes end-to-end.
- **TypeScript**: Linguagem utilizada para maior tipagem e robustez no código.

## Referências

- [Documentação do Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Contato

Para dúvidas ou sugestões, entre em contato através do meu perfil do LinkedIn ou abra uma issue neste repositório.
# L5.Networks_projeto
