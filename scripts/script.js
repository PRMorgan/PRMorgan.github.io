alert("Hullo, amigo!");

$(".jstesting").hover(function(){
  $(this).css("background-color", "yellow");
  }, function(){
  $(this).css("background-color", "pink");
});

document.getElementById("jstest").addEventListener("mouseover", mouseOver);
document.getElementById("jstest").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("jstest").style.color = "red";
}

function mouseOut() {
  document.getElementById("jstest").style.color = "black";
}