# 🚗 Site para administradores

Bem-vindo ao repositório do **Site de administradores da Ford** – uma aplicação web moderna e responsiva, construída com Angular, que entrega uma experiência imersiva ao usuário com a marca Ford, seus veículos e serviços.

---

## 📌 Sobre o Projeto

Este site tem como objetivos:

- Apresentar os modelos de carros da Ford com design atrativo e interatividade.
- Área de Login exclusiva para trabalhadores da ford.
- página exclusiva para checagem rápida sobre os modelos disponíveis nosistema.
- Página exclusiva para comparação entre modelos disponíveis.
- Página exclusiva para fazer alguma reclamação ou relatar bugs contidos no site ou Sugestões de melhorias.

---
📌 Sprint Backlog
A solicitação feita no Product Backlog foi que, a partir dos conhecimentos adquiridos anteriormente e dos sites já desenvolvidos, fosse criado um novo site aplicando todas as boas práticas e os aprendizados em Angular, HTML, CSS e JavaScript. O objetivo era consolidar os conhecimentos por meio da construção de um projeto completo, funcional e responsivo.

📌 Sprint Retrospective
A checagem e a melhoria do código foram realizadas com sucesso. A partir do desafio Angular, foi feita uma remodelagem completa de todas as páginas, tornando-as mais responsivas e visualmente agradáveis, além da implementação de novas funcionalidades e páginas.

Login: o layout do login foi completamente reformulado para oferecer uma melhor experiência visual ao usuário, com foco em estética e usabilidade.

Home: foi implementado um carrossel com imagens que giram automaticamente. Ao passar o mouse sobre uma imagem, ela aumenta de tamanho; ao clicar, o usuário é redirecionado para o dashboard, onde é possível selecionar um carro e visualizar suas informações. Também foi adicionado um footer com informações de contato e direitos autorais.

Dashboard: foram realizadas melhorias visuais, com foco em tornar a página mais bonita e chamativa.

Página de Comparação: foi criada uma nova página que permite a seleção de dois veículos, exibindo lado a lado suas informações para facilitar a comparação pelo usuário.

Página de Contato: essa página foi criada para que, caso o usuário encontre algum problema, possa enviar uma mensagem relatando o erro. Além disso, também permite o envio de sugestões de melhorias ou reclamações sobre a experiência no site.
---

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - Angular 19+
  - HTML5 + SCSS
  - TypeScript
  - Angular Animations
 

- **Backend:**
    - Caminho:  cd/ src ---> cd/api

- **Outros:**
  - Vercel para deploy

---

## 📂 Estrutura de Pastas

```bash
ford-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │       ├── carousel
│   │   │       │      ├── carousel.component.css
│   │   │       │      ├── carousel.component.html
│   │   │       │      ├── carousel.component.spec.ts
│   │   │       │      └── carousel.component.ts
│   │   │       │ 
│   │   │       ├── comparador-carros
│   │   │       │      ├── comparador-carros.component.css
│   │   │       │      ├── comparador-carros.component.html
│   │   │       │      ├── comparador-carros.component.spec.ts
│   │   │       │      └── comparador-carros.component.ts
│   │   │       ├── contato
│   │   │       │      ├── contato.component.css
│   │   │       │      ├── contato.component.html
│   │   │       │      ├── contato.component.spec.ts
│   │   │       │      └── contato.component.ts
│   │   │       ├── dashboard
│   │   │       │      ├── dashboard.component.css
│   │   │       │      ├── dashboard.component.html
│   │   │       │      ├── dashboard.component.spec.ts
│   │   │       │      └── dashboard.component.ts
│   │   │       ├── footer
│   │   │       │      ├── footer.component.css
│   │   │       │      ├── footer.component.html
│   │   │       │      ├── footer.component.spec.ts
│   │   │       │      └── footer.component.ts
│   │   │       ├── header
│   │   │       │      ├── header.component.css
│   │   │       │      ├── header.component.html
│   │   │       │      ├── header.component.spec.ts
│   │   │       │      └── header.component.ts
│   │   │       ├── home
│   │   │       │      ├── home.component.css
│   │   │       │      ├── home.component.html
│   │   │       │      ├── home.component.spec.ts
│   │   │       │      └── home.component.ts
│   │   │       ├── login
│   │   │       │      ├── login.component.css
│   │   │       │      ├── login.component.html
│   │   │       │      ├── login.component.spec.ts
│   │   │       │      └── login.component.ts
│   │   │       └──  servico-back
│   │   │                └── servico-back.service.ts
│   │   ├── services/
│   │   ├── models/
│   │   │    ├── carousel.ts
│   │   │    ├── comparador.ts
│   │   │    ├── usuario.model.ts
│   │   │    └── veiculo.model.ts
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   └── index.html
├── angular.json
├── package.json
├── README.md
