export function shuffle(array) { 
    return array.sort(() => Math.random() - 0.5)
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}