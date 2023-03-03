let selectedValue;

let rateButtons = document.getElementsByClassName("rate-button");
let rateContent = document.getElementById("rate-content");
let thankYouContent = document.getElementById("thank-you-content");
let selectedRate = document.getElementById("selected-rate");

// Initial Hide 'Thank You Content'
thankYouContent.classList.add('hide-content');

// Select Rate Process
for( var i = 0; i < rateButtons.length; i++){
    rateButtons[i].addEventListener('click', function(event){

        // Set the selected value.
        selectedValue = event.target.value;

        // Call update class function.
        updateRateButton();
    });
}

function updateRateButton(){
    for( var i = 0; i < rateButtons.length; i++){

        // If it's the selected rate, change the class.
        if(rateButtons[i].value == selectedValue){
            rateButtons[i].classList.remove("unselected");
            rateButtons[i].classList.add("selected");
        } else { // If it's not the selected rate, return to it's default class.
            rateButtons[i].classList.add("unselected");
            rateButtons[i].classList.remove("selected");
        }
    }
}

// Submit Process
document.querySelector(".submit-button").addEventListener("click", function(event){

    // Hide the 'Rate' content.
    rateContent.classList.add('hide-content');

    // Show the 'Thank You' content.
    thankYouContent.classList.remove('hide-content');

    // Display the selected value.
    selectedRate.innerText = selectedValue;
});