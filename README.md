# Vet Center — POC Site

Site multi-página da **Vet Center** (Pet Shop e Clínica Veterinária) em Presidente Epitácio.

Stack: **React + Vite + TypeScript + Tailwind CSS + Framer Motion + React Router**

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em [http://localhost:5400](http://localhost:5400)

## Build

```bash
npm run build
npm run preview
```

## Deploy na Vercel (gratuito)

1. Faça push do repositório para GitHub
2. Importe o projeto na [Vercel](https://vercel.com)
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`

O arquivo `vercel.json` já configura rewrites para o React Router (SPA).

## Estrutura

- `/` — Home imersiva com ambientes e diagnóstico integrado
- `/servicos/clinica` — Consultas e prevenção
- `/servicos/exames` — Raio-X, ultrassom, exames de sangue
- `/servicos/cirurgias` — Centro cirúrgico
- `/servicos/banho-e-tosa` — Estética e bem-estar
- `/servicos/pet-shop` — Produtos
- `/equipe` — Dr. Danilo Amaral e equipe
- `/estrutura` — Tour da clínica
- `/contato` — Mapa, telefone, WhatsApp

## Assets

Fotos reais em `public/images/`:

- `team/` — equipe (recepção e fachada)
- `clinica/` — consulta veterinária
- `exames/` — raio-X digital
