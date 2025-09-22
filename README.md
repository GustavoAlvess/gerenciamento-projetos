# gerenciamento-projetos

Avaliação de back-end

## Sobre o Projeto

Este repositório contém uma API para gerenciamento de projetos, desenvolvida como parte de uma atividade avaliativa de back-end. O sistema permite cadastrar, listar, atualizar e remover projetos, bem como realizar filtros por atributos como nome, status, orçamento e gerente.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **dotenv** (variáveis de ambiente)
- **Nodemon** (desenvolvimento)

## Estrutura do Projeto

```
├── package.json
├── server.js
└── src/
    ├── controllers/
    │   └── projetosController.js
    ├── models/
    │   └── dados.js
    └── routes/
        └── projetosRoutes.js
```

## Funcionalidades

- **Listar projetos:** GET `/projetos`
  - Permite filtrar por nome, status, gerente, orçamento e prazo via query string.
- **Buscar projeto por ID:** GET `/projetos/:id`
- **Cadastrar novo projeto:** POST `/projetos`
  - Campos obrigatórios: nome, gerente, prazo
- **Remover projeto:** DELETE `/projetos/:id`
- **Atualizar projeto:** PUT `/projetos/:id` (implementação esperada)
- **Rota principal:** GET `/` (verificação do funcionamento do servidor)

## Exemplos de Projetos

O arquivo `src/models/dados.js` contém dados simulados de projetos como:

- Sistema de caixa para restaurante
- App de Delivery
- Website institucional focado em SEO
- Sistema de Gestão de Estoque
- Módulo de Relatórios financeiros
- Integração com iFood
- Sistema de Fidelidade para clientes

Cada projeto possui atributos como nome, descrição, data de início, prazo, status, orçamento e gerente.

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env` para definir a porta do servidor (opcional):
   ```
   PORT=3001
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3001` para verificar se o servidor está rodando.

## Rotas da API

- `GET /projetos` — Lista todos os projetos (com filtros)
- `GET /projetos/:id` — Busca projeto pelo ID
- `POST /projetos` — Cadastra novo projeto
- `DELETE /projetos/:id` — Remove projeto pelo ID
- `PUT /projetos/:id` — Atualiza projeto pelo ID (implementar)

## Autor

- Gustavo Alves ([GitHub](https://github.com/GustavoAlvess))

---

> Para mais detalhes, consulte o código fonte do projeto: [GustavoAlvess/gerenciamento-projetos](https://github.com/GustavoAlvess/gerenciamento-projetos)

**Obs.:** Resultados podem estar incompletos devido à limitação da busca. Veja mais arquivos e detalhes diretamente pelo [GitHub Code Search](https://github.com/GustavoAlvess/gerenciamento-projetos/search).
