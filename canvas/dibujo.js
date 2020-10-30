var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#B90E0A";
  var colo = "#99EDC3";
  var espacio = ancho / lineas;

  "así se escribe un ciclo for(l=0;l<lineas;l++)"

  while(l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("linea" + l);
    l++;
  }

  for(l=0; l<lineas; l++)
  {
    yi = 300 - (espacio * l);
    xf = 300 - [espacio * (l + 1)];
    dibujarLinea(colo, 300, yi, xf, 0);
    console.log("raya" + l);
  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
  dibujarLinea(colo, 299, 1, 299, 299);
  dibujarLinea(colo, 1, 1, 299, 1);
}
