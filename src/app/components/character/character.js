import './character.css';
import getPositions from '../../lib/utils/positions.utl';
import { showDamage } from "./commonAnimations/commonAnimations";

export default class Character {
    constructor(level, type = 'generic') {
        if (new.target.name === 'Character') {
            throw new Error('you can\'t invoke parent class');
        }

        this.level = level;
        this.health = 5;
        this.type = type;
        this.gem = 'common';

        this.turn = null;
        this.position = null;   
        // this.isActive = false;  
        this.activeSkill = false;
    }

    levelUp() {
        if (this.health > 2) {
            this.attack += 1;
            this.mana += 1;
        }

        this.level += 1;
        this.health += 8;

        if (this.health > 10) {
            this.health = 10;
        }
    }

    upFromScratch() {
        const levelNow = this.level;
        for (let i = 1; i < levelNow; i += 1) {
            this.levelUp();
        }
    }

    moveTo(position) {
        this.position = position;
    }

    async fight(target) {
        await showDamage(target.position, this.attack);
        target.health -= this.attack;

        if (target.health <= 0) {
            return target;
        }
        return false;
    }

    getCell() {
        return document.querySelector(`[data-position="${this.position}"]`);
    }

    getMoveRange() {
        return getPositions(this.moveRange, this.position).positions;
    }

    getAttackRange() {
        return getPositions(this.attackRange, this.position).positions;
    }

    
}
