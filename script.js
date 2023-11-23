
//grid creation variable

let preval = 1;
//right container variable
var rightCont = document.getElementById("rightContainer")

var buttontry = document.getElementById("try");

var sliderval  = document.getElementById("gridslider");

sliderval.addEventListener("input", function(){
    if(preval < sliderval.value){
            for(let i=preval; i<= sliderval.value;i++){
                var gridBox = document.createElement("div");
                gridBox.classList.add("gridBox");   
                rightCont.appendChild(gridBox);
                console.log(sliderval.value);
                
            }
            preval = sliderval.value;
    }else if(preval >= sliderval.value){
             var gridBox = Array.from(document.getElementsByClassName("gridBox"));
            for(let i=preval; i>= sliderval.value;i--){
                if(i!=1){
                    rightCont.removeChild(gridBox[i-1]);
                }
                console.log(sliderval.value);
                
            }
            preval = sliderval.value;
    }
});

