var gasolina, etanol;

function calca() {
  etanol = Number(frdados.kmletaa.value.replace(",", "."));
  gasolina = Number(frdados.kmlgasa.value.replace(",", "."));
  distancia = Number(perc.txtpercurso.value.replace(",", "."));


  qtetanol= distancia / etanol;
  qtgasolina = distancia / gasolina;

  var ltetanol = document.getElementById("ltetaa");
  ltetanol.innerHTML = "Quantidade de litros de Etanol gastos: " + qtetanol.toFixed(3);

  var ltgasol = document.getElementById("ltgasa");
  ltgasol.innerHTML = "Quantidade de litros de Gasolina gastos: " + qtgasolina.toFixed(3);
}

function calcb() {
  etanol = Number(frdados.kmletab.value.replace(",", "."));
  gasolina = Number(frdados.kmlgasb.value.replace(",", "."));
  distancia = Number(perc.txtpercurso.value.replace(",", "."));

  qtetanol = distancia / etanol;
  qtgasolina = distancia / gasolina;

  var ltetanol = document.getElementById("ltetab");
  ltetanol.innerHTML = "Quantidade de litros de Etanol gastos: " + qtetanol.toFixed(3);

  var ltgasol = document.getElementById("ltgasb");
  ltgasol.innerHTML = "Quantidade de litros de Gasolina gastos: " + qtgasolina.toFixed(3);
}

function limpara() {
  var ltetanol = document.getElementById("ltetaa");
  ltetanol.innerHTML = "Quantidade de litros de Etanol gastos: ";

  var ltgasol = document.getElementById("ltgasa");
  ltgasol.innerHTML = "Quantidade de litros de Gasolina gastos: ";
}

function limparb() {
  var ltetanol = document.getElementById("ltetab");
  ltetanol.innerHTML = "Quantidade de litros de Etanol gastos: ";

  var ltgasol = document.getElementById("ltgasb");
  ltgasol.innerHTML = "Quantidade de litros de Gasolina gastos: ";
}
