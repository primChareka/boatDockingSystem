//STRAT MY CODE HERE
var x=0;
var y=0;
$(document).ready(function(){
  $.ajax({
    url: '/daysOfWeek',
    type: 'GET',
    success: function(response) {
      console.log(response);
      updatePage(response);
    },
    error: function(error) {
      console.log(error);
    }
  });
});

function changeToRed(){
var xVal = document.getElementById("xVal").value;
var yVal = document.getElementById("yVal").value;
  $.ajax({
    url: '/changeSched',
    type: 'POST',
    data: {x: xVal, y:yVal},
    success: function(response) {
      console.log("from red response is " + response);
      updatePage(response);
    },
    error: function(error) {
      console.log(error);
    }
  });
}

var myFunction = function() {
  table = document.getElementById("myTable");
  result = table.rows[x];
  c = result.cells[y];
  c.style.backgroundColor = "red";
  x = x +1;
  y = y+1;
  console.log("Call with x = "+x);
};

function updatePage(response){
  console.log(response);
  var obj = JSON.parse(response);
  var result = obj.data;
  console.log(result);
  var row;
  table = document.getElementById("myTable");
  for(var i=1; i<7; i++){
    row = table.rows[i];
    for(var j=1; j<8; j++){
      console.log(result[i-1][j-1]);
      if(result[i-1][j-1]==0){
        row.cells[j].style.backgroundColor = "green";
        row.cells[j].innerHTML="FREE";
      }else{
        row.cells[j].style.backgroundColor = "red";
        row.cells[j].innerHTML="DOCKED";
      }
    }
  }
}
//setInterval(myFunction, 1000);
