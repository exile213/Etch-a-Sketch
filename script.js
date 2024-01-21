
//grid creation variable
let preval = 1;
//right container variable
var rightCont = document.getElementById("rightContainer");
var gridtext = document.getElementById("gridNum");

var buttontry = document.getElementById("try");

var sliderval  = document.getElementById("gridslider");


sliderval.addEventListener("input", function(){

    gridtext.textContent=sliderval.value;
    rightCont.innerHTML = "";
    for(let i =1; i<=sliderval.value;i++){
        var newBox = document.createElement("div");
        newBox.classList.add("gridBox");
        rightCont.appendChild(newBox);


    }
});

