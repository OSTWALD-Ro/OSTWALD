'use strict';
    
// Constantes

// Variables

var var_if_exist_html_index__index;

var var_current_html__init = 0;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_navigator_userAgent__init;

var var_current_device__init;
var var_current_system__init, var_current_version__init, var_current_architecture__init;
var var_current_browser__init;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_window_orientation__index;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_if_browser_OSTWALD__index;

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

var var_testMode__index = false; // false Modo Normal | true Modo Prueba

var var_currentURL__index = window.location.href;
var var_mainURL__index = "https://ostwald-ro.github.io/OSTWALD/"; // Sesión
var var_mainURLError__index  = "https://ostwald-ro.github.io/OSTWALD/"; // Sesi%C3%B3n

var var_alternativeFunctions__index  = true; // Funciones Alternativas | false true

// Funciones 

function end__index(var__blank__index)
{

  if (
      var_alternativeFunctions__index  === true
     )
  {
    if (
        var_testMode__index !== true
       )
    {
      window.location.href = var_mainURL__index;
    } else
    {
      // window.location.href = var_currentURL__index;
      location.reload(true);
    }
  } else 
  {


    // location.reload(true);

    if (
        var__blank__index === true
       )
    {

      if (
          var_testMode__index !== true
         )
      {
        window.open(var_mainURL__index, '_blank');
      } else
      {
        window.open(var_currentURL__index, '_blank');
      }

    } else
    {

      if (
          var_testMode__index !== true
         )
      {
        window.open(var_mainURL__index);
      } else
      {
        window.open(var_currentURL__index);
      }

    }
    window.close();
  }
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function navigator_userAgent__init() 
{
  console.log("navigator_userAgent__init()");

  var_navigator_userAgent__index = "";
  var_device__index = "";
  var_system__index = ""; var_version__index = ""; var_architecture__index = "";
  var_browser__index = "";

  var_var_navigator_userAgent__index = navigator.userAgent;
  
  if (/Android|iPhone/i.test(navigator_userAgent)) 
  {
    var_device__index = "Mobile";
    if (/Android/i.test(navigator_userAgent)) 
    {
      var_system__index = "Android";
      if (/Android 13/i.test(navigator_userAgent)) 
      {
        var_version__index = 13;
      } else 
      if (/Android 12/i.test(navigator_userAgent)) 
     {
        var_version__index = 12;
     } else 
     if (/Android 11/i.test(navigator_userAgent)) 
     {
        var_version__index = 11;
     } else 
     if (/Android 10/i.test(navigator_userAgent)) 
     {
        var_version__index = 10;
     } else 
     if (/Android 9/i.test(navigator_userAgent)) 
     {
        var_version__index = 9;
     } else 
     if (/Android 8/i.test(navigator_userAgent)) 
     {
        var_version__index = 8;
     } else 
     if (/Android 7/i.test(navigator_userAgent)) 
     {
        var_version__index = 7;
     } else 
     if (/Android 6/i.test(navigator_userAgent)) 
     {
        var_version__index = 6;
     } else 
     if (/Android 5/i.test(navigator_userAgent)) 
     {
        var_version__index = 5;
     } else 
     if (/Android 4/i.test(navigator_userAgent)) 
     {
        var_version__index = 4;
     } else 
     if (/Android 3/i.test(navigator_userAgent)) 
     {
        var_version__index = 3;
     } else 
     if (/Android 2/i.test(navigator_userAgent)) 
     {
        var_version__index = 2;
     } else 
     if (/Android 1/i.test(navigator_userAgent)) 
     {
        var_version__index = 1;
     } else
     {
        var_version__index = "";
     }

     var_architecture__index = "";
    }
  } else 
  if (/Tablet|iPad/i.test(navigator_userAgent)) 
  {
    var_device__index = "Tablet";
  } else 
  if (/TV|Television/i.test(navigator_userAgent)) 
  {
    var_device__index = "Televition";
  } else 
  if (/Windows|Mac|Linux/i.test(navigator_userAgent)) 
  {
    var_device__index = "Desktop";
    if (/Windows/i.test(navigator_userAgent)) 
    {
      var_system__index = "Windows";
      if (/NT 11./i.test(navigator_userAgent)) 
      {
        var_version__index = 11;
      } else 
      if (/NT 10./i.test(navigator_userAgent)) 
      {
        var_version__index = 10;
      } else 
      if (/NT 9./i.test(navigator_userAgent)) 
      {
        var_version__index = 9;
      } else 
      if (/NT 8./i.test(navigator_userAgent)) 
      {
        var_version__index = 8;
      } else 
      if (/NT 7./i.test(navigator_userAgent)) 
      {
        var_version__index = 7;
      } else 
        if (/NT 6./i.test(navigator_userAgent)) 
      {
        var_version__index = 6;
      } else 
      if (/NT 5./i.test(navigator_userAgent)) 
      {
        var_version__index = 5;
      } else 
      if (/NT 4./i.test(navigator_userAgent)) 
      {
        var_version__index = 4;
      } else 
      if (/NT 3./i.test(navigator_userAgent)) 
      {
        var_version__index = 3;
      } else 
      if (/NT 2./i.test(navigator_userAgent)) 
      {
        var_version__index = 2;
      } else 
      if (/NT 1./i.test(navigator_userAgent)) 
      {
        var_version__index = 1;
      } else
      {
        var_version__index = "";
      }

      if (/Win64|x64/i.test(navigator_userAgent)) 
      {
        var_architecture__index = "x" + 64;
      } else 
      if (/Win32|x86/i.test(navigator_userAgent)) 
      {
        var_architecture__index = "x" + 86;
      } else
      {
        var_architecture__index = "";
      }
    }
  } else {
    var_device__index = "Desconocido";
  }
  if (/Ostwald/i.test(navigator_userAgent)) 
  {
    var_browser__index = "Ostwald Browser";
  } else 
  if (/Edg/i.test(navigator_userAgent)) 
  {
    var_browser__index = "Microsoft Edge";
  } else 
  if (/Chrome/i.test(navigator_userAgent)) 
  {
    var_browser__index = "Google Chrome";
  } else
  {
    var_browser__index = "Desconocido";
  }
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
  // Comprobar si Ejecuta Desde var_browser__index OSTWALD

  navigator_userAgent__init();

  if (var_browser__index === "Ostwald Browser")
  {
    var_if_browser_OSTWALD__index = true;
  } else
  {
    var_if_browser_OSTWALD__index = false;
  }

  return var_if_browser_OSTWALD__index;
}

/*  //  //  */  /*  //  //  */  /*  //  //  */  /*  //  //  */

function delete_html__index()
{
  while (document.getElementsByTagName('html')[0].firstChild) 
  {
    document.getElementsByTagName('html')[0].removeChild(document.getElementsByTagName('html')[0].firstChild);
  }

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
      var_testMode__index === true
     )
  {
    var_mainURLError__index  = var_currentURL__index;
    var_alternativeFunctions__index  = false;
  }
      
  if (
      var_currentURL__index !== var_mainURLError__index 
     )
  {
    end__index();
  }
}
