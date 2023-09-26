const imagens = document.querySelectorAll('.js-list li');
const textos = document.querySelectorAll('.js-conteudo section');
const faqD = document.querySelectorAll('.js-faq section div');
const faqN = document.querySelectorAll('.js-faq section nav');
const faqseta = document.querySelectorAll(".js-conteudo nav span");

console.log(imagens);
console.log(textos);
console.log(faqD);
console.log(faqseta)

function ativarConteudo(indice){
    textos.forEach((item) =>{
        item.classList.remove('active')
    });
    textos[indice].classList.add('active')
};

imagens.forEach((item, indice)=>{
    item.addEventListener('click', () =>{
        ativarConteudo(indice)

    })
});

function ativarFaq(indice){
    faqseta.forEach((item) =>{
        item.innerText = "⯅"
    })
    faqD[indice].classList.toggle('active')
};

faqN.forEach((item, indice)=>{
    item.addEventListener('click', () =>{
        ativarFaq(indice)
    })
})


