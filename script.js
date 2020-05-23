//alert("Wash Your Hands!");
var bgBtn = document.getElementById('bg-btn');
var bgBody = document.getElementById('body-bg');

bgBtn.addEventListener("click", bgChanger);

function bgChanger(){
  bgBody.stlye.backroundColor = "#2d3436";
}
