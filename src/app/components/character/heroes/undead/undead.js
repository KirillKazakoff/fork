import Character from "../../character";
import './undead.css';

export default class Undead extends Character {
    constructor(level) {
        super(level, 'undead');
        this.attack = 4;
        this.mana = 8;
        this.moveRange = 4;
        this.attackRange = 1;

        this.skills = [];
        this.upFromScratch();
    }
}
