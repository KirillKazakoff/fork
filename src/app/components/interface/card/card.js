import './card.css';
import './charName/charName.css';

import cardT from "./card.tmp";
import engine from "../../../lib/engine/engine";
import showCharName from "./charName/showCharName";

import genericChar from '../../character/heroes/generic/generic';

export default class Card {
    constructor(turn) {
        this.container = document.querySelector(`.interface-${turn}`);
        this.renderCard(genericChar); 

        this.card = this.container.querySelector('.card');
        this.renderGeneric();
    }

    renderCard() {
        const html = engine(cardT(genericChar));
        this.container.insertAdjacentHTML('afterbegin', html);
    }

    renderChar(char) {
        this.char = char;
        if (char.health <= 0 && char.type !== 'generic') {
            this.renderGeneric();
            return;
        }

        const html = engine(cardT(char));
        this.card.innerHTML = html;
        showCharName.call(this, char.type);
    }

    renderGeneric() {
        this.renderChar(genericChar);
    }
}