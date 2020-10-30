var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var cauchin = new Pakiman("Cauchin", 100, 30, "tierra");
var pokacho = new Pakiman("Pokacho", 80, 50, "aire");
var tocinauro = new Pakiman("Tocinauro", 120, 40, "grasa")

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30, "tierra"));
coleccion.push(new Pakiman("Pokacho", 80, 50, "aire"));
coleccion.push(new Pakiman("Tocinauro", 120, 40, "grasa"));

for(var freddito of coleccion)
{
  freddito.mostrar();
}
