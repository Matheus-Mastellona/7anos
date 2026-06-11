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

    // Função para ampliar a imagem ao clicar
    const mainImage = document.getElementById('mainImage');
    const imageModal = document.getElementById('imageModal');
    const closeModal = document.getElementById('closeModal');

    // Abrir modal ao clicar na imagem
    mainImage.addEventListener('click', function() {
        imageModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Bloqueia scroll
    });

    // Fechar modal ao clicar no X
    closeModal.addEventListener('click', function() {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Libera scroll
    });

    // Fechar modal ao clicar fora da imagem
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.style.display === 'block') {
            imageModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
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
