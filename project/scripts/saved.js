document.addEventListener('click', function(event) {
    if (event.target.closest('#savedButton')) {
        console.log('Save button clicked');
        // Add your save functionality here
    }
});