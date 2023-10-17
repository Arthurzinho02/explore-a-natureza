export default function faq(){

    const faqD = document.querySelectorAll('.js-faq section div');
    const faqN = document.querySelectorAll('.js-faq section nav');
    const faqseta = document.querySelectorAll(".js-faq section nav span");

    function ativarFaq(indice){ //Relaciona o indice da pergunta com a resposta
        faqD[indice].classList.toggle('active') //adciona a classe active
        if (faqD[indice].classList.contains('active') == true){ // se tiver a classe active ele irá mudar a seta
            faqseta[indice].innerText = "⯅"
        }else{ //se não tiver ele retorna ou continua a seta para abaixo
            faqseta[indice].innerText = "▼"
        }
    };

    faqN.forEach((item, indice)=>{ //percorre a nodelist de perguntas 
        item.addEventListener('click', () =>{
            ativarFaq(indice) // chama a função e passa o indicie correspondente 
        })
    })
}