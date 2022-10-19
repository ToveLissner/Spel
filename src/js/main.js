let firstBox = document.getElementById('firstQuestionBox');
let firstNr = '';
let thirdNr = '';
let secondBox = document.getElementById('secondQuestionBox');
let correctNumber = document.getElementById('correctNumber');

const button = document.getElementById('button');

function saveButton(){
    firstNr = firstBox.value;
    firstBox.value = '';
}

function doSearch(){

    let secondNr = secondBox.value;
    
    if(firstNr > secondNr){
        console.log("talet är för lågt");
    } else{
        if( firstNr < secondNr){
            console.log("talet är för högt");
        }else{
            console.log("Du hitta rätt tal!!");
        }
    }
}