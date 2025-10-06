// Function to toggle the visibility of the flashcard answer
function toggleCard(buttonElement) {
    // Find the closest flashcard container (the parent element)
    const flashcard = buttonElement.closest('.flashcard'); 
    
    // Find the answer element inside that container
    const answer = flashcard.querySelector('.back'); 
    
    // Toggle the 'hidden' class to show/hide the answer
    answer.classList.toggle('hidden'); 

    // Optional: Change the button text
    if (answer.classList.contains('hidden')) {
        buttonElement.textContent = 'Show Answer';
    } else {
        buttonElement.textContent = 'Hide Answer';
    }
}
