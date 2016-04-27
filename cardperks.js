function checkForWebStorage(){
  if(typeof(Storage) !== "undefined") {
    return 0;
  }
  else {
    alert("Your Browser does not support HTML5!");
    return 1;
  }
}
function cardConstructor(balance,limit,billingDate,nickName){
  this.balance = balance;
  this.limit = limit;
  this.billingDate = billingDate;
  this.nickName = nickName;
}
function addCard(){
  var b = prompt("Please give a card balance","0");
  var l = prompt("Please give a card limit","0");
  var bD = prompt("Please give a billing date","1/1/2000");
  var nN = prompt("Please give a descriptive name","Regions Checking");
  var cardInstance = new cardConstuctor(b,l,bD,nN);
}
function start(){
  var container = document.createElement("div");
    container.id="container";
  var menuBar = document.createElement("div");
    menuBar.id="menuBar";
  var rezIcon = document.createElement("img");
    rezIcon.src="toggleTable.jpg";
    rezIcon.setAttribute("onclick","rezTable()");
  var addCardIcon = document.createElement("img");
    addCardIcon.src="addCardIcon.jpg";
    addCardIcon.setAttribute("onclick","addCard()");
  var hideIcon = document.createElement("img");
    hideIcon.src="hideIcon.jpg";
    hideIcon.setAttribute("onclick","hideTable()");
  menuBar.appendChild(rezIcon);
  menuBar.appendChild(addCardIcon);
  container.appendChild(menuBar);
  document.body.appendChild(container);
}
function checkForTable(){
  if(document.getElementById("cardTable")){
    return 0;
  }
  else {
    return 1;
  }
}
function removeTable(){
  if(checkForTable()==0){
    var target = document.getElementById("cardTable");
    target.parentNode.removeChild(target);
    console.log("Table removed");
  }
  else {
    console.log("No table to remove.");
  }

    function rezTable(){
      var target = document.getElementById("container");
      var table = document.createElement("table");
      table.id="cardTable";
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      row.appendChild(cell);
      table.appendChild(row);
      target.appendChild(table);
}
}
