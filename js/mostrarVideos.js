import { conectaApi } from "./conectandoApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCards(titulo, descricao, url, imagem){
    const video = document.createElement("li");
    video.className = "videos"
    video.innerHTML = `
            <iframe width="100%" height="auto" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
    `
    return video;
}

async function listaVideos (){
    try{
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCards(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch(erro){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar a lista de vídeos</h2>`
    }
}

listaVideos();