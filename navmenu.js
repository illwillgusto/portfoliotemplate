window.onload = () => {
    const navMenu = document.querySelector('nav-menu');
    const navItem = document.querySelector('nav-item');
    const hambuger = document.querySelector('nav-toggle');

    const toggle = e => e.classList.toggle('is-active');
    const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

    hambuger.addEventListener('click', () => toggle(navMenu, 'is-active'));
    Array.from(navItem).forEach(e => e.addEventListener('click', toggleNav));
}


const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    //This will validate the name field
    const nameField = form.querySelector('input[name="name"]');
    if (nameField.value === '') {
        alert('Please enter your name.');
        return;
    }

    //This will validate the email field 
    const emailField = form.querySelector('input[name="email"]');
    if (emailField.value === '') {
        alert('Please enter a valid email address.');
        return;
    }   else if (!emailField.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/)) {
        alert('Please enter a valid email address.');
        return;
    }

    //This will validate the mobile field
    const mobileField = form.querySelector('input[name="mobile"]');
    if (mobileField.value === '') {
        alert('Please enter a valid phone number.');
        return;
    }   else if (!mobileField.value.match(/^\d{10}$/)) {
        alert('Please enter a valid phone number.');
    }

    //This will validate the date field
    const dateField = form.querySelector('input[name="date"]');
    if (dateField.value === '') {
        alert('Please select a date.');
        return;
    }

    //This will validate the time field
    const timeField = form.querySelector('input[name="time"]');
    if (timeField.value === '') {
        alert('Please enter a time.');
        return;
    }

    //This will validate the service field
    const serviceField = form.querySelector('select[name="service"]');
    if (serviceField.value === '') {
        alert('Please select a service.');
        return;
    }

    form.submit();
});