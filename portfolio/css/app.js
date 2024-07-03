document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        window.location.href = `mailto:${email}?subject=Contact from Portfolio&body=${message}`;
    } else {
        alert('Please fill in both fields.');
    }
});
