//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
//event listener
eventListeners();
function eventListeners (){
    //inicio de la aplicacion y desabilitar submit
    document.addEventListener('DOMContentLoaded',inicioApp);

    // campos de FORMULARIO
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    // boton de enviar en el SUBMIT
    formularioEnviar.addEventListener('submit',enviarEmail);
    //boton de reset
    resetBtn.addEventListener('click',resetFormulario);
}


//funciones
function inicioApp(){
    // desabilitar el envio

    btnEnviar.disabled = true;

}
// valida que el campo tenga algo escrito
function validarCampo(){
    //console.log('Dentro de INPUT'); veo si salgo o no del campo

    // se valida la LONGITUD DEL TEXTO  Y QUE NO ESTE VACIO
    validadLongitud(this);
    // validar unicamente email
    if(this.type === 'email'){
        validarEmail(this);
    }
    
    let errores = document.querySelectorAll('.error');
    // chequea los 3 campos para q avilite el ENVIAR
    if(email.value !== '' && asunto.value !== '' && mensaje.value !==''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    
    }

}
// Reset el FORMULARIO
function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}
function enviarEmail(e){
    //console.log('Mail Enviado');
    // SPINER AL PRESIONAR ENVIAR
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // GIF QUE ENVIA EL EMAIL
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild( enviado );

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        },5000);
    },3000);


    e.preventDefault();
}
// verificar la longitud del texto en los campos
function validadLongitud(campo){
    //console.log(campo);
    //console.log(campo.value.length);
    if (campo.value.length>0){ // cuantos caracteres hay 
        campo.style.borderBottomColor = 'green';// valida el color
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');  

    }

}
function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){//busca el CARACTER indexOf
        campo.style.borderBottomColor = 'green';// valida el color
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}