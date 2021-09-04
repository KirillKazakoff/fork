import { generateChars } from './charGen';

import {
    Magician, Vampire, Daemon, Bowman, Swordsman, Undead
} from '../components/character/heroes/heroes';;

function initTestAI() {
    const third = new Vampire(4);
    const fourth = new Daemon(4);

    third.position = 2;
    fourth.position = 17;

    third.turn = 'AI';
    fourth.turn = 'AI';

    return [third, fourth];
}

function initTestPL() {
    const first = new Bowman(5);
    const second = new Swordsman(10);

    first.position = 7;
    second.position = 23;

    first.turn = 'PL';
    second.turn = 'PL';

    return [first, second];
}

const initAI = generateChars(1, 2, 'AI');
const initPL = generateChars(1, 2, 'PL');

export { initTestAI, initTestPL, initAI, initPL };
