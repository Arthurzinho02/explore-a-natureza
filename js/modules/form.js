export default function form(){
    const form = document.querySelector('.js-modal')
    const dados = {}
   

    if (localStorage.getItem("email") === null) {
        form.classList.add("active");
        }
        else {
        form.classList.remove("active");
        }

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }
    
    // adiciona um listener para o envio do formulário
    form.addEventListener('change', pegarValorForm)
    document.querySelector(".modal-forms").addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("email", JSON.stringify(dados.email))
    alert("Dados salvos com sucesso")
    form.classList.remove("active");
    });

    // adiciona um listener para o botão de fechar
    document.querySelector(".modal-close").addEventListener("click", () => {
    // esconde o elemento
    form.classList.remove("active");
    });

    if (localStorage.getItem("email") === null) {
    setTimeout(() => {
        form.classList.add("active");
    }, 3000);
    }


}
