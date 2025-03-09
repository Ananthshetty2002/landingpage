document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("click").addEventListener("click", function() {
        alert("Button Clicked!");
    });
});
console.log('JS is loaded!');

// Selects the button using its ID and adds a click event listener
document.getElementById("click-btn").addEventListener("click", function() {
    alert("You clicked the button!");  
    // Displays an alert box when the button is clicked
});

// Adds a scroll event listener to change the navbar color on scroll
window.addEventListener("scroll", function() {
    let navbar = document.querySelector("nav");  
    // Selects the <nav> element

    if (window.scrollY > 50) {  
        // Checks if the page is scrolled more than 50 pixels
        navbar.classList.add("scrolled");  
        // Adds the "scrolled" class to change the navbar background
    } else {
        navbar.classList.remove("scrolled");  
        // Removes the "scrolled" class when at the top of the page
    }
});
document.getElementById('contact-form').addEventListener('contact',function(event){
    event.preventDefault();  // Stops form from refreshing the page
    alert("Thank you for your message! We'll get back to you soon.");
});
