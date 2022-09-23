const nomeEvento = document.querySelector("#nome");
const bannerEvento = document.querySelector("#banner")
const atracoesEvento = document.querySelector("#atracoes");
const descricaoEvento = document.querySelector("#descricao");
const inpData = document.querySelector("#data");
const inpTickets = document.querySelector("#lotacao");
const newForm = document.querySelector(".col-6");

newForm.addEventListener("submit", cadastroEvento)

async function cadastroEvento(event){
    event.preventDefault()

    try{      
        console.log(inpData.value)

        const newEvent = {
            "name": nomeEvento.value,
            "poster": bannerEvento.value,
            "attractions": atracoesEvento.value.split(","),
            "description": descricaoEvento.value,
            "scheduled": new Date(inpData.value).toISOString(),
            "number_tickets": inpTickets.value,
        };
  
        
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            body: JSON.stringify(newEvent),
            
        });
        console.log(response)
        alert("Criado com Sucesso!")
        window.location.href = ("cadastro-evento.html")
    
    }catch (error){
    console.log(error)
    alert("Favor preencher todos os campos")
    };
    
}

