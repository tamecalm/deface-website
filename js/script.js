document.addEventListener('DOMContentLoaded', () => {
    // Matrix effect - Falling code rain
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '💀😈💥🔒⚠️🚨🔓🚀🎯⏳💻🤖';
    const font_size = 16;
    const columns = canvas.width / font_size;

    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = font_size + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);

    // Panic button interaction
    document.querySelector('.glitch-btn').addEventListener('click', () => {
        alert('Too late to panic! 😱');
    });
});
