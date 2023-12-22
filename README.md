# PayUnionPro

PayUnionPro is a comprehensive payment management system tailored for unions. This application facilitates seamless union dues collection, processing, and tracking, ensuring a secure and efficient payment experience for both union members and administrators. Simplify your union's financial operations with PayUnionPro.

# PreRequest

before start with PayUnionPro you need some requirement

- Node.js and npm installed on your machine.
- Git installed on your machine.

# Getting started

1. To get a local copy up and running, follow these simple steps.

```bash
git clone https://github.com/faissal17/payment-management-system.git
```

2. navigate the project

```bash
cd payment-management-system
```

3.  Install dependencies using npm

```bash
npm install
```

# Configration

You may need to configure some environment variables.

1.Extract the .env file from the .env.example file

```bash
cp .env.example .env
```

i already mentioned in env.example that you will need to add a secret key you can write whatever you want but in case youb wanted more seccure you can run the following command in oyur terminal

```bash
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"

```

run the following command and get generated secret key

you will also need some requirement in your .env file


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
