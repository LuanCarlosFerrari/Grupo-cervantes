/**
 * GRUPO CERVANTES - MAPA INTERATIVO
 * Script para exibição de localizações das empresas usando Leaflet
 * 
 * Funcionalidades:
 * - Mapa interativo com marcadores
 * - Popups informativos para cada empresa
 * - Controles de zoom e navegação
 * - Responsive design
 */

// Configurações do mapa
const MAP_CONFIG = {
    // Coordenadas centrais do Brasil (Centro geográfico do país)
    center: [-14.2350, -51.9253], // Centro geográfico do Brasil
    zoom: 5, // Zoom baixo para mostrar todo o território nacional
    minZoom: 4, // Permite zoom ainda menor para ver todo o continente
    maxZoom: 18
};

// Dados das empresas com localizações
const empresasLocalizacoes = [{
    id: 'matriz',
    nome: 'Cervantes - Matriz',
    subtitulo: 'Materiais para Construção',
    endereco: 'Via de Acesso à Rinópolis, Rod. SP-425<br>Centro - Rinópolis, SP<br>CEP: 17740-000',
    telefone: '(18) 3583-1016',
    horario: 'Seg-Sex 7h-17h | Sáb 7h-12h',
    coordenadas: [-21.722428, -50.721843], // Coordenadas precisas da Matriz
    icone: 'wood',
    cor: '#8B4513'
}, {
    id: 'parapua',
    nome: 'Cervantes - Parapuã',
    subtitulo: 'Materiais para Construção',
    endereco: 'Av. São Paulo, 1194<br>Centro - Parapuã, SP<br>CEP: 17730-000',
    telefone: '(18) 3582-1333',
    horario: 'Seg-Sex 7h-17h | Sáb 7h-12h',
    coordenadas: [-21.783423, -50.791459], // Coordenadas precisas de Parapuã
    icone: 'wood',
    cor: '#8B4513'
}, {
    id: 'iacri',
    nome: 'Cervantes - Iacri',
    subtitulo: 'Materiais para Construção',
    endereco: 'Rua Bandeirantes, 741<br>Centro - Iacri, SP<br>CEP: 17680-000',
    telefone: '(14) 3489-1347',
    horario: 'Seg-Sex 7h-17h | Sáb 7h-12h',
    coordenadas: [-21.857401, -50.688404], // Coordenadas precisas de Iacri
    icone: 'wood',
    cor: '#8B4513'
}, {
    id: 'bastos',
    nome: 'Cervantes - Bastos',
    subtitulo: 'Materiais para Construção',
    endereco: 'Adhemar de Barros, 300<br>Centro - Bastos, SP<br>CEP: 17690-000',
    telefone: '(14) 3478-1117',
    horario: 'Seg-Sex 7h-17h | Sáb 7h-12h',
    coordenadas: [-21.920409, -50.733953], // Coordenadas precisas de Bastos
    icone: 'wood',
    cor: '#8B4513'
}, {
    id: 'osvaldocruz',
    nome: 'Cervantes - Osvaldo Cruz',
    subtitulo: 'Materiais para Construção',
    endereco: 'Brasil, 1225<br>Centro - Osvaldo Cruz, SP<br>CEP: 17700-000',
    telefone: '(18) 3528-3320',
    horario: 'Seg-Sex 7h-17h | Sáb 7h-12h',
    coordenadas: [-21.795539, -50.876244], // Coordenadas precisas de Osvaldo Cruz
    icone: 'wood',
    cor: '#8B4513'
},
{
    id: 'autoposto',
    nome: 'Cervantes Auto Posto',
    subtitulo: 'Auto Posto',
    endereco: 'Rodovia BR-262, Km 142, s/n<br>Zona Rural - Água Clara, MS<br>CEP: 79680-000',
    telefone: '(67) 3239-1744',
    horario: 'Aberto 24 horas',
    coordenadas: [-20.4500, -52.8700], // BR-262, Km 142
    icone: 'gas',
    cor: '#FF6B35'
},
{
    id: 'pecuaria',
    nome: 'BC Pecuária',
    subtitulo: 'Cria, Recria e Engorda',
    endereco: 'Fazenda São José<br>Zona Rural - Água Clara, MS<br>CEP: 79680-000',
    telefone: '(67) 3239-1744',
    horario: 'Seg-Sex 7h-17h',
    coordenadas: [-20.4300, -52.8500], // Zona rural
    icone: 'cow',
    cor: '#228B22'
},
{
    id: 'trr',
    nome: 'TRR Cervantes',
    subtitulo: 'Produtos de Petróleo',
    endereco: 'Rodovia BR-262, Km 142, s/n<br>Zona Rural - Água Clara, MS<br>CEP: 79680-000',
    telefone: '(67) 3239-1744',
    horario: 'Seg-Sex 7h-17h',
    coordenadas: [-20.4500, -52.8700], // Mesmo local do posto
    icone: 'transport',
    cor: '#4169E1'
}, {
    id: 'transval',
    nome: 'Transval',
    subtitulo: 'Transportadora',
    endereco: 'Via de Acesso à Rinópolis, Rod. SP-425<br>Centro - Rinópolis, SP<br>CEP: 17740-000',
    telefone: '(18) 3583-1016',
    horario: 'Seg-Sex 7h-18h',
    coordenadas: [-21.722428, -50.721843], // Matriz Rinópolis (mesmo local)
    icone: 'transport',
    cor: '#DC143C'
},
{
    id: 'transval-rondonopolis',
    nome: 'Transval - Rondonópolis',
    subtitulo: 'Unidade Mato Grosso',
    endereco: 'Rondonópolis, MT<br>CEP: 78700-000',
    telefone: 'Em breve',
    horario: 'Seg-Sex 7h-18h',
    coordenadas: [-16.505191, -54.647976], // Rondonópolis, MT
    icone: 'transport',
    cor: '#DC143C'
}
];

