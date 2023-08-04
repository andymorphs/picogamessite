// Get Subscribers
const APIKey = "AIzaSyDUPE07TGUM9_9wAV21P1wwJ2VF9hng9y4";
const channelID = "HQ9QcqxgdYXlwtGf6zjnCw";
//https://www.googleapis.com/youtube/v3/channels?part=statistics&id=andymorphs&key=AIzaSyDUPE07TGUM9_9wAV21P1wwJ2VF9hng9y4

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCNX88l8ja5flD21ni78ZjVQ&key=${APIKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the response to the console for inspection
        const subscriberCount = data.items[0]?.statistics?.subscriberCount;
        if (subscriberCount) {
            document.getElementById('subscriber-count').textContent = `Subscribers: ${subscriberCount}`;
        } else {
            document.getElementById('subscriber-count').textContent = `Error: Unable to fetch subscriber count.`;
        }
    })
    .catch(error => console.error('Error fetching data:', error));