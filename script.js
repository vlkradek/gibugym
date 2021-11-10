let burger = document.getElementById('burger')
let navbar = document.getElementById('navbar')
// let link = document.getElementsByTagName('li')

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
