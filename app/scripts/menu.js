var menu = document.querySelector("#menu");

var menuItems = [
  {"item": "Tipos de Gastos","state":"tipo", "active": false},
  {"item": "Detalle de Gastos", "state": "detalle", "active": true},
  {"item": "Gastos totales", "state": "totales", "active": false}
];

var menuContext = {menuItems};
menu.innerHTML = PriceApp.menu(menuContext);

var appContent = document.querySelector("#appContent");
var blockInfo = {
  "detalle": [
    {"blockName": "Gastos Mensual", "blockHeight": "150px"},
    {"blockName": "Detalle de Gastos", "blockHeight": "350px"},
  ],
  "totales": [
    {"blockName": "Filtros", "blockHeight": "200px"},
    {"blockName": "Gastos Totales por año", "blockHeight": "300px"},
  ],
  "tipo": [
    {"blockName": "Tipo de Gastos", "blockHeight": "200px"},
    {"blockName": "Categorias", "blockHeight": "300px"},
  ]
}


function getStateTitle(state) {
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].state === state) {
      return menuItems[i].item;
    }
  }
}

function combo() {
  $('select').material_select();

  $("button").click(function () {

    $("select").empty().html(' ');

    var value = "New value";
    $("select").append(
      $("<option></option>").attr("value", value).text(value)
    );

    $("select").material_select('update');
    $("select").closest('.input-field').children('span.caret').remove();
  });
};

function changeState(state) {
  var appContenContext = {"state": state, "title": getStateTitle(state)};
  appContent.innerHTML = PriceApp.content(appContenContext);
  var stagePage = document.querySelector("#" + state);
  stagePage.innerHTML = PriceApp[state]();

  $(".menuLinks").removeClass("menuActive");
  $("#" + state + "Link").addClass("menuActive");
  if (state === "detalle") {
    var detalleInf = document.querySelector("#detalleInf");
    var detInf = [
      {"name": "Total Mes", "valor": 500},
      {"name": "Gasto Maximo", "valor": 200},
      {"name": "Gasto Minimo", "valor": 100},
    ];
    detalleInf.innerHTML = PriceApp.detalleInf({gastos: detInf});
    var tableGastoInf = document.querySelector("#gastosTable");
    var gastosInf = [
      {
        "categoria": "Gastos Fijos",
        "subcategoria": "Telefono",
        "fecha": "2017-09-14",
        "detalle": "Gasto 1",
        "valor": "100"
      },
      {"categoria": "Formacion", "subcategoria": "Cursos", "fecha": "2017-09-14", "detalle": "Gasto 2", "valor": "200"},
      {
        "categoria": "Transforme",
        "subcategoria": "Combustible",
        "fecha": "2017-09-14",
        "detalle": "Gasto 3",
        "valor": "200"
      },
    ];
    tableGastoInf.innerHTML = PriceApp.tableGastos({gastost: gastosInf});
    combo();
  }else  if (state ==="tipo"){
    combo();
  }
}

changeState("detalle");
$(".button-collapse").sideNav();


