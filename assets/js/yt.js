// Get Subscribers
const APIKey = "AIzaSyDUPE07TGUM9_9wAV21P1wwJ2VF9hng9y4";
const channelID = "HQ9QcqxgdYXlwtGf6zjnCw";
const subCount = document.querySelector(".subCount");

const getYouTubeSubs = async () => {
    
    const getData = await axios.get(
        'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=HQ9QcqxgdYXlwtGf6zjnCw&key=AIzaSyDUPE07TGUM9_9wAV21P1wwJ2VF9hng9y4'
    );

    console.log(getData);
};

getYouTubeSubs();
