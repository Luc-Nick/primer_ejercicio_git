var form = document.querySelector('form'); 
var userName = document.getElementById('userName'); 
var uPass = document.getElementById('uPassword'); 
var submit = document.getElementById('submit'); 
var p_Warning = document.getElementById('warn'); 
//comprueba si los campos estan escritos 

form.onsubmit = function(e){
    
    if(userName.value.includes('@') == false ){
        e.preventDefault(); 
        p_Warning.textContent = '¡Falta @ en el campo "Usuario"!';
        p_Warning.style.backgroundColor = "#831e1e";
    } 
    if(userName.value === ''){
        e.preventDefault(); 
        p_Warning.textContent = '¡El campo "Usuario" no puede estar vacío!';
        p_Warning.style.backgroundColor = "#831e1e"; 
    } 
    if(uPass.value === ''){
        e.preventDefault(); 
        p_Warning.textContent = '¡El campo "Clave" no puede estar vacío!';
        p_Warning.style.backgroundColor = "#831e1e";
    }
    if(userName.value.includes ('@') == true && userName.value != '' && uPass.value != ''){
        p_Warning.textContent = '¡Datos Correctos! Ingresando al sistema...';
        p_Warning.style.backgroundColor = "#1a7729"; 
    } 
} 

form.onchange = function(){
    p_Warning.textContent = ''; 
    p_Warning.style.backgroundColor = "transparent"; 
} 