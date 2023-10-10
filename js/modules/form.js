export default function form(){
    const form = document.querySelector('.modal-forms')
    const dados = {}

    function pegarvaiform(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }

    form.addEventListener('change', pegarvaiform)
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        localStorage.setItem(dados.email, JSON.stringify(dados))
        alert("Dados salvo com sucesso!")
    })




}
