var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOk: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var crd = {
  url: "cerdo.png",
  cargaOK: false
};
var tcls = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var cantidad = aleatorio(1, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

crd.imagen = new Image();
crd.imagen.src = crd.url;
crd.imagen.addEventListener("load", cargarCrd);
document.addEventListener("keydown", moverCrd);

var posCrdX;
var posCrdY;
var movimientoCrd = 5;

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCrd()
{
  crd.cargaOK = true;
  dibujar();
}


function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    console.log(cantidad + " vacas");
    for (var v=0; v<cantidad; v++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      var x = x * 70;
      var y = y * 70;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if (crd.cargaOK)
  {
    var x;
    var y;
    x = aleatorio(0, 420);
    y = aleatorio(0, 420);
    posCrdX = x;
    posCrdY = y;
    papel.drawImage(crd.imagen, x, y);
  }
}

function moverCrd(evento)
{
  if(evento.keyCode == tcls.UP)
  {
    if(posCrdY >= 0)
    {
      posCrdY = posCrdY - movimientoCrd;
    }
    else
    {
      posCrdY = posCrdY;
    }
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(crd.imagen, posCrdX, posCrdY);
  }
  if(evento.keyCode == tcls.DOWN)
  {
    if(posCrdY >= 0)
    {
      posCrdY = posCrdY + movimientoCrd;
    }
    else
    {
      posCrdY = posCrdY;
    }
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(crd.imagen, posCrdX, posCrdY);
  }
  if(evento.keyCode == tcls.LEFT)
  {
    if(posCrdX >= 0)
    {
      posCrdX = posCrdX - movimientoCrd;
    }
    else
    {
      posCrdX = posCrdX;
    }
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(crd.imagen, posCrdX, posCrdY);
  }
  if(evento.keyCode == tcls.RIGHT)
  {
    if(posCrdX >= 0)
    {
      posCrdX = posCrdX + movimientoCrd;
    }
    else
    {
      posCrdX = posCrdX;
    }
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(crd.imagen, posCrdX, posCrdY);
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
