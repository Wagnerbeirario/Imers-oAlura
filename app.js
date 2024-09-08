function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
        section.innerHTML = "<p><h1>Nada foi digitado na pesquisa!</h1></p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let game of games) {
        titulo = game.titulo.toLowerCase()
        descricao = game.descricao.toLowerCase()
        tags = game.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${game.titulo}</a>
                </h2>
                    <p  class="descricao-meta">${game.descricao}</p>
                    <a href=${game.link} target="_blank">Click aqui para mais informações sobre video games..</a>
            </div>`
        }      
}

if (!resultados){
    resultados = "<p><h1>Nada foi encontrado</h1></p>"
}
    section.innerHTML = resultados;
}