// Variável global para o mapa
let mapaGrupoCervantes;
let marcadores = [];

/**
 * Inicializa o mapa Leaflet
 */
function inicializarMapa() {
    console.log('Iniciando inicialização do mapa...');

    try {
        // Verificar se o container existe
        const container = document.getElementById('mapa-cervantes');
        if (!container) {
            throw new Error('Container do mapa não encontrado');
        }

        console.log('Container encontrado, criando mapa...');

        // Criar o mapa
        mapaGrupoCervantes = L.map('mapa-cervantes', {
            center: MAP_CONFIG.center,
            zoom: MAP_CONFIG.zoom,
            minZoom: MAP_CONFIG.minZoom,
            maxZoom: MAP_CONFIG.maxZoom,
            zoomControl: true,
            scrollWheelZoom: true
        });

        console.log('Mapa criado, adicionando tiles...');

        // Adicionar camada de tiles (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(mapaGrupoCervantes);

        console.log('Tiles adicionados, adicionando marcadores...');

        // Adicionar marcadores das empresas
        adicionarMarcadores();

        console.log('Marcadores adicionados, ajustando visualização...');

        // Ajustar visualização para mostrar todos os marcadores
        ajustarVisualizacao();

        console.log('Mapa do Grupo Cervantes inicializado com sucesso!');
    } catch (error) {
        console.error('Erro ao inicializar mapa:', error);
        mostrarErroMapa();
    }
}

/**
 * Adiciona marcadores para cada empresa no mapa
 */
function adicionarMarcadores() {
    empresasLocalizacoes.forEach(empresa => {
        // Criar ícone customizado
        const iconeCustom = criarIconeCustomizado(empresa.cor, empresa.icone);

        // Criar marcador
        const marcador = L.marker(empresa.coordenadas, {
            icon: iconeCustom,
            title: `${empresa.nome} - ${empresa.subtitulo}`
        }).addTo(mapaGrupoCervantes);

        // Criar popup com informações da empresa
        const popupContent = criarConteudoPopup(empresa);
        marcador.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'popup-cervantes'
        });

        // Adicionar evento de clique
        marcador.on('click', () => {
            console.log(`Clicou em: ${empresa.nome}`);
        });

        // Armazenar marcador
        marcadores.push({
            id: empresa.id,
            marcador: marcador,
            empresa: empresa
        });
    });
}

/**
 * Cria ícone customizado minimalista para cada empresa
 */
function criarIconeCustomizado(cor, tipo) {
    const iconeSvg = getIconeSvg(tipo);

    const iconeHtml = `
        <div style="
            background: linear-gradient(135deg, ${cor}, ${cor}dd);
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        ">
            <div style="
                width: 16px;
                height: 16px;
                fill: white;
                display: flex;
                align-items: center;
                justify-content: center;
            ">
                ${iconeSvg}
            </div>
        </div>
    `;

    return L.divIcon({
        html: iconeHtml,
        className: 'marcador-cervantes',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
    });
}

/**
 * Retorna ícone SVG minimalista para cada tipo de empresa
 */
function getIconeSvg(tipo) {
    const icones = {
        'wood': `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 21v-2h18v2H3zm0-4v-2h18v2H3zm0-4v-2h18v2H3zm0-4V7h18v2H3zm0-4V3h18v2H3z"/>
        </svg>`,
        'gas': `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 16H7v-2h6v2zm0-4H7v-2h6v2zm0-4H7V8h6v2z"/>
            <path d="M16 8v8h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2z"/>
        </svg>`,
        'cow': `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>`,
        'transport': `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>`
    };
    return icones[tipo] || `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`;
}

/**
 * Cria conteúdo HTML para o popup
 */
