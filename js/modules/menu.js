export default function menu(){
    const menuOri = document.querySelector('.js-menu')
    const menu = document.querySelectorAll('.js-menu .menu')
    const menuspan = document.querySelector('.js-menu .menu span')
    const menu2 = document.querySelectorAll('.js-menu div')
    const simboloMenu = document.querySelector('.js-menu .menu span')

    menu.forEach((item) =>{
        item.addEventListener('click', () =>{
            menu2.forEach((item) =>{
                menuOri.classList.toggle('active')
                item.classList.toggle('active')
                if (menuOri.classList.contains('active') == true){
                    menuspan.innerText = "close"
                }else{
                    menuspan.innerText = "menu"
                }
            })
        } )
    })
}