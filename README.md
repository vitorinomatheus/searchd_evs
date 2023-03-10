# SearchD_evs

Este projeto visa implementar um sistema que busque e apresente o perfil de desenvolvedores, utilizando a API pública do GitHub. A aplicação é feita com o framework Angular, utilizando o Angular Material como biblioteca de UI.

## Instalação

Para rodar a aplicação em seu sistema, recomenda-se a instalação da versão 18.13.0 do node. Siga as instruções em https://nodejs.org/en/download/

Após ter instalado a versão correta do node, incluindo o gerenciador de pacotes npm, será necessário fazer o download do framework Angular, com todas as suas dependências.

* Angular CLI: abra seu terminal e rode o seguinte comando.

```bash
npm install -g @angular/cli
```
Qualquer problema com a instalação, consulte o guia oficial em https://angular.io/guide/setup-local

* Angular Material: para instalar a biblioteca de UI, utilize s instalação própria do Angular CLI

```bash
ng add @angular/material
```

* Ngx-Pipes: Em último lugar, instale o ngx-pipes através do comando

```bash
npm install ngx-pipes
```
## Rodar em ambiente de desenvolvimento

Para rodar o projeto em um servidor de desenvolvimento, execute o comando ``ng serve`` ou ``npm start``. Em seu navegador, vá para a ``http://localhost:4200/``. Toda mudança no código-fonte irá desencadear uma atualização da aplicação.

## Rodar build de deploy

É possível rodar a build de produção da aplicação de duas maneiras:

* Remotamente em: https://searchdevs.netlify.app/

* Localmente através do pacote http-server:

Primeiramente, compile a aplicação para produção através do comando ``ng-build``.

Para roda-la em sua máquina, instale o pacote ``http-server``. Execute em seu terminal o comando

```bash
npm install http-server -g
```
Quando o pacote estiver instalado, navegue até 
```bash
searchd_evs\dist\searchd_evs
```
e execute o comando ``http-server``. O terminal irá informar as rotas nas quais a aplicação estará disponível.

## Estrutura e comentários

### Dependências
Busquei manter as dependências ao mínimo necessário, mantendo controle mais detalhado da construção de UI e utilizando técnicas próprias ao Angular para desenvolver as soluções. Em primeiro momento, dado o curto prazo de entrega, escolhi abrir mão da responsividade para dedicar-me mais aos comportamentos e ao código. No entanto, numa revisão futura, pretendo otimizar o layout para mobile e telas maiores.

* Angular Material

Foi escolhido pela praticidade e pela compatibilidade com o layout proposto no Figma.

### Estrutura
A arquitetura da aplicação é primordialmente dividida entre componentes e views.
* Views

As views são as páginas completas apresentadas ao usuário. Elas são responsáveis pela comunicação entre componentes e também pela navegação entre telas.

* Componentes

Cada um dos componentes é responsável por uma atividade, seja ela a pesquisa ou a apresentação de dados. Em geral, estão estruturados para se comunicar com as views.

* Services

A aplicação dispõe de duas services: a githubService é responsável pela comunicação com a API de onde vem os dados dos usuários e dos repositórios. A storeUsuarioService, por sua vez, cumpre o papel de fornecer para os componentes e para as views os dados do usuário recuperado.