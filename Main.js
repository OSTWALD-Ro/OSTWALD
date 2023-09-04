'use strict';

// Crear Elementos <html>
// Elementos <head>
        
// Crear Estilos <style>
const style1 = document.createElement('style');  document.head.appendChild(style1);  style1.id = "style1";
style1.textContent = `
  html {
    background-color: rgb( 0, 0, 0);
    border: ridge rgb(63, 63, 63);
    color: rgb(63, 63, 63);
    box-shadow: 0 0 1.5vh rgb(63, 63, 63);
    border-radius: 0px 0px 0px 0px;
    margin: solid;
    padding: solid;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 99vh;
    width: 100%;
    font-family: Arial, sans-serif;
  }
  
  html:hover {
    border: double rgb(191, 191, 191);
    color: rgb(191, 191, 191);
    box-shadow: 0 0 1.5vh rgb(191, 191, 191);
  }

  body {
    background-color: rgba( 0, 0, 0, 0);
    border: ridge rgb(63, 63, 63);
    color: rgb(63, 63, 63);
    box-shadow: 0 0 1.5vh rgb(63, 63, 63);
    border-radius: 20px 20px 20px 20px;
    margin: solid;
    padding: solid;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 99.25%;
    width: 100%;
  }
  
  body:hover {
    border: double rgb(191, 191, 191);
    color: rgb(191, 191, 191);
    box-shadow: 0 0 1.5vh rgb(191, 191, 191);
  }
`;

// Elementos <body>

// Constantes

// Variables

// Funciones

function setup__Default()
{
  // Código Inicial
}

function init__Default() 
{
  // Código Principal
}

setup__Default();

document.addEventListener("DOMContentLoaded", function() 
{
  // Código Despues de Cargar la Pagina Completa

  init__Default();
});