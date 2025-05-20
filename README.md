# 🚗 Ford Official Website

Bem-vindo ao repositório do **Site Oficial da Ford** – uma aplicação web moderna e responsiva, construída com Angular, que entrega uma experiência imersiva ao usuário com a marca Ford, seus veículos e serviços.

---

## 📌 Sobre o Projeto

Este site tem como objetivos:

- Apresentar os modelos da Ford com design atrativo e interatividade.
- Permitir agendamentos de test drives.
- Oferecer simulação de financiamento.
- Integrar localização de concessionárias.
- Disponibilizar uma área do cliente com autenticação.

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
