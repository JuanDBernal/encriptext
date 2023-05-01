function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let coso = document.getElementById("coso");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = document.getElementById("texto").value;
        parrafo.textContent="";
        coso.style.display = "none"; 
    }

    else {
        alert("Deber ingresar algun texto");
    }


}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let coso = document.getElementById("coso");

    let textoDecifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoDecifrado;
        tituloMensaje.textContent = document.getElementById("texto").value;
        parrafo.textContent="";
        coso.style.display = "none"; 
    }

    else {
        alert("Deber ingresar algun texto");
    }

    
}