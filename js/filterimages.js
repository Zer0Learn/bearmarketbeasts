function filterImages(category) {
    var categories = document.getElementsByClassName('category');
    for (var i = 0; i < categories.length; i++) {
        // Check if the current category matches the filter
        if (category === 'all' || categories[i].getAttribute('data-category') === category) {
            categories[i].style.visibility = 'visible'; // Make the category visible
            categories[i].style.height = 'auto'; // Set height to auto to display the content
            categories[i].style.overflow = 'visible'; // Make overflow visible
        } else {
            categories[i].style.visibility = 'hidden'; // Hide the category
            categories[i].style.height = '0'; // Set height to 0 to hide the content
            categories[i].style.overflow = 'hidden'; // Hide the overflow
        }
    }
}


