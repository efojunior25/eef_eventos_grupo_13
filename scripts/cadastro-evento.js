const nomeEvento = document.querySelector("#nome");
const bannerEvento = document.querySelector("#banner")
const atracoesEvento = document.querySelector("#atracoes");
const descricaoEvento = document.querySelector("#descricao");
const dataEvento = document.querySelector("#data");
const ingressoEvento = document.querySelector("#lotacao");
const formEvento = document.querySelector(".col-6");

formEvento.addEventListener("submit", cadastroEvento)

async function cadastroEvento(event){
    event.preventDefault()

    try{      
        console.log(dataEvento.value)

        const novoEvento = {
            "name": nomeEvento.value,
            "poster": bannerEvento.value,
            "attractions": atracoesEvento.value.split(","),
            "description": descricaoEvento.value,
            "scheduled": new Date(dataEvento.value).toISOString(),
            "number_tickets": ingressoEvento.value,
        };
  
        
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            body: JSON.stringify(novoEvento),
            
        });
        console.log(response)
        alert(`${nomeEvento.value} cadastrado com sucesso`)
        window.location.href = ("cadastro-evento.html")
    
    }catch (error){
    console.log(error)
    alert("Favor preencher todos os campos")
    };
    
}

