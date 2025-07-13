# Agents

Uma aplicação web moderna para gerenciamento de salas e interações em tempo real.

## 🚀 Tecnologias

### Frontend

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **TailwindCSS** - Framework CSS utilitário

### Gerenciamento de Estado & Dados

- **TanStack React Query** - Data fetching e cache
- **React Router DOM** - Roteamento client-side

### UI/UX

- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones SVG
- **Class Variance Authority** - Variantes de componentes
- **clsx + tailwind-merge** - Utilitários para classes CSS

### Ferramentas de Desenvolvimento

- **Biome** - Linter e formatter
- **TypeScript** - Verificação de tipos

## 📁 Estrutura do Projeto

```
src/
├── components/ui/     # Componentes reutilizáveis
├── pages/            # Páginas da aplicação
├── lib/              # Utilitários e helpers
├── app.tsx           # Componente raiz
└── main.tsx          # Entry point
```

## 🛠️ Padrões de Projeto

- **Component Composition** - Uso de Radix UI para componentes compostos
- **Custom Hooks** - React Query para lógica de data fetching
- **Atomic Design** - Organização de componentes UI reutilizáveis
- **Type Safety** - TypeScript em toda a aplicação

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd web

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Executar linter
```

### Configuração da API

A aplicação espera uma API rodando em `http://localhost:3333`. Certifique-se de que o backend esteja configurado e rodando.

## 🌐 Funcionalidades

- Criação e listagem de salas
- Navegação entre salas
- Interface responsiva
- Carregamento otimizado com React Query

---

**Projeto Agents** - Desenvolvido com ❤️ usando React e TypeScript
