
$(document).ready(function(){
  $.ajax({
    url: '/boats',
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
var result=  document.getElementById("valueEntered").value;
console.log(result);
  $.ajax({
    url: '/changeDock',
    type: 'POST',
    data: {value : result},
    success: function(response) {
      console.log("response is " + response);
      updateImage(response);
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function updateImage(response){
  var obj = JSON.parse(response);
  var value = obj.docksActive;
  console.log(obj);
  console.log(value);
  if(value == 1){
    src="/static/images/Dock00.png";
  }else if(value==2){
    src = "/static/images/Dock01.png";
  }else if(value==3){
    src="/static/images/Dock10.png";
  }else{
    src="/static/images/Dock11.png";
  }
  $("#dockImage").attr("src", src);

  console.log("src is "+ src);
}
