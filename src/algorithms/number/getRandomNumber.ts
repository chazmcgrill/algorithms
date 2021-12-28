// gets a random number within passed range
export function randomizer(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
}
