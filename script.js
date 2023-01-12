// active JS
// window.alert("AAAAAA")

// Controllers
const play = document.getElementById("btn--play")
const pause = document.getElementById("btn--pause")

const forward = document.getElementById("btn--forward")
const backward = document.getElementById("btn--backward")

// Media
let audio = document.getElementById("music")

const sounds = [
    {id:1, title:"What I've Done", author:"Linkin Park", media:"./assets/music/What Ive Done [Official Music Video] - Linkin Park.mp3", pic:"./assets/images/Linkin Park - What Ive Done.jpg"},
    {id:2, title:"Do I Wanna Know", author:"Arctic Monkeys", media:"./assets/music/Arctic Monkeys - Do I Wanna Know (Official Video).mp3", pic:"./assets/images/Artic Monkeys - Do I Wanna Know.jpg"},
    {id:3, title:"Beat it", author:"The Neighbourhood", media:"./assets/music/Sweater Weather.mp3", pic:"./assets/images/Sweater Weather · The Neighbourhood.jpeg"}
]

let value = 0;
let img = document.getElementById("music-pic")

function handleSkipSong () {
    for (let i = 0; i < sounds.length; i++) {
        value += 1

        if (value >= sounds.length) {
            value = 0
        }

        // console.log(value)
        handlePlaySong()

        return value
    }
}

function handleBackSong () {
    for (let i = 0; i < sounds.length; i--) {
        value -= 1

        if (value < 0) {
            value = sounds.length - 1
        }

        handlePlaySong()

        return value
    }
}

// Play Music
function handlePlaySong () {
    play.style.display = 'none'
    pause.style.display = 'inherit'

    audio.src = sounds[value].media
    img.style.backgroundImage = `url('${sounds[value].pic}')`
    audio.play()
}
// Pause Music
function handlePauseSong () {
    pause.style.display = 'none'
    play.style.display = 'inherit'

    audio.src = sounds[value].media
    audio.pause()
}

// Play Songs
play.addEventListener("click", handlePlaySong)
pause.addEventListener("click", handlePauseSong)

backward.addEventListener("click", handleBackSong)
forward.addEventListener("click", handleSkipSong)