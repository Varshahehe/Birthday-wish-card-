document.addEventListener("DOMContentLoaded", function() {
    // Set the friend's name dynamically
    document.getElementById("friend-name").textContent = "Jasmine"; // Change to your friend's name

    function revealMessage() {
        const surpriseContent = document.getElementById("surprise-content");
        surpriseContent.style.display = "block"; // Show the surprise content
    }

    // Make sure the function is accessible
    window.revealMessage = revealMessage; 
});
