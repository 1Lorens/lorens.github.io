document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('email-copy-btn');
    if (copyButton) {
        copyButton.addEventListener('click', () => {
            const email = 'crislaurencebenitez@gmail.com';
            navigator.clipboard.writeText(email)
                .then(() => {
                    alert('Email address copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy email: ', err);
                    alert('Failed to copy email address. Please copy it manually: ' + email);
                });
        });
    }
});