import './magician.css';
import Character from "../../character";

export default class Magician extends Character {
    constructor(level) {
        super(level, 'magician');
        this.attack = 2;
        this.mana = 8;
        this.moveRange = 1;
        this.attackRange = 4;
        this.skills = [];

        this.upFromScratch();
    }
}
