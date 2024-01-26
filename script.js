//Global Variables

//grid creation variables
let rightCont = document.getElementById("rightContainer");
let gridtext = document.getElementById("gridNum");
let sliderval  = document.getElementById("gridslider");

//Button variables
let buttonActive=0;
let colorBut = document.getElementById("colorBut");
let randColorBut = document.getElementById("randColorBut");
let eraseBut = document.getElementById("eraseBut");
let clearBut =  document.getElementById("clearBut");


//Colors Variables
let colorPicker = document.getElementById("colorPicker");
let colorVar = "";


//Predefined function calls
changeCol();



//EVENT LISTENER SECTION---------------------------------

// if user uses the slider
sliderval.addEventListener("input", function(){
        createGrid();
});

//if user uses color picker
colorPicker.addEventListener("input",function(){
    //sets the color of the color picker to a variable
    colorVar = colorPicker.value;
});

//if user clicks on the color button
colorBut.addEventListener('click',function(){
    //makes the button remain active after click
    buttonActive =1;
    activeButton();
});

//if user clicks on the random color button
randColorBut.addEventListener('click',function(){
    //makes the button remain active after click
    buttonActive =2;
    activeButton();
});

//if user clicks on the erase button
eraseBut.addEventListener('click',function(){
    //makes the button remain active after click
    buttonActive =3;
    activeButton();
});

//if user clicks on the erase button
clearBut.addEventListener('click',function(){
    //makes the button remain active after click
    buttonActive =4;
    activeButton();
});





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


//BUTTON ACTIVE FUNCTION
function activeButton() {
    switch(buttonActive){
        case 1:
            colorBut.className = "buttons-active";
            randColorBut.className ="buttons";
            eraseBut.className ="buttons";
            clearBut.className ="buttons";
            break;
        
        case 2:
            colorBut.className = "buttons";
            randColorBut.className ="buttons-active";
            eraseBut.className ="buttons";
            clearBut.className ="buttons";
            break;

        case 3:
            colorBut.className = "buttons";
            randColorBut.className ="buttons";
            eraseBut.className ="buttons-active";
            clearBut.className ="buttons";
            break;
        
        case 4:
            colorBut.className = "buttons";
            randColorBut.className ="buttons";
            eraseBut.className ="buttons";
            clearBut.className ="buttons-active";
            break;
    }
}