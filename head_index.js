'use strict';
    
// Constantes

// Variables

var var_if_exist_html_index__index;

var var_current_html__init = 0;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_window_width__index, var_window_height__index;
var var_window_diagonal__index;

var var_Pixels_Per_Inch__index = 1;
var var_inches__index;

var var_current_device__init;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_window_orientation__index;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_if_browser_OSTWALD__index;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var testMode = false; // false Modo Normal | true Modo Prueba

var currentURL = window.location.href;
var mainURL = "https://ostwald-ro.github.io/OSTWALD/"; // Sesión
var mainURLError = "https://ostwald-ro.github.io/OSTWALD/"; // Sesi%C3%B3n
// var mainURLErrorHTML = "https://ostwald-ro.github.io/OSTWALD/index.html"; // Sesi%C3%B3n.html

var alternativeFunctions = true; // Funciones Alternativas | false true

// Funciones 

function end(_blank)
{

  if (
      alternativeFunctions === true
     )
  {
    if (
        testMode !== true
       )
    {
      window.location.href = mainURL;
    } else
    {
      // window.location.href = currentURL;
      location.reload(true);
    }
  } else 
  {


    // location.reload(true);

    if (
        _blank === true
       )
    {

      if (
          testMode !== true
         )
      {
        window.open(mainURL, '_blank');
      } else
      {
        window.open(currentURL, '_blank');
      }

    } else
    {

      if (
          testMode !== true
         )
      {
        window.open(mainURL);
      } else
      {
        window.open(currentURL);
      }

    }
    window.close();
  }
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function Pixels_Per_Inch(var_pixels__index)
{
  console.log("Pixels_Per_Inch__index()");

  var_inches__index = var_pixels__index * var_Pixels_Per_Inch__index;

  return var_inches__index;
}

function window_diagonal__index() 
{
  console.log("window_diagonal__index()");

  // ancho de la ventana en píxeles
  var_window_width__index = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  // alto de la ventana en píxeles
  var_window_height__index = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Calcula la longitud de la diagonal usando el teorema de Pitágororas C = raiz(A² + B²)
  var_window_diagonal__index = Math.sqrt(Math.pow(var_window_width__index, 2) + Math.pow(var_window_height__index, 2));

  console.log(var_window_diagonal__index + " = raíz((" + var_window_width__index + "^2) + (" + var_window_height__index + "^2))");

  // var_window_diagonal_inches__index = var_window_diagonal__index * var_Pixels_Per_Inch__index;

  // Redondea el resultado a dos decimales
  // var_window_diagonal_inches__index = var_window_diagonal_inches__index.toFixed(2);

  return var_window_diagonal__index;
}

function current_device__init() 
{
  console.log("current_device()");

  var_current_device__init = "desktop";

  return var_current_device__init;
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function window_orientation__index() 
{
  console.log("window_orientation__index()");

  // Si la Pantalla esta en Modo Horizontal
  if (window.innerWidth > window.innerHeight) {
    console.log("window.innerWidth > window.innerHeight");

    var_window_orientation__index = "landscape";

  // Si la Pantalla esta en Modo Vertical
  } else if (window.innerHeight > window.innerWidth) {
    console.log("window.innerHeight > window.innerWidth");

    var_window_orientation__index = "portrait";

  // Si la Pantalla es Cuadrada
  } else {
    console.log("window.innerWidth = window.innerHeight");

    var_window_orientation = "square";
  }

  return var_window_orientation__index;
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function if_browser_OSTWALD__index()
{
  // Comprobar si Ejecuta Desde el Navegador OSTWALD

  var_if_browser_OSTWALD__index = false;

  return var_if_browser_OSTWALD__index;
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function delete_html__index()
{  
  /*
  while (document.html.firstChild) 
  {
    document.html.removeChild(document.html.firstChild);
  }
  */

  while (document.head.firstChild) 
  {
    document.head.removeChild(document.head.firstChild);
  }
  while (document.body.firstChild) 
  {
    document.body.removeChild(document.body.firstChild);
  }
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function init__index()
{
  //  Código Inicial
    
  if (
      testMode === true
     )
  {
    mainURLError = currentURL;
    alternativeFunctions = false;
  }
      
  if (
      currentURL !== mainURLError
     )
  {
    end();
  }
}

init__index();
