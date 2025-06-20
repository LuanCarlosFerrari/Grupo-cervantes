# Grupo Cervantes - Portal Oficial

Portal web oficial do Grupo Cervantes, apresentando todas as empresas do grupo de forma interativa.

## 🏢 Empresas do Grupo

- **Cervantes Materiais para Construção** - Materiais de construção e acabamento
- **Cervantes Auto Posto Ltda** - Posto de combustíveis e conveniência
- **BC Pecuária** - Agronegócio e pecuária
- **TRR Cervantes Produtos de Petróleo Ltda** - Distribuição de combustíveis
- **Transval Transportes Ltda** - Serviços de transporte e logística

## 📁 Estrutura do Projeto

```
├── index.html              # Página principal
├── README.md               # Documentação do projeto
├── public/                 # Arquivos públicos/assets
│   └── images/            # Imagens e logos
│       ├── brasao.png     # Logo principal do grupo
│       ├── wood.png       # Ícone materiais de construção
│       ├── gas.png        # Ícone posto de combustível
│       ├── cow.png        # Ícone pecuária
│       ├── tools.png      # Ícone ferramentas
│       └── transport.png  # Ícone transporte
└── src/                   # Código fonte
    ├── css/              # Estilos customizados
    │   └── styles.css    # CSS personalizado
    └── js/               # Scripts JavaScript
        └── main.js       # Lógica principal da aplicação
```

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **TailwindCSS** - Framework CSS utilitário
- **JavaScript ES6+** - Interatividade e navegação
- **CSS3** - Animações e efeitos visuais

## 📱 Características

- ✅ Design responsivo para todos os dispositivos
- ✅ Interface moderna com efeitos visuais
- ✅ Navegação intuitiva entre empresas
- ✅ Logo central com efeito de brilho
- ✅ Quadrantes interativos para cada empresa
- ✅ Polígono especial para Transval
- ✅ Animações suaves e transições

## 🛠️ Como executar

### Servidor Local (Recomendado)
```bash
# Via Python (mais simples)
python serve.py

# Ou via Node.js (se tiver instalado)
npx http-server . -p 8000 -o
```

### Servidor Manual
Se preferir usar outro servidor:
```bash
# Python 3
python -m http.server 8000

# Node.js
npm install -g http-server
http-server . -p 8000
```

Após executar, acesse: `http://localhost:8000`

### ⚠️ Importante
- **Não abra os arquivos HTML diretamente no navegador** (file:///)
- Use sempre um servidor local para funcionalidade completa
- O mapa interativo requer servidor devido às políticas CORS

## 📞 Contato

Grupo Cervantes © 2025 - Todos os direitos reservados
