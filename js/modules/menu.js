export default function menu(){
    const menuOri = document.querySelector('.js-menu')
    const menu = document.querySelector('.js-menu .menu')
    const menuspan = document.querySelector('.js-menu .menu span')
    const menu2 = document.querySelectorAll('.js-menu div')

        menu.addEventListener('click', () =>{ // Ao clicar no menu ele ira percorrer a nodelist que contem as divs
            menu2.forEach((item) =>{
                menuOri.classList.toggle('active') //Pode ativar e desativar as configuração do menu
                item.classList.toggle('active') //Ativa e desativa a configuração da div
                if (menuOri.classList.contains('active') == true){ //Se conter a classe active ele ira mudar para close (x), se não muda ou continua para menu
                    menuspan.innerText = "close"
                }else{ 
                    menuspan.innerText = "menu"
                }
            })
        })
    }