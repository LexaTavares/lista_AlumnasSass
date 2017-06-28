var api= {
  url:"http://laboratoria.cuadra.co:9339/api/v1/students/"
}

var seccionVacia=$("#espacioVacio");

var traerLista= function(){
  $.getJSON(api.url, function (listas){
    listas.forEach(crearLista);
  });
};

var crearLista=function(lista){
  var nombre= lista.name;
  var pname= lista.pLastName;
  var mname= lista.mLastName;
  var id= lista._id;
  var ol = $("<ol />")

  var nombreli= $("<li />");
  nombreli.text(nombre);
  var apellidoP= $("<li />");
  apellidoP.text(pname);
  var apellidoM= $("<li />");
  apellidoM.text(mname);

  ol.append(nombre + " " + pname + " " + mname);
  seccionVacia.append(ol);
}

var cargarPagina=function(){
  traerLista();
}
$(document).ready(cargarPagina);
