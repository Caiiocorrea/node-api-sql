🚧 Node.js API 🚀 Melhorando cada dia 🚧

Recursos disponíveis para acesso via API:

- <a href="#pedidos-pedidos">Todos os Pedidos</a>
- <a href="#get-pedido">Pedido</a>
- <a href="#add-pedido/">Adicionar</a>
- <a href="#update-pedido">Atualizar</a>
- <a href="#delete-pedido/">Excluir</a>

💻 Sobre o projeto
♻️ NodeJS e API

- Dados no SQL Server

![image](https://user-images.githubusercontent.com/49397996/113792678-deeec300-971c-11eb-99ea-0232acaf8440.png)

- Dados através da API utilizando o Postman

![image](https://user-images.githubusercontent.com/49397996/113792795-22e1c800-971d-11eb-9298-629983852ef2.png)

- API em funcionamento através do navegador na porta 8080

![image](https://user-images.githubusercontent.com/49397996/113792931-7a803380-971d-11eb-8473-02a7b3b08e89.png)

Métodos

<p>Requisições para a API devem seguir os padrões:</p>

<table>
<thead>
<tr>
<th>Método</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>GET</code></td>
<td>Retorna informações de um ou mais registros.</td>
</tr>
<tr>
<td><code>POST</code></td>
<td>Utilizado para criar um novo registro.</td>
</tr>
<tr>
<td><code>PUT</code></td>
<td>Atualiza dados de um registro ou altera sua situação.</td>
</tr>
<tr>
<td><code>DELETE</code></td>
<td>Remove um registro do sistema.</td>
</tr>
</tbody>
</table>


Respostas

Código	Descrição
200	Requisição executada com sucesso (success).
400	Erros de validação ou os campos informados não existem no sistema.
401	Dados de acesso inválidos.
404	Registro pesquisado não encontrado (Not found).
405	Método não implementado.
410	Registro pesquisado foi apagado do sistema e não esta mais disponível.
422	Dados informados estão fora do escopo definido para o campo.
429	Número máximo de requisições atingido. (aguarde alguns segundos e tente novamente)


🚀 Como executar o projeto

Podemos considerar este projeto como sendo com uma parte:

Back end

Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js. Além disto é bom ter um editor para trabalhar com o código como VSCode

🧭 Rodando a API (Back end)
# Clone este repositório
$ git clone https://github.com/Caiiocorrea/node-api-sql

# Acesse a pasta do projeto no seu terminal/cmd
$ cd backend

# Instale as dependências
$ npm install | yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm start | yarn start

# A aplicação será aberta na porta:8080 - acesse http://localhost:8080/api/v1/pedidos


Feito com ❤️ por Caio S. Corrêa 👋🏽 Entre em contato!

Fonte - <a href="https://rocketseat.com.br/">Rocketseat - Starter</a>
