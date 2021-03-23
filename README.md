 <p align="center"> <img src="https://camo.githubusercontent.com/047366567218e6f144fb666cf9d0d1c2f34dc5a6e6af816aeead27d9f1e8350f/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d6c61756e6368626173652f6c6f676f2e706e67"></p>

  <h1 align="center">  LaunchStore 2.0 (CADASTRO DE USUÁRIOS)  </h1>

  <p align="center">Projeto desenvolvido durante o bootcamp LaunchBase da <a href="https://www.rocketseat.com.br" target="_blank">Rocketseat</a>. </p>


  

<hr>

## Indice


* [Sobre](#sobre)
* [Funcionalidades Implementadas](#funcio)
* [Tecnologias:](#tecnologias)
* [Dependencias](#dependencias)
* [Como executar o projeto](#comoexec)
* [Como contribuir com o projeto](#comocontribuir)
* [Rodando a aplicação](#runapp)
* [Autor](#autor)

<hr>

## Sobre o Controle de Academia<a name="sobre"></a>

<p align="left"> O LaunchStore é uma aplicação web de Ecommerce, com o intuito de treinar os preceitos de rotas(back-end), do CRUD e banco de dados.  </p>

<hr>

## Funcionalidades Implementadas<a name="funcio"></a>

- ✔️ Criar, visualizar, editar e excluir produtos.

- ✔️ Filtrar produtos e suas categorias.

- ✔️ Paginação (Work in Progress).

- ✔️ Sistema totalmente dinâmico com nunjucks.

- ✔️ Banco de dados PostegreSQL.

<hr>

## Tecnologias<a name="tecnologias"></a>
- <a href="https://www.w3schools.com/html/">HTML</a>
- <a href="https://www.w3schools.com/css/default.asp">CSS</a>
- <a href="https://www.w3schools.com/js/default.asp">JavaScript</a>
- <a href="https://nodejs.org/en/">Node</a>
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://www.postgresql.org/">PostegreSQL</a>

<hr>

 ## Dependencias<a name="dependencias"></a>
- <a href="https://www.npmjs.com/package/express">Express</a>
- <a href="https://www.npmjs.com/package/nunjucks">Nunjucks</a>
- <a href="https://www.npmjs.com/package/nodemon">Nodemon</a>
- <a href="https://www.npmjs.com/package/browser-sync">Browser-Sync</a>
- <a href="https://www.npmjs.com/package/npm-run-all">Npm-run-all</a>
- <a href="https://www.npmjs.com/package/method-override">MethodOverride</a>
- <a href="https://www.npmjs.com/package/multer">Multer</a>



<hr />

## Como executar o projeto<a name="comoexec"></a>
Antes de tudo você vai precisar instalar na sua maquina, os seguintes arquivos:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostegreSQL](https://nodejs.org/en/). 
Além disto um editor de codígo fonte, eu recomendo o uso do  [VSCode](https://code.visualstudio.com/)

#### Rodando a aplicação<a name="runapp"></a>

1. Clone este repositório

	```bash
	git clone https://github.com/FernandoAz09/Launchbase-MODULO06-Launchstore
	```

2. Acesse a pasta do projeto no seu *vscode*

	```bash
	cd Launchbase-MODULO06-Launchstore
	```

3. Instale as dependências

	```bash
	npm i
	```

4. Crie e importe o banco de dados
	```bash
	psql -U postgres -c "CREATE DATABASE launchstoredb"
	psql -U postgres -d launchstoredb launchstoredb.sql

	Você também pode criar e importar manualmente o banco de dados usando o Postbird ou pgAdmin.

	Conexão com o banco de dados: edite o arquivo db.js dentro da pasta src/config com o seu USERNAME e PASSWORD (Postgres).	

	```	
	



5. Execute a aplicação 

	```bash
	npm start
	```



<p align="center">A aplicação será aberta na porta:3000 - acesse http://localhost:3000</p>
<hr>


## Como contribuir para o projeto<a name="comocontribuir"></a>

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

<hr>

## Autor<a name="autor"></a>

:triangular_flag_on_post: By [Fernando Azevedo](https://github.com/FernandoAz09)











