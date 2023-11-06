
//grid creation variable


//right container variable
var rightCont = document.getElementById("rightContainer")

var buttontry = document.getElementById("try");

var sliderval  = document.getElementById("gridslider");

sliderval.addEventListener("input", function(){
    for(let i=1; i<= sliderval.value;i++){
        var gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        rightCont.appendChild(gridBox);
        console.log("created grid");
    }

});

