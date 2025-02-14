document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    message.style.display = 'none';
    setTimeout(() => {
        message.style.display = 'block';
    }, 1000); // Aparece después de 1 segundo
});