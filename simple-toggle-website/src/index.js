document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');

    let isBlue = true;

    button.addEventListener('click', () => {
        if (isBlue) {
            document.body.style.backgroundColor = 'green';
        } else {
            document.body.style.backgroundColor = 'blue';
        }
        isBlue = !isBlue;
    });
});