// Example: Simple click event for the "Read More" links
document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert("This would take you to the full article.");
    });
});

