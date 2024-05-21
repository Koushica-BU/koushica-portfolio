function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function openBackground(elem){
    const backgroundMenu = document.querySelectorAll(".ImageContainer");
    backgroundMenu.forEach(el => {
        el.classList.remove('Active');
    });
    elem.classList.add('Active');
    const details = document.querySelectorAll('.ContentContainer');
    details.forEach(el => {
        el.classList.remove('hide');
    });
    const hidedetails = document.querySelector(`.ContentContainer:not(#${elem.id}_details)`);
    hidedetails.classList.add('hide')
}
