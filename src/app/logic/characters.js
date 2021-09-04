import state from '../state/state';

export default class Characters {
    constructor(...teams) {
        this.heroes = teams.reduce((total, team) => {
            team.forEach((char) => total.push(char));
            return total;
        }, []);
        this.getAmount();
    }

    getCharsPositions() {
        return this.heroes.map((char) => char.position);
    }

    getTeamChar(position) {
        const searchRes = this.heroes.find((character) => character.position === position);
        return searchRes ? searchRes : false;
    }

    getTeam(turn) {
        return this.heroes.filter((character) => character.turn === turn);
    }

    getActiveChar() {
        return this.heroes.find((char) => char.isActive);
    }

    getChars(positions) {
        return positions.reduce((total, position) => {
            const char = this.getTeamChar(position);
            total.push(char);
            return total;
        }, []);
    }

    deleteChar(delChar) {
        const index = this.heroes.findIndex(
            (character) => character.position === delChar.position,
        );
        this.heroes.splice(index, 1);

        if (state.activePos === delChar.position) {
            state.activePos = null;
        }
        this.getAmount();
    }

    moveChar(char, position) {
        this.deleteChar(char);
        char.moveTo(position);
        this.heroes.push(char);
    }

    async fight(attacker, target) {
        await attacker.fight(target);
        let isKilled = false;

        if (target.health <= 0) {
            this.deleteChar(target);
            isKilled = true;
        }
        return isKilled;
    }

    getAmount() {
        this.amount = this.heroes.reduce((total) => {
            let sum = total;
            sum += 1;
            return sum;
        }, 0);
    }

    addChars(characters) {
        characters.forEach((character) => this.heroes.push(character));
        this.getAmount();
    }

    levelUp() {
        this.heroes.forEach((character) => {
            state.gamePoints += +character.health.toFixed();
            character.levelUp();
        });
    }
}
