var express = require("express");
//require es una variable que busca las librerias instaladas para interpretarlas//
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el <strong>home</strong> genial!!");
}
function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989);