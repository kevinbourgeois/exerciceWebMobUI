import {getArtistes, getSongByArtisteID} from "./api.js";
import{addToFavorites} from "./favourites";

const playbutton = document.querySelector(".play-button");
const favouritebutton = document.querySelector(".favourite-button");
const audio = document.querySelector("#audio-player");
addToFavorites("test")

window.addEventListener("hashchange", (e) => {

  let hash = window.location.hash;

  const hashSplit = hash.split('-');


  if(hash === '') hash = '#home'

  switch (hashSplit[0]) {
    case "#artists":

      //artists by id
      if (hashSplit[1]) {
          document.querySelector("#favourite-section").classList.add("active");
          getSongByArtisteID(hashSplit[1]);
      }
      //affiche juste les artistes
      else {
        getArtistes();
      }

      break;

  }


  document.querySelector("footer a.active")?.classList.remove("active");
  document.querySelector(`footer a[href="${hash}"]`)?.classList.add("active");


  document.querySelector("section.active").classList.remove("active");
  document.querySelector(hash + "-section").classList.add("active");


});

playbutton.addEventListener("click", (e) => {
    audio.play();
})

favouritebutton.addEventListener("click", (e) => {
    alert("caca");
})