function criarConteudoPopup(empresa) {
    return `
        <div class="popup-empresa">
            <h3 style="margin: 0 0 8px 0; color: #333; font-size: 16px; font-weight: bold;">
                ${empresa.nome}
            </h3>
            <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                ${empresa.subtitulo}
            </p>
            <div style="font-size: 12px; color: #555; line-height: 1.4;">
                <p style="margin: 4px 0;"><strong>📍 Endereço:</strong><br>${empresa.endereco}</p>
                <p style="margin: 4px 0;"><strong>📞 Telefone:</strong> ${empresa.telefone}</p>
                <p style="margin: 4px 0;"><strong>🕒 Horário:</strong> ${empresa.horario}</p>
            </div>
            <div style="margin-top: 10px; text-align: center;">
                <button onclick="navegarPara('${empresa.id}')" 
                        style="background: #4169E1; color: white; border: none; 
                               padding: 6px 12px; border-radius: 4px; cursor: pointer;
                               font-size: 12px;">
                    Como Chegar
                </button>
            </div>
        </div>
    `;
}

/**
 * Ajusta a visualização do mapa para mostrar todo o território nacional
 * com os marcadores visíveis
 */
function ajustarVisualizacao() {
    if (marcadores.length > 0) {
        // Define os limites do Brasil para visualização
        const brasilBounds = [
            [-33.7683, -73.9872], // Sudoeste (inclui extremo sul)
            [5.2719, -28.6341]    // Nordeste (inclui extremo norte e leste)
        ];

        // Ajusta o mapa para mostrar o Brasil inteiro
        mapaGrupoCervantes.fitBounds(brasilBounds, {
            padding: [20, 20], // Adiciona um pouco de margem
            maxZoom: 6 // Limita o zoom máximo para manter visão nacional
        });
    }
}

/**
 * Navega para uma empresa específica no mapa
 */
function focarEmpresa(empresaId) {
    const marcadorData = marcadores.find(m => m.id === empresaId);
    if (marcadorData) {
        mapaGrupoCervantes.setView(marcadorData.empresa.coordenadas, 16);
        marcadorData.marcador.openPopup();
    }
}

/**
 * Foca em todas as empresas do grupo (zoom nas localizações)
 */
function focarEmpresas() {
    if (marcadores.length > 0) {
        const grupo = new L.featureGroup(marcadores.map(m => m.marcador));
        mapaGrupoCervantes.fitBounds(grupo.getBounds().pad(0.1));
    }
}

/**
 * Volta para a visão do Brasil completo
 */
function voltarVistaNacional() {
    ajustarVisualizacao();
}

/**
 * Função para navegação (integração com GPS)
 */
function navegarPara(empresaId) {
    const marcadorData = marcadores.find(m => m.id === empresaId);
    if (marcadorData) {
        const [lat, lng] = marcadorData.empresa.coordenadas;
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        window.open(url, '_blank');
    }
}

/**
 * Mostra mensagem de erro caso o mapa não carregue
 */
function mostrarErroMapa() {
    const container = document.getElementById('mapa-cervantes');
    if (container) {
        container.innerHTML = `
            <div style="
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                height: 100%; 
                color: #666;
                text-align: center;
                padding: 20px;
            ">
                <div style="font-size: 48px; margin-bottom: 16px;">🗺️</div>
                <h3 style="margin: 0 0 8px 0;">Erro ao carregar mapa</h3>
                <p style="margin: 0; font-size: 14px;">
                    Verifique sua conexão com a internet ou recarregue a página.
                </p>
                <button onclick="location.reload()" 
                        style="margin-top: 16px; padding: 8px 16px; 
                               background: #4169E1; color: white; 
                               border: none; border-radius: 4px; cursor: pointer;">
                    Tentar Novamente
                </button>
            </div>
        `;
    }
}

/**
 * Adiciona selects de navegação organizados por categoria
 */
