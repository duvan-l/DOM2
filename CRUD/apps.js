import { validarCorreo, validarTipDoc, validarPoliticas } from "./module.js";
const $formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const direccion = document.querySelector("#direc");
const telefono = document.querySelector("#tel");
const tipo_doc = document.querySelector("#tipo_doc");
const documento = document.querySelector("#num_doc");
const politicas = document.querySelector("#politicas");
const enviar = document.querySelector("#enviar");
const email = document.querySelector("#email");

function quitarCalse (valor) {
    valor.classList.remove("error");
}


const validar = (event) => {
    event.preventDefault()
    console.log(nombre.value);
    if (nombre.value === "") {
        nombre.focus()
        nombre.classList.add("error")
    
    }if( apellido.value === ""){
        apellido.focus()
        apellido.classList.add("error")

    }if(tipo_doc.value === "0"){
        tipo_doc.focus()
        tipo_doc.classList.add("error")
    }
    if(direccion.value === ""){
        direccion.focus()
        direccion.classList.add("error")
    }if(telefono.value === ""){
        telefono.focus()
        telefono.classList.add("error")
    }if(documento.value === ""){
        documento.focus()
        documento.classList.add("error")
    }

    if (email.value === "") {
        email.focus();
        email.classList.add("error");
    }
}

$formulario.addEventListener("submit", validar)  //boton, al dar click haga la funcion
const remover = (input, validacion) => {
    if (!input.value == "") {
        input.classList.add("correcto");
        input.classList.remove("error");
    } else {
        input.classList.remove("correcto");
        input.classList.add("error");
    }
};

nombre.addEventListener("keyup", () => {
    remover(nombre);
});

apellido.addEventListener("keyup", () => {
    remover(apellido);
});

direccion.addEventListener("keyup", () => {
    remover(direccion);
});

telefono.addEventListener("keyup", () => {
    remover(telefono);
});

tipo_doc.addEventListener("change", (e) => validarTipDoc(e));


documento.addEventListener("keyup", () => {
    remover(documento);
});

enviar.setAttribute('disabled', '');

politicas.addEventListener("change", () => validarPoliticas(e));    
console.log($formulario)


const numero = function(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault(); // Esto evitará que se ingrese el valor
    }
}

documento.addEventListener("keypress", numero);
telefono.addEventListener("keypress", numero)

const letras = function(event, elemento){
    let letras = /^[A-Za-zÀ-ÿ\s]*$/
    if (!letras.test(event.key)) {
        event.preventDefault();
    }
}

nombre.addEventListener("keypress", (event)=>{
    letras(event, nombre)
});
apellido.addEventListener("keypress", (event)=>{
    letras(event, apellido)
})


documento.addEventListener("keypress", function(event){
    console.log("keypress", event)
    console.log(this.value)
    console.log(event.keyCode)
    
})

email.addEventListener('input', (e) => validarCorreo(e));
