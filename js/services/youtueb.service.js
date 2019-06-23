const YT_KEY = 'AIzaSyBy6eq8302IzAaD142mx2PYK8QXIsu2ZwU';
 
function getVideos(searchStr) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${searchStr}`)
        .then(res => (res.json()))
        .then(resData => (resData.items))
        .catch((err) => {
            console.log('there is a problam', err);
        })
}

export default {
    getVideos
}
