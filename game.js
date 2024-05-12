var heartIcons = document.querySelectorAll('.heart-icon');

// Add click event listener to each heart icon
heartIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Toggle the class to apply pink color
        this.classList.toggle('clicked');
    });
});
function toggleCommentSection(icon) {
    var commentSection = icon.parentElement.nextElementSibling;
    if (commentSection.style.display === 'block') {
        commentSection.style.display = 'none';
    } else {
        commentSection.style.display = 'block';
    }
}

// Add event listener to all chat icons
var chatIcons = document.querySelectorAll('.chat-icon');
chatIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        toggleCommentSection(icon);
    });
});

// Function to post comment
function postComment(button) {
    var commentSection = button.parentElement;
    var commentText = commentSection.querySelector('textarea').value;

    // Clear textarea
    commentSection.querySelector('textarea').value = '';

    // Create new comment element
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    var commentTextElement = document.createElement('span');
    commentTextElement.textContent = commentText;
    commentElement.appendChild(commentTextElement);

    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        commentElement.remove();
    };
    commentElement.appendChild(deleteButton);

    // Append comment to comments section
    var commentsContainer = commentSection.querySelector('.comments');
    commentsContainer.appendChild(commentElement);
}

document.addEventListener('DOMContentLoaded', function() {
    const sendIcons = document.querySelectorAll('.send-icon');
    const bookmarkIcons = document.querySelectorAll('.bookmark-icon');

    // Add event listener for all send icons
    sendIcons.forEach(sendIcon => {
        sendIcon.addEventListener('click', () => {
            sendIcon.classList.toggle('clicked');
            notify('Message sent successfully');
        });
    });

    // Add event listener for bookmark icons
    bookmarkIcons.forEach(bookmarkIcon => {
        bookmarkIcon.addEventListener('click', () => {
            bookmarkIcon.classList.toggle('saved');
            if (bookmarkIcon.classList.contains('saved')) {
                notify('Image saved successfully');
            } else {
                notify('Image discarded');
            }
        });
    });

    function notify(message) {
        // Show notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.classList.add('notification');
        document.body.appendChild(notification);

        // Remove notification after some time (e.g., 3 seconds)
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
});