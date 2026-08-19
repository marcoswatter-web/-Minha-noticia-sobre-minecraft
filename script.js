// Captura e exibe a data de hoje automaticamente no formato brasileiro
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("current-date");
    
    if (dateElement) {
        const hoje = new Date();
        const dia = String(hoje.getDate()).padStart(2, '0');
        const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const ano = hoje.getFullYear();
        
        // Define dinamicamente o texto na página como 19/08/2026
        dateElement.textContent = `${dia}/${mes}/${ano}`;
        console.log(`Data atualizada via JavaScript com sucesso: ${dia}/${mes}/${ano}`);
    }
});
