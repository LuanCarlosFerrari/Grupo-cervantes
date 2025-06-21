/**
 * GRUPO CERVANTES - PORTAL OFICIAL
 * JavaScript otimizado com performance em mente
 * 
 * Funcionalidades:
 * - Navegação entre empresas do grupo
 * - Event listeners otimizados
 * - Inicialização rápida da aplicação
 * - Performance monitoring
 */

/* ========================================
   FUNÇÕES DE NAVEGAÇÃO OTIMIZADAS
======================================== */

/**
 * Abre URL em nova aba com rel="noopener" para segurança
 * @param {string} url - URL para navegar
 */
function navigateToUrl(url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
        newWindow.focus();
    }
}

/**
 * Navega para site da Cervantes Materiais para Construção
 */
function navigateToMateriais() {
    navigateToUrl('https://site1.com');
}

/**
 * Navega para site do Cervantes Auto Posto
 */
function navigateToAutoPosto() {
    navigateToUrl('https://site2.com');
}

/**
 * Navega para site da BC Pecuária
 */
function navigateToPecuaria() {
    navigateToUrl('https://site3.com');
}

/**
 * Navega para site da TRR Cervantes
 */
function navigateToTRR() {
    navigateToUrl('https://site4.com');
}

/**
 * Navega para site da Transval
 */
function navigateToTransval() {
    navigateToUrl('https://transval.com.br/');
}

/* ========================================
   INICIALIZAÇÃO DA APLICAÇÃO
======================================== */

/* ========================================
   INICIALIZAÇÃO OTIMIZADA DA APLICAÇÃO
======================================== */

/**
 * Performance observer para monitorar métricas
 */
function initPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'navigation') {
                    console.log(`🚀 Página carregada em ${entry.loadEventEnd - entry.loadEventStart}ms`);
                }
            }
        });
        observer.observe({ entryTypes: ['navigation'] });
    }
}

/**
 * Inicializa a aplicação quando o DOM estiver carregado
 * Otimizado para performance máxima
 */
document.addEventListener('DOMContentLoaded', function () {
    const startTime = performance.now();

    console.log('🚀 Grupo Cervantes Portal iniciando (Tailwind Optimized)...');

    // Cache de elementos para evitar múltiplas consultas DOM
    const elements = {
        materiais: document.getElementById('materiais-quadrante'),
        autoposto: document.getElementById('autoposto-quadrante'),
        pecuaria: document.getElementById('pecuaria-quadrante'),
        trr: document.getElementById('TRR-poligono'),
        transval: document.getElementById('Transval-quadrante')
    };

    // Event delegation para melhor performance
    const eventHandlers = {
        'materiais-quadrante': navigateToMateriais,
        'autoposto-quadrante': navigateToAutoPosto,
        'pecuaria-quadrante': navigateToPecuaria,
        'TRR-poligono': navigateToTRR,
        'Transval-quadrante': navigateToTransval
    };

    // Adiciona event listeners usando event delegation
    Object.entries(elements).forEach(([key, element]) => {
        if (element) {
            const handler = eventHandlers[element.id];
            if (handler) {
                element.addEventListener('click', handler, { passive: true });
                element.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handler();
                    }
                }, { passive: false });
            }
        }
    });

    // Inicializa monitoring de performance
    initPerformanceMonitoring();

    const endTime = performance.now();
    console.log(`✅ Portal inicializado em ${(endTime - startTime).toFixed(2)}ms`);
    console.log('🎉 Portal Grupo Cervantes pronto para uso!');
});
