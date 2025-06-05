# Desafio Técnico Coco Bambu - Automação de Testes

Este projeto demonstra a automação de testes E2E (End-to-End) e de API para a aplicação Coco Bambu (ambiente de homologação), utilizando Cypress como parte da avaliação técnica para a posição de QA Engineer.

**URL da Aplicação em Teste:** `https://app-hom.cocobambu.com/delivery`

## Requisitos e Ferramentas

*   **Node.js:** Versão 16 ou superior.
*   **NPM (ou Yarn):** Gerenciador de pacotes para instalar as dependências do projeto.
*   **Cypress:** Framework de automação principal.

## Como Configurar o Ambiente

1.  Certifique-se de ter o **Node.js** instalado em sua máquina (versão 16+ recomendada).
2.  Clone este repositório (se ainda não o fez).
3.  Navegue até o diretório raiz do projeto pelo terminal.
4.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
    (ou `yarn install` se estiver usando Yarn)

## Como Executar os Testes Automatizados

Você pode executar os testes de duas formas principais:

1.  **Modo Interativo (Cypress Test Runner):**
    Ideal para desenvolvimento, visualização passo a passo e depuração.
    ```bash
    npx cypress open
    ```
    *   **O que faz:** Abre a interface gráfica do Cypress Test Runner.
    *   **Como usar:** Na interface, você poderá ver todos os seus arquivos de teste (`.cy.js`). Selecione o navegador desejado e clique no arquivo de teste específico que deseja executar.

2.  **Modo Headless (Linha de Comando):**
    Recomendado para execução completa da suíte de testes, integração contínua (CI/CD) e geração de relatórios.
    ```bash
    npx cypress run
    ```
    *   **O que faz:** Executa todos os testes encontrados em segundo plano (sem interface gráfica), exibindo os resultados no console. Se configurado, pode gerar relatórios (ex: Mochawesome).

## Documentação Técnica: Testes Realizados

Os testes estão organizados na pasta `cypress/e2e/`.

### `ErroCompraPix.cy.js`

*   **Objetivo:** Validar o comportamento do sistema ao tentar finalizar uma compra utilizando PIX, verificando que este método de pagamento está indisponível.
*   **Fluxo Principal:** Login -> Seleção de produto -> Tentativa de pagamento com PIX -> Verificação de mensagem de erro.

### `ErroPromoção.cy.js`

*   **Objetivo:** Testar a aplicação ao selecionar uma promoção específica que pode apresentar um erro de carregamento ou indisponibilidade.
*   **Fluxo Principal:** Login -> Seleção de item promocional -> Verificação de indicador de erro.

### `InserirEndereçoeComprar.cy.js`

*   **Objetivo:** Simular o fluxo completo de um usuário que busca por CEP antes de logar, demonstrando que o sistema não salva as informações inciais do pedido e por fim, valida mensagem de erro após inserção de CVV expirado do cartão de crédito 
*   **Fluxo Principal:** Inserir CEP -> Selecionar produto -> Realizar Login (com código de verificação) -> Re-selecionar produto (devido a bug de persistência de carrinho pré-login) -> Seleção da Opção Crédito -> Inserção de CVV expirada -> Mensagem de Cartão Expirado. 

### `HorarioAtendimento.cy.js`

*   **Objetivo:** Testar se o sistema bloqueia corretamente as compras quando o usuário tenta acessar o aplicativo fora do horário de funcionamento da loja.
*   **Fluxo Principal**: Acessar o sistema -> Realizar login com e-mail existente -> Aguardar carregamento do sistema (12s) -> Validar se a loja está fechada -> Exibição da mensagem "Loja Fechada"

### Teste de API

*   **`apiCarrinho.cy.js` (e `spec.cy.js` - *recomenda-se consolidar*)**
    *   **Objetivo:** Testar a API `dummyjson.com/carts` para as operações básicas de um carrinho de compras.
    *   **Endpoints e Métodos Testados:**
        *   `POST /carts/add`: Adicionar um novo carrinho.
        *   `PUT /carts/:id`: Atualizar um carrinho existente.
        *   `DELETE /carts/:id`: Remover um carrinho.

## Outras Ferramentas e Tecnologias

*   **Linguagem:** JavaScript (executado com Node.js)
*   **Framework de Teste:** Cypress
*   **Estrutura de Testes e Asserções:** Mocha & Chai (embutidos no Cypress)
*   **(Opcional/Pode ser adicionado) Gerador de Relatórios:** Mochawesome (ou outro reporter Cypress)

---

**Leandro Jones Carvalho dos Santos**
**04/2025**