import { conectaApi } from "./conectandoApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCards(titulo, descricao, imagem, url){
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
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constroiCards(
        elemento.titulo, elemento.descricao, elemento.imagem, elemento.url)))
}

listaVideos();