var menu = document.querySelector("#menu");

var menuItems = [
  {"item": "Tipos de Gastos", "active": false},
  {"item": "Detalle de Gastos", "state": "detalle", "active": true},
  {"item": "Gastos totales", "state": "totales", "active": false}
];

var menuContext = {menuItems};
menu.innerHTML = PriceApp.menu(menuContext);

var appContent = document.querySelector("#appContent");
var blockInfo = {
  "detale": [
    {"blockName": "Gastos Mensual", "blockHeight": "150px"},
    {"blockName": "Detalle de Gastos", "blockHeight": "350px"},
  ],
  "totales": [
    {"blockName": "Filtros", "blockHeight": "200px"},
    {"blockName": "Gastos Totales por año", "blockHeight": "300px"},
  ]
}


function getStateTitle(state) {
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[i].state === state) {
      return menuItems[i].item;
    }
  }
}

function changeState(state) {
  var appContenContext = {"state": state, "title": getStateTitle(state)};
  appContent.innerHTML = PriceApp.content(appContenContext);
  var stagePage = document.querySelector("#" + state);
  stagePage.innerHTML = PriceApp[state]();

  $(".menuLinks").removeClass("menuActive");
  $("#" + state + "Link").addClass("menuActive");
}

changeState("detalle");
$(".button-collapse").sideNav();

