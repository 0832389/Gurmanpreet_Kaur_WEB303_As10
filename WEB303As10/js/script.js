$(document).ready(function () {
    // Check if the 'countries' array is defined and contains data
    if (typeof countries !== 'undefined' && countries.length > 0) {
        // Populate the country dropdown
        const countryDropdown = $('#country');
        countries.forEach(function (country) {
            countryDropdown.append(`<option value="${country.code}">${country.name}</option>`);
        });
    } else {
        console.error("The 'countries' array is not defined or empty.");
    }

    // Function to check if all form requirements are met
    function checkFormRequirements() {
        const username = $('#username').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const termsCheckbox = $('#termsCheckbox').prop('checked');
        const selectedCountry = $('#country').val();

        // Enable or disable the submit button based on requirements
        $('#submitButton').prop('disabled', !(username && password.length >= 12 && confirmPassword === password && termsCheckbox && selectedCountry));
    }

    // Event listeners for form controls
    $('#username, #password, #confirmPassword, #termsCheckbox, #country').on('input change', function () {
        checkFormRequirements();
    });

    // Form submission
    $('#registrationForm').submit(function (event) {
        event.preventDefault(); // Prevent form from redirecting

        // Display welcome message
        const username = $('#username').val();
        const selectedCountry = $('#country option:selected').text();
        $('#welcomeMessage').text(`Welcome ${username}! The country code you selected is ${selectedCountry}`).show();
    });
});


