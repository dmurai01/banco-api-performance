
# Testes de Performance - banco-api-performance

Este repositório contém os testes de performance desenvolvidos com [k6](https://k6.io/) para a API do projeto **banco-api**. Os testes são escritos em JavaScript e têm como objetivo validar o desempenho e a escalabilidade dos principais fluxos da aplicação.

## 📌 Introdução

Este projeto tem como foco a simulação de carga na API da aplicação, possibilitando o acompanhamento de métricas como tempo de resposta, throughput, taxas de erro, entre outras.  

## 🚀 Tecnologias utilizadas

- [k6](https://k6.io/docs/)
- JavaScript ES6+
- [GJSON] Para extração de dados em respostas JSON.
- Variáveis de ambiente para configuração dinâmica

## 📁 Estrutura do Repositório

```
📦banco-api-performance
 ┣ 📂fixtures
 ┃ ┗ 📜postLogin.json
 ┣ 📂helpers
 ┃ ┗ 📜autenticacao.js
 ┣ 📂tests
 ┃ ┣ 📜login.test.js
 ┃ ┗ 📜transferencias.test.js
 ┣ 📂utils
 ┃ ┗ 📜variaveis.js
 ┣ 📜.gitignore
 ┣ 📜html-report.html
 ┗ 📜README.md
```

## 🎯 Objetivo de cada grupo de arquivos

- `fixtures/`: Contém dados estáticos ou mocks utilizados durante a execução dos testes, como payloads de login.
- `helpers/`: Funções auxiliares reutilizáveis, como lógica de autenticação (ex: geração de token).
- `tests/`: Scripts principais de teste de performance. Cada arquivo representa um fluxo da aplicação a ser testado.
- `utils/`: Configurações e variáveis globais, como a definição de usuários, senhas e outros parâmetros reutilizáveis.
- `html-report.html`: Relatório exportado em HTML contendo o resumo dos testes executados.

## 🛠️ Instalação

1. Instale o [k6](https://k6.io/docs/getting-started/installation/).
2. Clone este repositório:
   ```bash
   git clone https://github.com/dmurai01/banco-api-performance.git
   cd banco-api-performance
   ```

## ▶️ Execução dos testes

Certifique-se de passar a variável de ambiente `BASE_URL`, cas onão esteja usando um `config.local.json` ou uma abordagem de carregamento automático:

Execute o teste desejado informando a variável `BASE_URL`. Exemplo:

```bash
k6 run tests/login.test.js -e BASE_URL=https://sua-api.com
```

## 📊 Acompanhamento em tempo real e exportação do relatório

Para visualizar o relatório em tempo real no navegador e exportar o relatório final em HTML:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js -e BASE_URL=https://sua-api.com
```

O relatório será salvo como `html-report.html` ao final da execução.
