import './interface.css';
import Card from './card/card';
import Skillbox from './skillbox/skillbox';

export default class Interface {
    constructor(turn) {
        this.turn = turn;
        this.card = new Card(turn);
        this.skillbox = new Skillbox(turn);
    }

    update() {
        const { char } = this.card;
        this.renderInterface(char);
    }

    renderInterface(char) {
        this.card.renderChar(char);
        this.skillbox.renderSkills(char);
    }

    renderGeneric() {
        this.card.renderGeneric();
        this.skillbox.renderGeneric();
    }
}