let btnArr = document.querySelectorAll(".nav__right-item");
let contentArr = document.querySelectorAll(".nav__background-content");
let closeBtn = document.querySelector(".nav__background-close");

const obj = {
    0: contentArr[0],
    2: contentArr[1],
    3: contentArr[2],
}

//implementing the dropdown
for(const [i, btn] of btnArr.entries()) {
    if( i !== 1) {
        btn.addEventListener("click", (function(){
            remove();
            btn.href="#nav__background";
            obj[i]?.classList.remove("hidden")
        }))
    }
}

// implementing the closeBtn
function remove() {
    for(const i of contentArr) {
        if(!i.classList.contains("hidden")) {
            i.classList += " hidden";
        }
    }
}
closeBtn.addEventListener("click", remove);

// // nav Products dropdown
// let closePrduct = document.querySelector("nav__product-close");
// let btnProduct = document.querySelector("nav__product");
// btnProduct.addEventListener("click", function() {
//     closeProduct.classList.remove("hidden");
// })