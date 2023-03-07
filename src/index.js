import {getArtists} from "./api";




window.addEventListener("hashchange", async (e) => {
  const hash = window.location.hash;


  switch (hash) {
    case "#artists":
      const artists = await getArtists();
      console.log(artists)


      break;
  }


  document.querySelector("footer a.active")?.classList.remove("active");
  document.querySelector(`footer a[href="${hash}"]`)?.classList.add("active");


  document.querySelector("section.active").classList.remove("active");
  document.querySelector(hash + "-section").classList.add("active");


});