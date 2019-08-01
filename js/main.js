const floatingBTN = document.querySelector('.footerBtn');

floatingBTN.addEventListener('click', e => {
    //select the footer
    const footer = document.querySelector('.footer');

    if (footer.classList.contains('active')) {
        // check if the classs exists (active) then remove
        footer.classList.remove('active');
        // return the original text
        e.target.innerText = 'Terms, Privacy, Currency & more';
    } else {
        //we add the active class to the footer
        footer.classList.add('active');
        // add the close text
        e.target.innerText = 'X Close'
    }


})