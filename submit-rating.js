function submitRating(rating) {
    divSelector = document.getElementById('rating-selector');
    divResponse = document.getElementById('rating-response');
    output = document.getElementById('output');

    if (!rating) {
        alert('Select a rating!');
    } else {
        divSelector.classList.add('hide');
        divResponse.classList.remove('hide');
        output.value = rating;
    }
}
