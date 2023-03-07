const BASE_URL = "https://webmob-ui-22-spotlified.herokuapp.com";


const parseJSON = (url) => {
    fetch(url)
        .then((res) => {
            return res.json();

        })
        .then((res) => {
            return res;
        })
}

const getArtists = () => {
    return parseJSON(BASE_URL + "/api/artists");
}



export {parseJSON, getArtists}