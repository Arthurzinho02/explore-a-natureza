
export default function texto(){
    const imagens = document.querySelectorAll('.js-list li');
    const textos = document.querySelectorAll('.js-conteudo section');
    const largura = window.innerWidth;

    function ativarConteudo(indice){
        textos.forEach((item) =>{
            item.classList.remove('active')
        });
        textos[indice].classList.add('active')
    };

    imagens.forEach((item, indice)=>{
        if (largura > 720){
            item.addEventListener('click', () =>{
                ativarConteudo(indice)

            })
        }
    });
}
