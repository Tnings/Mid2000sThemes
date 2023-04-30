
console.log("TEST");

var songinfo = document.getElementsByClassName('main-nowPlayingWidget-nowPlaying main-nowPlayingWidget-coverExpanded');
var songinfonewparent = document.getElementsByClassName('Foyk_HJx16yh22JYmQ56');
var volume = document.getElementsByClassName('volume-bar ExuDUBJ7bk8vT6INnm9F');
var playercontrols =  document.getElementsByClassName('player-controls__buttons player-controls__buttons--new-icons');
var rightcontrols = document.getElementsByClassName('mwpJrmCgLlVkJVtWjlI1');
var shufflebutton = document.getElementsByClassName('main-shuffleButton-button');
var repeatbutton = document.getElementsByClassName('main-repeatButton-button');
var nowplayingbar = document.getElementsByClassName('main-nowPlayingBar-nowPlayingBar');
var playbackbar = document.getElementsByClassName('playback-bar');
var heartbutton = document.getElementsByClassName('main-addButton-button control-button control-button-heart main-addButton-active');
var navbuttons = document.getElementsByClassName('main-topBar-historyButtons');
var navbar = document.getElementsByClassName('Root__nav-bar');


setTimeout(() => {
    songinfonewparent[0].appendChild(songinfo[0]);
    playercontrols[0].appendChild(heartbutton[0]);
    playercontrols[0].appendChild(volume[0]);
    rightcontrols[0].appendChild(shufflebutton[0]);
    rightcontrols[0].appendChild(repeatbutton[0]);
    nowplayingbar[0].appendChild(playbackbar[0]);
    navbar[0].appendChild(navbuttons[0]);
}, 2000);








// while (oldParent.childNodes.length > 0) {
//     newParent.appendChild(oldParent.childNodes[0]);
// }