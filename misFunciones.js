function validar(){
    const nom = document.getElementById("nombres").value;
    const correo = document.getElementById("correo").value;
    const mensa = document.getElementById("mensaje").value;

    if (nom.length==0 || correo.length==0 || mensa.length==0) {
        alert("Campos Vacios..., ingrese los que faltan");
    } else {
        alert("Gracias por Suscribirse");
        document.getElementById("nombres").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("mensaje").value = "";
    }
}