function adicionarBotoesNavegacao() {
    const container = document.getElementById('botoes-navegacao');
    if (container) {
        // Separar empresas por categorias
        const lojas = empresasLocalizacoes.filter(e => e.icone === 'wood');
        const transportadoras = empresasLocalizacoes.filter(e => e.icone === 'transport');
        const outrasEmpresas = empresasLocalizacoes.filter(e => !['wood', 'transport'].includes(e.icone));

        container.innerHTML = `
            <div style="text-align: center; margin: 16px 0;">
                <p style="margin-bottom: 12px; color: rgba(255,255,255,0.7); font-size: 14px;">
                    Selecione uma categoria ou empresa específica:
                </p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; align-items: center; margin-bottom: 16px;">
                    
                    <!-- Select Lojas de Materiais -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                        <label style="color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 500;">
                            Materiais de Construção
                        </label>
                        <select onchange="handleSelectNavegacao(this.value, this)" 
                                style="
                                    background: white;
                                    color: #333;
                                    border: 2px solid rgba(255,255,255,0.8);
                                    padding: 8px 12px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-size: 13px;
                                    font-weight: 500;
                                    min-width: 180px;
                                    outline: none;
                                    transition: all 0.3s ease;
                                "
                                onfocus="this.style.borderColor='#8B4513'; this.style.boxShadow='0 0 0 2px rgba(139,69,19,0.2)'"
                                onblur="this.style.borderColor='rgba(255,255,255,0.8)'; this.style.boxShadow='none'">
                            <option value="">Selecione uma loja...</option>
                            ${lojas.map(empresa => `
                                <option value="${empresa.id}" style="background: white; color: #333;">
                                    ${empresa.nome}
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <!-- Select Transportadoras -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                        <label style="color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 500;">
                            Transporte & Logística
                        </label>
                        <select onchange="handleSelectNavegacao(this.value, this)" 
                                style="
                                    background: white;
                                    color: #333;
                                    border: 2px solid rgba(255,255,255,0.8);
                                    padding: 8px 12px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-size: 13px;
                                    font-weight: 500;
                                    min-width: 180px;
                                    outline: none;
                                    transition: all 0.3s ease;
                                "
                                onfocus="this.style.borderColor='#DC143C'; this.style.boxShadow='0 0 0 2px rgba(220,20,60,0.2)'"
                                onblur="this.style.borderColor='rgba(255,255,255,0.8)'; this.style.boxShadow='none'">
                            <option value="">Selecione uma unidade...</option>
                            ${transportadoras.map(empresa => `
                                <option value="${empresa.id}" style="background: white; color: #333;">
                                    ${empresa.nome}
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <!-- Select Outras Empresas -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                        <label style="color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 500;">
                            Combustíveis & Agropecuária
                        </label>
                        <select onchange="handleSelectNavegacao(this.value, this)" 
                                style="
                                    background: white;
                                    color: #333;
                                    border: 2px solid rgba(255,255,255,0.8);
                                    padding: 8px 12px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-size: 13px;
                                    font-weight: 500;
                                    min-width: 180px;
                                    outline: none;
                                    transition: all 0.3s ease;
                                "
                                onfocus="this.style.borderColor='#4169E1'; this.style.boxShadow='0 0 0 2px rgba(65,105,225,0.2)'"
                                onblur="this.style.borderColor='rgba(255,255,255,0.8)'; this.style.boxShadow='none'">
                            <option value="">Selecione uma empresa...</option>
                            ${outrasEmpresas.map(empresa => `
                                <option value="${empresa.id}" style="background: white; color: #333;">
                                    ${empresa.nome}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                </div>

                <!-- Botão Ver Todas -->
                <button onclick="mostrarTodasEmpresas()" 
                        style="
                            background: #000;
                            color: white;
                            border: 2px solid #000;
                            padding: 12px 24px;
                            border-radius: 8px;
                            cursor: pointer;
                            font-size: 14px;
                            font-weight: 600;
                            transition: all 0.3s ease;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                        "
                        onmouseover="this.style.background='#333'; this.style.borderColor='#333'; this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.3)'"
                        onmouseout="this.style.background='#000'; this.style.borderColor='#000'; this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.2)'">
                    Ver Todas as Empresas
                </button>
            </div>
        `;
    }
}

/**
 * Manipula a seleção nos dropdowns de navegação
 */
function handleSelectNavegacao(empresaId, selectElement) {
    if (empresaId) {
        focarEmpresa(empresaId);

        // Resetar outros selects
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            if (select !== selectElement) {
                select.value = '';
            }
        });
    }
}

/**
 * Mostra todas as empresas no mapa (visão geral)
 */
function mostrarTodasEmpresas() {
    // Resetar todos os selects
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.value = '';
    });

    // Ajustar visualização para mostrar todos os marcadores
    ajustarVisualizacao();
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado, iniciando mapa...');

    // Verificar se o container do mapa existe
    const container = document.getElementById('mapa-cervantes');
    if (!container) {
        console.error('Container do mapa não encontrado!');
        return;
    }

    // Aguardar um pouco para garantir que o Leaflet carregou
    setTimeout(() => {
        if (typeof L !== 'undefined') {
            console.log('Leaflet carregado, inicializando mapa...');
            inicializarMapa();
            adicionarBotoesNavegacao();
        } else {
            console.error('Leaflet não foi carregado');
            mostrarErroMapa();
        }
    }, 500); // Aumentar o tempo para garantir que tudo carregou
});

// Redimensionar mapa quando a janela mudar de tamanho
window.addEventListener('resize', function () {
    if (mapaGrupoCervantes) {
        setTimeout(() => {
            mapaGrupoCervantes.invalidateSize();
        }, 100);
    }
});
