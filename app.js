// Controllers
// Media
const play = document.getElementById("btn--play")
const pause = document.getElementById("btn--pause")
const forward = document.getElementById("btn--forward")
const backward = document.getElementById("btn--backward")
// Sound
const sound = document.getElementById("volume--item")
const volume = document.getElementById("volume")

// data
const currentTime = [
    document.getElementById("current--ms"),
    document.getElementById("current--xl")
]
const DurationMusic = [
    document.getElementById("duration--ms"),
    document.getElementById("duration--xl")
]

const title = document.getElementById("music--title")
const artist = document.getElementById("music--artist")

// Media
let audio = document.getElementById("music")
let img = document.getElementById("music-pic")

// Timeline
var duration = 0;
let current_duration = 0
const progressbar = document.getElementById("currentTime")

const sounds = [
    {id:1, title:"What I've Done", author:"Linkin Park", media:"./assets/music/What Ive Done [Official Music Video] - Linkin Park.mp3", pic:"./assets/images/Linkin Park - What Ive Done.jpg"},
    {id:2, title:"Do I Wanna Know", author:"Arctic Monkeys", media:"./assets/music/Arctic Monkeys - Do I Wanna Know (Official Video).mp3", pic:"./assets/images/Artic Monkeys - Do I Wanna Know.jpg"},
    {id:3, title:"Sweater Weather", author:"The Neighbourhood", media:"./assets/music/Sweater Weather.mp3", pic:"./assets/images/Sweater Weather · The Neighbourhood.jpeg"}
]

const settings = [
    {title:"mute", icon:'<svg viewBox="0 0 576 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>'},
    {title:"low", icon:'<svg viewBox="0 0 448 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg>'},
    {title:"high", icon:'<svg viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>'}
]

// presets
pause.style.display = 'none'
let value = null;
sound.innerHTML = settings[2].icon
volume.value = 100
progressbar.value = 100

volume.addEventListener ("input", () => {
    // console.log(volume.value)
    // audio.volume = 0
    audio.volume = volume.value / 100
    // console.log(volume.value / 100)

    // define icon
    if (audio.volume == 0) {
        sound.innerHTML = settings[0].icon
    } // case volume is 0
    else if (audio.volume < 0.9) {
        sound.innerHTML = settings[1].icon
    } // between 0.01 and 0.9
    else if (audio.volume >= 1) {
        sound.innerHTML = settings[2].icon
    } // case volume is 100%
})

function renderMedia (index) {
    audio.setAttribute('src', sounds[index].media)

    // Initialize appData
    audio.onloadeddata = () => {
        title.textContent = sounds[value].title
        artist.textContent = sounds[value].author

        // Get a duration music
        // console.log("Duração: ", audio.duration)
        duration = audio.duration
        
        let minutes, seconds; // declare values

        minutes = Math.floor(duration / 60) | 0
        seconds = Math.floor(duration - (minutes * 60)) | 0

        if (seconds <= 0) {
            DurationMusic[0].textContent = minutes + ':' + seconds + '0'
            DurationMusic[1].textContent = minutes + ':' + seconds + '0'
        } else {
            DurationMusic[0].textContent = minutes + ':' + seconds
            DurationMusic[1].textContent = minutes + ':' + seconds
        }
    }
}

function handleSkipSong () {
    current_duration = 0

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
    current_duration = 0

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
let track_audio = 0;

function handlePlaySong () {
    track_audio = current_duration;
    play.style.display = 'none'
    pause.style.display = 'block'

    // audio.src = sounds[value].media
    renderMedia(value)
    img.style.backgroundImage = `url('${sounds[value].pic}')`
    audio.play()
    audio.currentTime = track_audio
}

// Pause Music
function handlePauseSong () {
    track_audio = current_duration;
    pause.style.display = 'none'
    play.style.display = 'block'

    audio.src = sounds[value].media
    audio.pause()
    audio.currentTime = track_audio
}

// Play Songs
play.addEventListener("click", handlePlaySong)
pause.addEventListener("click", handlePauseSong)

backward.addEventListener("click", handleBackSong)
forward.addEventListener("click", handleSkipSong)

progressbar.addEventListener("change", (e) => {
    let status, result

    status = e.target.value || null
    if (status == null) window.alert("Aperte para começar!")

    result = duration * status/100
    audio.currentTime = result;
    // console.log(`Você está em: ${result} da música.`)
})

audio.addEventListener('timeupdate', () => {
    let status
    current_duration = audio.currentTime
    status = current_duration * 100 / duration
    progressbar.value = status

    let minutes, seconds

    minutes = Math.floor(current_duration / 60) | 0
    seconds = Math.floor(current_duration - (minutes * 60)) | 0

    if (seconds < 10) {
        currentTime[0].textContent = minutes + ':' + '0' + seconds
        currentTime[1].textContent = minutes + ':' + '0' + seconds
    } else {
        currentTime[0].textContent = minutes + ':' + seconds
        currentTime[1].textContent = minutes + ':' + seconds
    }

    if (current_duration >= duration) handleSkipSong()
})