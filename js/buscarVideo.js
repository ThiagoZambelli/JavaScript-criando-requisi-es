import { conectaApi } from "./conectandoApi.js";
import constroiCards from "./mostrarVideos.js";

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

async function buscaVideo(evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    const lista = document.querySelector("[data-lista]");

    lista.innerHTML = "";
    busca.forEach(elemento => lista.appendChild(constroiCards(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length == 0){
        lista.innerHTML = `<h2 class="menssagem__titulo">Não existem vídeos com esses termos</h2>`
    }
}

botaoDePesquisa.addEventListener('click', evento => buscaVideo(evento))