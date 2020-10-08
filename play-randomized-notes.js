const Player = require('play-sound')
const shuffle = require('lodash.shuffle')

const repeats = process.argv[2]; // how many times to repeat the notes
const pause = process.argv[3]; // seconds between interval

if (!Number.isInteger(+repeats) || !Number.isInteger(+pause)) {
    return console.log("Nepravilni argumenti skripte. Prvi argument je stevilo ponovitev, drugi pa je interval v sekundah med toni.")
}

const note_sounds = {
    A: "./assets/notes/A.wav",
    Ais: "./assets/notes/Ais.wav",
    B: "./assets/notes/B.wav",
    C: "./assets/notes/C.wav",
    Cis: "./assets/notes/Cis.wav",
    D: "./assets/notes/D.wav",
    Dis: "./assets/notes/Dis.wav",
    E: "./assets/notes/E.wav",
    F: "./assets/notes/F.wav",
    Fis: "./assets/notes/Fis.wav",
    G: "./assets/notes/G.wav",
    Gis: "./assets/notes/Gis.wav",
}

let entries = Object.entries(note_sounds)

const p = Player()

for (let i = 0; i < repeats; i++) {
    shuffle(entries).forEach(([note, sound], j) => {
        setTimeout(() => {
            console.log(note)
            p.play(sound)
        }, (i*12+1+j)*pause*1000)
    })
}