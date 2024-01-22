//Global Variables
let colorVar = "";

//GRID BOX CREATION SECTION---------------------
var rightCont = document.getElementById("rightContainer");
var gridtext = document.getElementById("gridNum");
var sliderval  = document.getElementById("gridslider");

sliderval.addEventListener("input", function(){
    //shows the slidervalue as text
    gridtext.textContent=sliderval.value +" x "+ sliderval.value;
    
    //resets the and removes any class in the container
    rightCont.innerHTML = "";

    //Creates rows and columns based on the slidervalue
    rightCont.style.gridTemplateColumns = "repeat("+ sliderval.value + ",1fr)";
    rightCont.style.gridTemplateRows = "repeat("+ sliderval.value + ",1fr)";
    

    // creates div grid boxes and fills the columns and rows
    for(let i =1; i<=sliderval.value*sliderval.value;i++){
        var newBox = document.createElement("div");
        newBox.classList.add("gridBox");
        rightCont.appendChild(newBox);
    }
});//----------------------------------------------


//COLOR PICKER SECTION-------------------------------------
var colorPicker = document.getElementById("colorPicker");

//if user uses color picker
colorPicker.addEventListener("input",function(){
    //sets the color of the color picker to a variable
    colorVar = colorPicker.value;

});//---------------------------------------------------------


