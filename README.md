API do Portfólio Pessoal
🚀 Sobre o Projeto
Esta API é o backend responsável por servir os dados para a aplicação Meu Portfólio Pessoal. Ela foi construída para ser uma fonte de dados centralizada, permitindo que o conteúdo dos projetos exibidos no portfólio seja gerenciado de forma dinâmica e desacoplada do frontend.

A aplicação segue os princípios da arquitetura RESTful, fornecendo endpoints claros e previsíveis para a consulta de projetos.

🛠️ Tecnologias Utilizadas
Runtime: Node.js

Framework: Express.js

ORM (Object-Relational Mapping): Prisma

Banco de Dados: PostgreSQL

Validação de Dados: [Ex: Zod, Joi - se você usar]

Linguagem: [JavaScript ou TypeScript]

✨ Endpoints da API
A seguir estão os endpoints públicos disponíveis nesta API.

URL Base: [URL_DA_SUA_API_EM_PRODUCAO_AQUI]

Projetos (/projects)
GET /projects
Retorna uma lista de todos os projetos cadastrados.

Método: GET

Endpoint: /projects

Resposta de Sucesso (200 OK):

JSON

[
  {
    "id": 1,
    "title": "Nome do Projeto 1",
    "shortDesc": "Uma breve descrição do que o projeto faz.",
    "imageUrl": "https://example.com/imagem.png",
    "liveUrl": "https://projeto-online.com",
    "githubUrl": "https://github.com/usuario/projeto",
    "challenge": "O desafio principal enfrentado durante o desenvolvimento.",
    "architecture": "Uma explicação da arquitetura e das soluções técnicas adotadas.",
    "technologies": ["React", "Next.js", "TypeScript", "MUI"],
    "createdAt": "2024-08-26T23:00:00.000Z",
    "updatedAt": "2024-08-27T14:30:00.000Z"
  },
  {
    "id": 2,
    "title": "Nome do Projeto 2",
    "shortDesc": "Outra breve descrição.",
    "imageUrl": null,
    "liveUrl": null,
    "githubUrl": "https://github.com/usuario/outro-projeto",
    "challenge": "O desafio deste segundo projeto.",
    "architecture": "A solução implementada para o segundo projeto.",
    "technologies": ["Node.js", "Prisma", "PostgreSQL"],
    "createdAt": "2024-07-15T10:00:00.000Z",
    "updatedAt": "2024-07-15T10:00:00.000Z"
  }
]
GET /projects/:id
Retorna um projeto específico com base no seu id.

Método: GET

Endpoint: /projects/:id

Parâmetros:

id (integer, obrigatório): O ID do projeto a ser recuperado.

Resposta de Sucesso (200 OK):

JSON

{
  "id": 1,
  "title": "Nome do Projeto 1",
  "shortDesc": "Uma breve descrição do que o projeto faz.",
  "imageUrl": "https://example.com/imagem.png",
  "liveUrl": "https://projeto-online.com",
  "githubUrl": "https://github.com/usuario/projeto",
  "challenge": "O desafio principal enfrentado durante o desenvolvimento.",
  "architecture": "Uma explicação da arquitetura e das soluções técnicas adotadas.",
  "technologies": ["React", "Next.js", "TypeScript", "MUI"],
  "createdAt": "2024-08-26T23:00:00.000Z",
  "updatedAt": "2024-08-27T14:30:00.000Z"
}
Resposta de Erro (404 Not Found):
Retornado se um projeto com o id especificado não for encontrado.

JSON

{
  "error": "Project not found"
}
⚙️ Configuração e Execução Local
Siga os passos abaixo para configurar e rodar a API em sua máquina.

Pré-requisitos
Node.js (versão 18 ou superior)

PostgreSQL rodando localmente ou em um container Docker.

Git

Instalação
Clone o repositório:

Bash

git clone https://github.com/[SEU_USUARIO_GIT]/[NOME_DO_REPOSITORIO_API].git
Acesse a pasta do projeto:

Bash

cd [NOME_DO_REPOSITORIO_API]
Instale as dependências:

Bash

npm install
Configure as Variáveis de Ambiente:
Crie um arquivo .env na raiz do projeto, baseado no arquivo .env.example. A principal variável a ser configurada é a DATABASE_URL.

Snippet de código

# .env
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO?schema=public"
Aplique as migrações do banco de dados:
Este comando irá ler o schema.prisma e criar as tabelas no seu banco de dados.

Bash

npx prisma migrate dev
(Opcional) Popule o banco de dados:
Para ter dados iniciais para teste, você pode usar o seed do Prisma.

Bash

npx prisma db seed
Execução
Para desenvolvimento (com hot-reload):

Bash

npm run dev
Para produção:

Bash

npm run build
npm start
A API estará disponível em http://localhost:3001 (ou na porta que você definir).

📄 Licença
Este projeto está sob a licença MIT.
