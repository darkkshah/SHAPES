var circlebtn = document.getElementById("circlebtn");
var squarebtn = document.getElementById("squarebtn");
var trainglebtn = document.getElementById("trainglebtn");
var shapescontainer = document.getElementById("shapecontainer");

circlebtn.addEventListener("click", function(){
    shapescontainer.innerHTML = '<div class = "circle"></div>';
});

squarebtn.addEventListener("click", function(){
    shapescontainer.innerHTML = '<div class = "square"> </div>';
});

trainglebtn.addEventListener("click", function(){
    shapescontainer.innerHTML = '<div class = "traingle"> </div>';
});