let burger = document.getElementById('burger')
let navbar = document.getElementById('navbar')

navbar.style.right = '-100vw';
burger.innerHTML = '<i class=\'bx bx-menu\' ></i>';

burger.onclick = function (){
    if (navbar.style.right == '-100vw'){
        navbar.style.right = '0'
        burger.innerHTML = '<i class=\'bx bx-x\' ></i>'
    } else {
        navbar.style.right = '-100vw'
        burger.innerHTML = '<i class=\'bx bx-menu\' ></i>';
    }
}
function closeNavbarClick(){
    navbar.style.right = '-100vw'
    burger.innerHTML = '<i class=\'bx bx-menu\' ></i>';
}


// let counter = 1;
// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if(counter > 4){
//         counter = 1;
//     }
// }, 4000);

// window.addEventListener("scroll", (e) => {
//     console.log(window.scrollY)
//     if(window.scrollY >= window.innerHeight){
//         document.getElementById('navbar').style.padding = '25px';
//     } else {
//         document.getElementById('navbar').style.padding = '0px';
//     }
// });