const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Get all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectElement = document.getElementById("selectedOption");
const totalPriceElement = document.getElementById('totalPrice');

// Set initial total price to 5000 kr
let totalPrice = 5990;
totalPriceElement.textContent = `${totalPrice} kr`;


// Add event listener to each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotalPrice);
});

// Add an event listener to the <select> element
selectElement.addEventListener("change", function() {
    // Get the selected option's value and update the total price
    const selectedOptionValue = parseInt(selectElement.value);
    totalPrice = 5990 + selectedOptionValue;
    totalPriceElement.textContent = `${totalPrice} kr`;
});

// Function to update the total price based on selected checkboxes
function updateTotalPrice() {
    // Variables to track selected options
    let customDomainPrice = 0;
    let cmsPrice = 0;
    let responsivePrice = 0;

    // Loop through all checkboxes to get the price of selected options
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            if (checkbox.name === 'domain') {
                customDomainPrice = parseInt(checkbox.value);
            } else if (checkbox.name === 'cms') {
                cmsPrice = parseInt(checkbox.value);
            } else if (checkbox.name === 'responsive') {
                responsivePrice = parseInt(checkbox.value);
            }
        }
    });

    // Calculate total price range for selected options
    let minPrice = 5990 + customDomainPrice + cmsPrice + responsivePrice;

    if (customDomainPrice > 0) {
        if (cmsPrice > 0 || responsivePrice > 0) {
            let maxPrice = minPrice + 900;
            totalPriceElement.textContent = `${minPrice} kr - ${maxPrice} kr`;
        } else {
            let maxPrice = minPrice + 1000;
            totalPriceElement.textContent = `${minPrice} kr - ${maxPrice} kr`;
        }
    } else {
        totalPriceElement.textContent = `${minPrice} kr`;
    }
}

// Get the <select> element
const selectElement1 = document.getElementById("selectedOption");

// Get the <p> element where you want to display the selected option
const selectedOptionText = document.getElementById("selectedOptionText");

// Add an event listener to the <select> element
selectElement1.addEventListener("change", function() {
    // Get the selected option's text and display it
    const selectedOption = selectElement.options[selectElement.selectedIndex].text;
    selectedOptionText.textContent = `${selectedOption}`;
});