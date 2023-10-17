
export default function texto(){
    const imagens = document.querySelectorAll('.js-list li');
    const textos = document.querySelectorAll('.js-conteudo section');
    const largura = window.innerWidth; //retorna a largura da tela

    function ativarConteudo(indice){ // função que requer o indice para realizar a vinculação do indice da página com o texto
        textos.forEach((item) =>{ // percorre a nodelist e remove todos os active
            item.classList.remove('active')
        });
        textos[indice].classList.add('active') // adiciona o active de acordo com o indice
    };

    imagens.forEach((item, indice)=>{ // percorre a nodelist de imagens e se a tela for menor que 720px ao clicar ele aciona função.
        if (largura > 720){ 
            item.addEventListener('click', () =>{
                ativarConteudo(indice)

            })
        }
    });
}
