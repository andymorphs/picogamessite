// Get Subscribers
    const youtubeKey = 'AIzaSyCIMRVVOLk_4o3HG1NrxDQTex3VRgDbq9o';
    const youtubeUser = 't-nBCm1hDI5KVVaXWAR_Ng';
    const subCount = document.getElementById('subCount');

    let getSubscribers = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            subCount.innerHTML = data["items"][0].statistics.subscriberCount;
        })

    }

    getSubscribers();