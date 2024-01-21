
//grid creation variable
var rightCont = document.getElementById("rightContainer");
var gridtext = document.getElementById("gridNum");
var sliderval  = document.getElementById("gridslider");

sliderval.addEventListener("input", function(){

    gridtext.textContent=sliderval.value;
    
    rightCont.innerHTML = "";

    rightCont.style.gridTemplateColumns = "repeat("+ sliderval.value + ",1fr)";
    rightCont.style.gridTemplateRows = "repeat("+ sliderval.value + ",1fr)";
    

    // creates div grid boxes and fills the columns and rows
    for(let i =1; i<=sliderval.value*sliderval.value;i++){
        var newBox = document.createElement("div");
        newBox.classList.add("gridBox");
        rightCont.appendChild(newBox);
    }
});

