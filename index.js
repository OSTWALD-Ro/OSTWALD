'use strict';
    
// Constantes

// Variables

var var_if_browser_OSTWALD__index;

// Funciones

function delete_html__index()
{  
  while (document.head.firstChild) {
    document.head.removeChild(document.head.firstChild);
  }
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}

function redirigir__index(page_Id__index, subpage_Id__index, error__index) {
  if (error__index === 0) {
    window.location.href = "https://ostwald-ro.github.io/" + page_Id__index + "/" + subpage_Id__index;
  } else {
    window.location.href = "https://ostwald-ro.github.io/Error/" + error__index;
  }
}

function if_browser_OSTWALD__index()
{
  // Comprobar si Ejecuta Desde el Navegador OSTWALD

  var_if_browser_OSTWALD__index = false;

  return var_if_browser_OSTWALD__index;
}

function init__index()
{
  // Código Inicial
}

function main__index() 
{
  // Código Principal

  create_html_1__Ostwald_Ro();
  create_html_1_init__Ostwald_Ro();
}

init__index();

document.addEventListener("DOMContentLoaded", function() 
{
  // Código Despues de Cargar la Pagina Completa

  main__index();
});