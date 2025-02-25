// Seleciona os botões e a curtina
const botoesAula = document.querySelectorAll('.botao-aula');
const curtina = document.getElementById('curtina');
const fecharCurtina = document.querySelector('.fechar-curtina');
const tituloAula = document.getElementById('titulo-aula');
const descricaoAula = document.getElementById('descricao-aula');
const videoPlayer = document.getElementById('video-player');

// Função para abrir a curtina
botoesAula.forEach(botao => {
    botao.addEventListener('click', () => {
        const videoSrc = botao.getAttribute('data-video-src');
        const descricao = botao.getAttribute('data-descricao');

        tituloAula.textContent = botao.textContent;
        descricaoAula.textContent = descricao;
        videoPlayer.src = videoSrc;

        curtina.style.display = 'flex';
    });
});

// Função para fechar a curtina
fecharCurtina.addEventListener('click', () => {
    curtina.style.display = 'none';
    videoPlayer.src = ''; // Pausa o vídeo ao fechar
});