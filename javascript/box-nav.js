let link = document.querySelectorAll('.box__nav-item');

const boxNav = {
    0: "img/old-woman.webp",
    1: "img/Eats_Home_bg_desktop2x.webp",
    2: "img/Rider_Home_bg_desktop2x.webp",
}

for(const [index, i] of link.entries()) {
    i.addEventListener('click', () => {
        for(const j of link) {
            j.classList.contains("nav-border") ? j.classList.remove("nav-border") : '';
        }
        i.classList += " nav-border";
        document.querySelector(".section-header").style = `background: url(${boxNav[index]}); background-repeat: no-repeat; background-attachment: scroll; background-position: top; background-size: cover;`;
        console.log(i);
    } );
}