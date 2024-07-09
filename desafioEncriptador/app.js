document.addEventListener("DOMContentLoaded", function() {
    const textoEntrada = document.getElementById("textoEntrada");
    const textoSalida = document.getElementById("textoSalida");
    const placeholder = document.getElementById("placeholder");

    function encriptar() {
        const texto = textoEntrada.value.toLowerCase();
        textoSalida.value = aplicarReglasEncriptacion(texto);
        mostrarSalida();
    }

    function desencriptar() {
        const texto = textoEntrada.value.toLowerCase();
        textoSalida.value = aplicarReglasDesencriptacion(texto);
        mostrarSalida();
    }

    function aplicarReglasEncriptacion(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function aplicarReglasDesencriptacion(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function mostrarSalida() {
        textoSalida.classList.add("activo");
        placeholder.style.display = "none";
    }

    function copiarAlPortapapeles() {
        navigator.clipboard.writeText(textoSalida.value)
            .then(() => {
                alert("Texto copiado al portapapeles: " + textoSalida.value);
            })
            .catch(err => {
                alert("Error al copiar el texto: " + err);
            });
    }

    window.encriptar = encriptar;
    window.desencriptar = desencriptar;
    window.copiarAlPortapapeles = copiarAlPortapapeles;
});
