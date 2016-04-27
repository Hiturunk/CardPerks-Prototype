var cardArray = [];
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
  this.balance = parseInt(balance);
  this.limit = parseInt(limit);
  this.billingDate = billingDate;
  this.nickName = nickName;
  this.incrementBalance = function(v){
    this.balance = this.balance + v;
  }
  this.decrementBalance = function(v){
    this.balance = this.balance - v;
  }
}
function refreshTable(){
  var a = checkForTable();
  if(a==0){
    removeTable();
    rezTable();
  }
  else{
    console.log("Not necessary to refresh.");
    rezTable();
  }
}
function addCard(){
  var b = prompt("Please give a card balance","0");
  var l = prompt("Please give a card limit","0");
  var bD = prompt("Please give a billing date","1/1/2000");
  var nN = prompt("Please give a descriptive name","Regions Checking");
  var cardInstance = new cardConstructor(b,l,bD,nN);
  cardArray.push(cardInstance);
  refreshTable();
}
function start(){
  var a = checkForWebStorage();
  if(a==0){
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
    menuBar.appendChild(rezIcon);
    menuBar.appendChild(addCardIcon);
    container.appendChild(menuBar);
    document.body.appendChild(container);
    }
  else{
    alert("Error, unable to initialize.");
  }
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
}

  function rezTable(){
    var a = checkForTable();
    if(a==1){
      var target = document.getElementById("container");
      var table = document.createElement("table");
        table.id="cardTable";
      for(i=0;i<cardArray.length;i++){
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cardEx = cardArray[i];
        var addButton = document.createElement("button");
          addButton.setAttribute("onclick","addBalance()")
          addButton.innerHTML = "+ Balance";
        var subtractButton = document.createElement("button");
          subtractButton.setAttribute("onclick","subtractBalance()");
          subtractButton.innerHTML = "- Balance";
        cell.innerHTML = "Name:" + cardEx.nickName + " " + "Limit:" + cardEx.limit + " " + "Balance:" + cardEx.balance; + " " + "Billing Date:" + cardEx.billinDate; " ";
        cell.appendChild(addButton);
        cell.appendChild(subtractButton);
        row.appendChild(cell);
        table.appendChild(row)
      }
      target.appendChild(table);
    }
    else{
      console.log("table already exists");
      removeTable();
    }
}
