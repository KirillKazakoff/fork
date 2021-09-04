import Character from "../../character";
import './vampire.css';

export default class Vampire extends Character {
    constructor(level) {
        super(level, 'vampire');
        this.attack = 2;
        this.mana = 6;
        this.attackRange = 2;
        this.moveRange = 2;

        this.skills = [];
        this.upFromScratch();
    }
}
