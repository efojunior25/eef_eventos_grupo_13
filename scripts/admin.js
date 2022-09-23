// const teste1 = document.getElementsByTagName("body")
// teste1.onLoad = listEvent()

async function listEvent(event) {
    try {
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow'       

        });
        const data = await response.json();

        const eventoBody = document.querySelector('tbody')

        data.forEach((event) => {
        const html = `<tr>  <th scope="row">1</th>
                            <td>${event.scheduled}</td>
                            <td>${event.name}</td>
                            <td>${event.attractions}</td>
                            <td>
                                 <a href="reservas.html" class="btn btn-dark">ver reservas</a>
                                <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
                                <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
                            </td></tr>`;

        eventoBody.innerHTML += html
        });

    } catch (error) {
        console.log(error)
    }
}
listEvent()


