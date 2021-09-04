import './skillbox.css';
import engine from '../../../lib/engine/engine';
import { skillsT, skillboxT } from './skillbox.tmp';

import genericChar from '../../character/heroes/generic/generic';

export default class Skillbox {
    constructor(turn) {
        this.container = document.querySelector(`.interface-${turn}`);
        this.renderBox(turn);
    }

    renderBox(turn) {
        const html = engine(skillboxT(genericChar, turn));
        this.container.insertAdjacentHTML('beforeend', html);
        this.boxEl = this.container.querySelector(`.skillbox-${turn}`);
    }

    renderSkills(char) {
        if (char.type === 'generic' || char.health <= 0) {
            this.renderGeneric();
            return;
        }

        const html = engine(skillsT(char.skills));
        this.boxEl.innerHTML = html;
    };
    
    renderGeneric() {
        this.boxEl.innerHTML = '';
    }
}