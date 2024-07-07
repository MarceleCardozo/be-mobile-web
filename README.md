# Be Mobile
Este projeto é uma aplicação front-end desenvolvida com React que exibe uma tabela responsiva de funcionários, utilizando dados de uma API simulada com json-server. A aplicação permite a expansão das linhas da tabela para exibir mais informações (em visualização mobile) e inclui uma barra de busca para filtrar funcionários por nome, cargo ou número de telefone. 

## Sobre o Projeto
Este projeto consiste em uma aplicação React que apresenta uma tabela responsiva de funcionários. Os dados dos funcionários são obtidos a partir de uma API simulada utilizando json-server.

A tabela possui as seguintes colunas: imagem (thumb do usuário), nome, cargo, data de admissão e telefone. Para melhorar a experiência do usuário, a aplicação inclui uma barra de busca que permite filtrar os dados da tabela por nome, cargo ou número de telefone.

Uma característica importante deste projeto é a capacidade de expandir as linhas da tabela para exibir mais informações, funcionalidade que está disponível apenas na visualização mobile. Isso garante que a aplicação seja eficiente e fácil de usar em dispositivos móveis, mantendo a interface limpa e organizada em telas maiores.

## Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
- Git
- Node.js
- npm (ou Yarn, se preferir)

## Passos para Configuração da API Simulada:
1 - Instale o json-server:
Caso ainda não tenha o json-server instalado globalmente, você pode instalá-lo usando npm:
- npm install -g json-server

2 - Clone o repositório da API simulada:
Clone o repositório do GitHub que contém a API simulada para seu diretório local:
- git clone https://github.com/BeMobile/desafio-front-end

3 - Inicie o json-server:
Navegue até o diretório do projeto clonado e execute o seguinte comando para iniciar o json-server e consumir a API simulada:
- cd desafio-front-end
- json-server --watch db.json

4 - Deixe este comando rodando no terminal para que os dados estejam disponíveis para sua aplicação.


## Passos para Configuração e Execução da Aplicação Front-End:
1 - Clone este repositório do projeto front-end:
- git clone https://github.com/MarceleCardozo/be-mobile-web.git

2 - Navegue até o diretório do projeto:
- cd be-mobile-web

3 - Instale as dependências necessárias:
- npm install

4 - Execute a aplicação:
- npm run dev

5 - Acesse a aplicação:
A aplicação estará disponível em http://localhost:5173.

## Funcionalidades
Expansão de Linhas na Tabela: Clique no ícone para expandir uma linha da tabela e exibir mais informações.
Barra de Busca: Pesquise funcionários por nome, cargo ou número de telefone.

## Estrutura do Projeto
- src/assets: Imagens do projeto.
- src/components: Componentes React reutilizáveis.
- src/hooks: Hooks personalizados.
- src/pages: Páginas da aplicação.
- src/theme: Arquivos de estilização utilizando o theme do styled-components.
- src/types: Arquivos de tipagens.
- src/utils: Utils da aplicação.
- src/App.tsx: Componente principal da aplicação.
  
## Tecnologias Utilizadas
React
styled-components

