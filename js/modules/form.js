export default function form(){

    const form = document.querySelector('.js-modal')
    const modal = document.querySelector(".modal-forms")
    const x = document.querySelector(".modal-close")
    const obrigado = document.querySelector('.Obrigado')
    const dados = {}

    // Função onde pega o nome e valor e adiciona ao dicionario
    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }
    
    form.addEventListener('change', pegarValorForm) ;// Quando ele digitar a informção ele vai guardar ela.
    modal.addEventListener("submit", (event) => { // Quando ele apertar em enviar ele irá salvar as informações no local storge
    event.preventDefault();
    localStorage.setItem("email", JSON.stringify(dados.email))
    obrigado.classList.add('active') // Quando terminar salvar irá aparecer uma mensagem
    });

    x.addEventListener("click", () => { //Tira a classe active sumindo o form
    form.classList.remove("active");
    });

    if (localStorage.getItem("email") === null) { // Caso local Stroage esteja vazio ele irá realizar o setTimeout
    setTimeout(() => {
        form.classList.add("active");
    }, 3000);
    }


}
