
# Como rodar o frontend (limpo)

## Pré‑requisitos
- Node 18 ou 20 (LTS)
- NPM (ou Yarn)

## Passo a passo
```bash
cd frontend
# remover instalações antigas (opcional)
rm -rf node_modules package-lock.json

# instalar dependências
npm install --legacy-peer-deps

# rodar
npm start
# abre em http://localhost:3000
```

## O que eu ajustei
- Fixei **React 18.3.1** e **ReactDOM 18.3.1** (compatível com `react-day-picker@8`).
- Troquei **date-fns** para `^3` (compatível com `react-day-picker@8`).
- Padronizei **ESLint 8.57** + `eslint-config-react-app@7` e apliquei `overrides`.
- Mantive **CRACO + CRA** com scripts (`start`, `build`, `test`).
- Adicionei `.env` com `DISABLE_ESLINT_PLUGIN=true` para evitar falhas de lint no dev.
