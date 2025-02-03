document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.style.overflow = "auto"; // Libera a rolagem
        document.querySelector(".main-content").style.visibility = "visible"; // Exibe o restante do site
    }, 3000); // Tempo de espera antes de exibir o restante do site (3 segundos)
});
