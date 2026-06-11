// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos necessários
    const startButton = document.getElementById('startButton');
    const startScreen = document.getElementById('startScreen');
    const mainContent = document.getElementById('mainContent');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Adiciona evento de clique no botão inicial
    startButton.addEventListener('click', function() {
        // Inicia a música de fundo
        backgroundMusic.play().catch(function(error) {
            console.log('Erro ao reproduzir áudio:', error);
        });

        // Adiciona animação de fade out na tela inicial
        startScreen.classList.add('fade-out');

        // Aguarda a animação terminar antes de ocultar
        setTimeout(function() {
            // Oculta a tela inicial
            startScreen.classList.add('hidden');
            
            // Mostra o conteúdo principal
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in');
        }, 1000); // 1 segundo (duração da animação fade-out)
    });

    // Adiciona efeito de hover sutil no botão
    startButton.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease-in-out';
    });

    startButton.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });

    // Adiciona controle de volume suave
    backgroundMusic.volume = 0.5; // Volume a 50%

    // Prevenção de erro se o áudio não carregar
    backgroundMusic.addEventListener('error', function() {
        console.log('Não foi possível carregar o arquivo de áudio');
    });

    // Log quando a música começa a tocar
    backgroundMusic.addEventListener('play', function() {
        console.log('Música iniciada ❤️');
    });
});

// Adiciona animação CSS de pulso para o botão (via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);
