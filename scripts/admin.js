const teste1 = document.getElementsByTagName("body")
teste1.onLoad = listEvent()

async function listEvent() {
    try {
        const body = querySelector("body")
        const response = document.querySelector("https://xp41-soundgarden-api.herokuapp.com/events")
        const listEvent = response.json()

        listEvent.forEach((event) => {
            const html = 
            `<tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>05/03/2022 20:00</td>
                  <td>Festival Coala${event.name}</td>
                  <td>Miley Cyrus, Liniker, Smashing Pumpkins</td>
                  <td>
                    <a href="reservas.html" class="btn btn-dark"
                      >ver reservas</a
                    >
                    <a href="editar.html" class="btn btn-secondary">editar</a>
                    <a href="editar.html" class="btn btn-danger">excluir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>05/03/2022 20:00</td>
                  <td>Indie Fest</td>
                  <td>Arctic Monkeys, The Kooks, Hiatus Kaiyote</td>
                  <td>
                    <a href="reservas.html" class="btn btn-dark"
                      >ver reservas</a
                    >
                    <a href="editar.html" class="btn btn-secondary">editar</a>
                    <a href="editar.html" class="btn btn-danger">excluir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>05/03/2022 20:00</td>
                  <td>Bourbon Jazz Festival</td>
                  <td>Esperanza Spalding, Zimbo Trio, Serial Funkers</td>
                  <td>
                    <a href="reservas.html" class="btn btn-dark"
                      >ver reservas</a
                    >
                    <a href="editar.html" class="btn btn-secondary">editar</a>
                    <a href="editar.html" class="btn btn-danger">excluir</a>
                  </td>
                </tr>
              </tbody>
            `;
        body.innerHTML += html

        });
    } catch (error) {
        console.log(error)
    }
}



