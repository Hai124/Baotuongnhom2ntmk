document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Create a new comment element
    const commentItem = document.createElement('li');
    commentItem.textContent = `${name}: ${comment}`;

    // Add the comment to the comments display list
    document.getElementById('commentsDisplay').appendChild(commentItem);

    // Clear the form after submission
    document.getElementById('commentForm').reset();
});