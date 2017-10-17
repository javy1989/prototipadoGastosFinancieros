var menu=document.querySelector("#menu");

var menuItems=[
  {"item":"Tipos de Gastos"},
  {"item":"Detalle de Gastos"},
  {"item":"Gastos totales"},
];

var menuContext={menuItems};
menu.innerHTML=PriceApp.menu(menuContext);
