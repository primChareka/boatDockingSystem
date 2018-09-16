
$(document).ready(function(){
  $.ajax({
    url: 'helper/readBoatsDocked.php',
    type: 'GET',
    success: function(response) {
      console.log("response is " + response);
      updateImage(response);
    },
    error: function(error) {
      console.log(error);
    }
  });
});

function insert(){
var newDockVal=  document.getElementById("valueEntered").value;
console.log(newDockVal);
  $.ajax({
    url: 'helper/updateDocks.php',
    type: 'POST',
    data: {value : newDockVal},
    success: function(response) {
      console.log("response is " + response);
      updateImage(response);
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function updateImage(value){
  console.log(value);
  if(value == 1){
    src="/hackNorth/images/Dock00.png";
  }else if(value==2){
    src = "/hackNorth/images/Dock01.png";
  }else if(value==3){
    src="/hackNorth/images/Dock10.png";
  }else{
    src="/hackNorth/images/Dock11.png";
  }
  $("#dockImage").attr("src", src);
  console.log("src is "+ src);
}
