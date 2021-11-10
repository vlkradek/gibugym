let burger = document.getElementById('burger')
let navbar = document.getElementById('navbar')

navbar.style.right = '-250px';

burger.onclick = function (){
    if (navbar.style.right == '-250px'){
        navbar.style.right = '0'
    } else {
        navbar.style.right = '-250px'
    }
}