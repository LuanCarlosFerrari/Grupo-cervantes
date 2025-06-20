# Estrutura do Projeto - Grupo Cervantes

## Organização dos Arquivos

### 📁 Estrutura Principal
```
projeto/
├── index.html              # Página inicial (quadrantes)
├── pages/                  # Páginas internas
│   ├── sobre-nos.html      # História e apresentação do grupo
│   ├── contato.html        # Formulário e informações de contato
│   └── localizacao.html    # Mapa e endereços
├── src/                    # Arquivos de desenvolvimento
│   ├── css/
│   │   └── styles.css      # Estilos customizados
│   └── js/
│       ├── main.js         # JavaScript principal
│       └── mapa.js         # Configuração do mapa (Leaflet)
├── public/                 # Arquivos públicos
│   └── images/             # Imagens do projeto
│       ├── brasao.png
│       ├── cow.png
│       ├── gas.png
│       ├── tools.png
│       ├── transport.png
│       └── wood.png
└── docs/                   # Documentação
    ├── README.md
    ├── DEVELOPMENT.md
    └── STRUCTURE.md
```

## 🔗 Navegação
- **Página Inicial**: `index.html` (quadrantes interativos)
- **Sobre Nós**: `pages/sobre-nos.html`
- **Contato**: `pages/contato.html`
- **Localização**: `pages/localizacao.html`

## 🎨 Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **TailwindCSS**: Framework CSS (via CDN)
- **JavaScript**: Interatividade e mapa
- **Leaflet.js**: Biblioteca de mapas
- **Python**: Servidor local (`serve.py`)

## 📱 Design
- **Responsivo**: Adaptado para mobile, tablet e desktop
- **Moderno**: Visual escuro com efeitos glassmorphism
- **Acessível**: Navegação clara e intuitiva
- **Performático**: Otimizado para carregamento rápido

## 🚀 Como Executar
1. Navegue até a pasta do projeto
2. Execute `python serve.py` para servidor local
3. Ou abra `index.html` diretamente no navegador

## 📝 Observações
- Todas as páginas seguem o mesmo padrão visual
- Headers fixos em todas as páginas internas
- Footers compactos e consistentes
- Imagens circulares nos cards
- Filtros funcionais na página de contato
- Mapa interativo na página de localização
