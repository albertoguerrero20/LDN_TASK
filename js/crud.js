let printer = [
  { marca: "Creality", modelo: "Ender 3v2", tipo: "FDM", material: "PLA" },
  { marca: "Creality", modelo: "Ender 3 pro", tipo: "FDM", material: "PETG" },
]

function initialize() {
  const PRINTER_FORM = document.getElementById("form");
  PRINTER_FORM.addEventListener("submit", addPrinter);

  printerTable();
}

function printerTable() {
  const PRINTER_TABLE = document.getElementById("printer-table");
  PRINTER_TABLE.innerHTML = "";

  for (let i = 0; i < printer.length; i++) {
    PRINTER_TABLE.innerHTML += `<tr><td>${printer[i].marca}</td><td>${printer[i].modelo}</td><td>${printer[i].tipo}</td><td>${printer[i].material}</td><td><button class="btn btn-danger btn-sm" onclick="deletePrinter(${i})">Eliminar</button></td></tr>`;
  }
}

function addPrinter(event) {
  event.preventDefault();
  const BRAND = document.getElementById("object-name").value;
  const MODEL = document.getElementById("printer-model").value;
  const TYPE = document.getElementById("printer-type").value;
  const MATERIAL = document.getElementById("printer-material").value;

  if ((BRAND || !BRAND == "") && (MODEL || !MODEL == "") && (TYPE || !TYPE == "") && (MATERIAL || !MATERIAL == "")) {
    printer.push({
      marca: BRAND,
      modelo: MODEL,
      tipo: TYPE,
      material: MATERIAL,
    });
    printerTable();
    document.getElementById("object-name").value = "";
    document.getElementById("printer-model").value = "";
    document.getElementById("printer-type").value = "";
    document.getElementById("printer-material").value = "";
  }
}

function deletePrinter(printerId) {
  printer.splice(printerId, 1);
  printerTable();
}

initialize(); 