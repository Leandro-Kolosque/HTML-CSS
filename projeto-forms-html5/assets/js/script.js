const mode = document.getElementById('moon_icon');

mode.addEventListener('click', () => {
    const form=document.getElementById('login_form')
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        form.classList.add('dark')
        //return;
    } else {
        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')
        form.classList.remove('dark')
    }
    //mode.classList.remove('fa-sun')
    //mode.classList.add('fa-moon')
});