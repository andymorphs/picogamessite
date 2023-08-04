// Get Subscribers
const APIKey = "AIzaSyDUPE07TGUM9_9wAV21P1wwJ2VF9hng9y4";
const channelID = "HQ9QcqxgdYXlwtGf6zjnCw";
//https://www.googleapis.com/youtube/v3/channels?part=statistics&id=andymorphs&key=AIzaSyDUPE07TGUM9_9wAV21P1wwJ2VF9hng9y4

fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${APIKey}`)
  .then(response => response.json())
  .then(data => {
    const subscriberCount = data.items[0].statistics.subscriberCount;
    // Display the subscriber count on your website
    document.getElementById('subscriber-count').textContent = `Subscribers: ${subscriberCount}`;
  })
  .catch(error => console.error('Error fetching data:', error));