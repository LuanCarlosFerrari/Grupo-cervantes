# Grupo Cervantes - Portal

## Como executar o projeto

### Opção 1: Servidor simples (recomendado)
```bash
# Se você tem Node.js instalado
npm install -g live-server
live-server --port=3000

# Ou se você tem Python instalado
python -m http.server 3000

# Ou se você tem PHP instalado
php -S localhost:3000
```

### Opção 2: Abrir diretamente no navegador
Simplesmente abra o arquivo `index.html` no seu navegador favorito.

## Estrutura do projeto após organização

```
Grupo Cervantes/
├── index.html              # Página principal
├── package.json           # Configurações do projeto
├── README.md              # Documentação
├── .gitignore            # Arquivos ignorados pelo Git
├── public/               # Arquivos públicos/assets
│   └── images/          # Imagens e logos
│       ├── brasao.png   # Logo principal
│       ├── wood.png     # Ícone construção
│       ├── gas.png      # Ícone posto
│       ├── cow.png      # Ícone pecuária
│       ├── tools.png    # Ícone ferramentas
│       └── transport.png # Ícone transporte
└── src/                 # Código fonte
    ├── css/            # Estilos customizados
    │   └── styles.css  # CSS personalizado
    └── js/             # Scripts JavaScript
        └── main.js     # Lógica principal
```

## Tecnologias utilizadas

- **HTML5** - Estrutura semântica moderna
- **TailwindCSS** - Framework CSS utilitário via CDN
- **JavaScript ES6+** - Lógica de interação
- **CSS3** - Animações e efeitos especiais

## Funcionalidades

✅ **Design Responsivo** - Adapta-se a qualquer tamanho de tela
✅ **Interface Moderna** - Visual limpo e profissional
✅ **Navegação Interativa** - Cliques nos quadrantes abrem sites das empresas
✅ **Efeitos Visuais** - Animações suaves e brilho no logo central
✅ **Organização Modular** - Código separado por responsabilidade
