export default function faq(){

    const faqD = document.querySelectorAll('.js-faq section div');
    const faqN = document.querySelectorAll('.js-faq section nav');
    const faqseta = document.querySelectorAll(".js-faq section nav span");

    function ativarFaq(indice){
        faqD[indice].classList.toggle('active')
        if (faqD[indice].classList.contains('active') == true){
            faqseta[indice].innerText = "⯅"
        }else{
            faqseta[indice].innerText = "▼"
        }
    };

    faqN.forEach((item, indice)=>{
        item.addEventListener('click', () =>{
            ativarFaq(indice)
        })
    })
}