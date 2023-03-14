const BASE_URL = "https://webmob-ui-22-spotlified.herokuapp.com";

const listeArtiste = document.querySelector(".artists-list");
const listeMusique = document.querySelector("#songs-list");

const getArtistes = () => fetch(BASE_URL + "/api/artists")
    .then(res => res.json())
    .then(artistes => {
        const template = document.querySelector("#template-artist");
        listeArtiste.replaceChildren();

        for (const artiste of artistes) {
            const copyTemplate = template.content.cloneNode(true);

            copyTemplate.querySelector("img").src = artiste['image_url'];
            copyTemplate.querySelector("p").innerText = artiste['name'];
            copyTemplate.querySelector("a").href = "#artists-" + artiste['id'];

            listeArtiste.appendChild(copyTemplate);


        }

    });

const getSongByArtisteID = (id) => {
    fetch(BASE_URL + `/api/artists/${id}/songs`)
        .then(res => res.json())
        .then(songs => {
            const template = document.querySelector("#songs-list-template");
            listeMusique.replaceChildren();

            for (const song of songs) {
                const copyTemplate = template.content.cloneNode(true);
                copyTemplate.querySelector("li").innerText = song['title'];

                listeMusique.appendChild(copyTemplate);

                document.querySelector("#player-section img").src = song['artist']['image_url'];
                document.querySelector("#audio-player").src = song['audio_url'];


            }

        });
}

export {getArtistes, getSongByArtisteID}