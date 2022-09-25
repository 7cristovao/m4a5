// FOR com imagens

// fetch retorna valor do tipo promise
// busca o que quer que seja dentro deste dominio

function buscaImagem(){
     // funcao retorna o resultado do fetch
    return fetch("https://dog.ceo/api/breed/hound/images/random/30").then(function (resp){
        return resp.json()
    })
}

//console.log(buscaImagem())

buscaImagem().then(construirLista)

function construirLista(ListaImg){
    //console.log(ListaImg)
    const lista = ListaImg.message
    //console.log(lista)
    const olListaImg = document.getElementById("lista-img")
    for(let posicao=0;posicao<lista.length;posicao++){
        const item = lista[posicao]
        const itemHtml = "<li><img src='" + item + "'></li>"
        olListaImg.innerHTML = olListaImg.innerHTML + itemHtml 
        //olListaImg.innerHTML += itemHtml
    }
}