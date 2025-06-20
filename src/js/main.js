/**
 * GRUPO CERVANTES - PORTAL OFICIAL
 * JavaScript principal para interatividade
 * 
 * Funcionalidades:
 * - Configuração do TailwindCSS
 * - Navegação entre empresas do grupo
 * - Event listeners para interações
 * - Inicialização da aplicação
 */

/* ========================================
   CONFIGURAÇÃO DO TAILWINDCSS
======================================== */
tailwind.config = {
    theme: {
        extend: {
            transitionProperty: {
                'transform': 'transform',
            },
        }
    }
}

/* ========================================
   FUNÇÕES DE NAVEGAÇÃO
======================================== */

/**
 * Abre URL em nova aba
 * @param {string} url - URL para navegar
 */
function navigateToUrl(url) {
    window.open(url, '_blank');
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

/**
 * Inicializa a aplicação quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Grupo Cervantes Portal carregado com sucesso!');

    // Selecionar elementos da interface
    const materiaisQuadrante = document.getElementById('materiais-quadrante');
    const autopostoQuadrante = document.getElementById('autoposto-quadrante');
    const pecuariaQuadrante = document.getElementById('pecuaria-quadrante');
    const trrQuadrante = document.getElementById('trr-quadrante');
    const transvalPoligono = document.getElementById('transval-poligono');

    // Configurar event listeners para navegação
    if (materiaisQuadrante) {
        materiaisQuadrante.addEventListener('click', navigateToMateriais);
    }

    if (autopostoQuadrante) {
        autopostoQuadrante.addEventListener('click', navigateToAutoPosto);
    }

    if (pecuariaQuadrante) {
        pecuariaQuadrante.addEventListener('click', navigateToPecuaria);
    }

    if (trrQuadrante) {
        trrQuadrante.addEventListener('click', navigateToTRR);
    }

    if (transvalPoligono) {
        transvalPoligono.addEventListener('click', navigateToTransval);
    }

    console.log('✅ Event listeners configurados para todas as empresas');
});
