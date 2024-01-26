//Global Variables
let colorVar = "";
let rightCont = document.getElementById("rightContainer");
let gridtext = document.getElementById("gridNum");
let sliderval  = document.getElementById("gridslider");
let colorPicker = document.getElementById("colorPicker");

//Predefined function calls
changeCol();



//EVENT LISTENER SECTION---------------------------------

// if user uses the slider
sliderval.addEventListener("input", function(){
        createGrid();
});//----------------------------------------------

//if user uses color picker
colorPicker.addEventListener("input",function(){
    //sets the color of the color picker to a variable
    colorVar = colorPicker.value;

});//---------------------------------------------------------



//FUNCTIONS SECTION--------------------------------

//GRIDBOX CREATION FUNCTION------------------------------

function createGrid(){
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
    
        //Calls the changecolor function
        changeCol();
    };//-------------



//GRIDBOX CLICK CHANGE COLOR FUNCTION---------------------------------------
function changeCol() { 
    var gridBox =  document.getElementsByClassName('gridBox');
    for(let i =0; i< gridBox.length;i++){
        gridBox[i].addEventListener('mousedown',function(){
            gridBox[i].style.backgroundColor = colorVar;
        });
    };
 }

//----------------------------------------------------------------------
