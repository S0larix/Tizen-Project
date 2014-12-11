
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100px',
        width: '100px',
        videoId: '632CHpeHYZE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(evt) {
    evt.target.playVideo();
}
function onPlayerStateChange(evt) {
    if (evt.data == YT.PlayerState.ENDED) {
        Console.log("replay!");
        play();
    }
}
function stopVideo() {
    player.stopVideo();
}
function play() {
    if(player)
        player.playVideo();
}
function run(){
    setInterval(play,200);
}