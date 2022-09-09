const GUESS_TIMES = [
    1,
    1,
    2,
    3, 
    4,
    5
];
const SHMAEL_DURATION = GUESS_TIMES.reduce((a, b) => a + b, 0);
const SKIP = "SKIP";
const NO_GUESS = -1;

export { GUESS_TIMES, SHMAEL_DURATION, SKIP, NO_GUESS };