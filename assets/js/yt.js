// Get Subscribers
    const APIKey = 'AIzaSyDUPE07TGUM9_9wAV21P1wwJ2VF9hng9y4';
    const channelID = 'HQ9QcqxgdYXlwtGf6zjnCw';
    const subCount = document.getElementById('subCount');

    let getSubscribers = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${APIKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            //subCount.innerHTML = data["items"][0].statistics.subscriberCount;
        })

    }

    getSubscribers();