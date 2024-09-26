// script.js

// Alert when the page is fully loaded
window.onload = function() {
    alert("Welcome to Fight Club!");
};

// Log message on header click
document.querySelector('header').addEventListener('click', function() {
    console.log("Header clicked!");
});

// script.js

// Function to display rules in an alert
function showRules() {
    const rules = [
        "No fighting in the street.",
        "No fighting in public places.",
        "No fighting in the house.",
        "No fighting in the car.",
        "No fighting in the bathroom.",
        "No fighting in the bedroom.",
        "No fighting in the kitchen.",
        "If you break the rules, you will be banned from Fight Club.",
        "First rule of Fight Club is: You do not talk about Fight Club.",
        "Second rule of Fight Club is: You do not talk about Fight Club."
    ];
    alert(rules.join('\n'));
}

// Add event listener to call showRules function on page load
window.onload = function() {
    const button = document.createElement('button');
    button.textContent = "Show Rules";
    button.onclick = showRules;
    document.getElementById('rules').appendChild(button);
};

// script.js

// Function to display a summary of Fight Club
function showSummary() {
    const summary = "Fight Club is a place where people can register and fight each other. " +
                    "It explores themes of modern masculinity, consumerism, and societal pressures.";
    alert(summary);
}

// Add event listener to call showSummary function on page load
window.onload = function() {
    const button = document.createElement('button');
    button.textContent = "Show Summary";
    button.onclick = showSummary;
    document.getElementById('about').appendChild(button);
};

// script.js

// Function to handle form submission
document.getElementById('Fight-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const fighter = document.getElementById('fighter').value;
    const opponent = document.getElementById('opponent').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;

    // Create fight details element
    const fightDetails = document.createElement('div');
    fightDetails.classList.add('fight-details');
    fightDetails.innerHTML = `
        <br>
        <h3 style="color:cyan; text-decoration:underline">Fight Registered:</h3>
        <p ><strong>Fighter:</strong> ${fighter}</p>
        <p><strong>Opponent:</strong> ${opponent}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Location:</strong> ${location}</p>
    `;

    // Append fight details to the main section
    document.getElementById('register').appendChild(fightDetails);

    // Clear the form fields
    document.getElementById('Fight-form').reset();
});