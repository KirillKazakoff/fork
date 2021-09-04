import state from "../../../state/state";
import { 
    Vampire, Undead, Daemon, Swordsman, Bowman, Magician,
} from "../../../components/character/heroes/heroes";

export default function onLoadGameClick() {
    const { characters, teamAI, teamPL, board, interfacePL } = this;

    const loadedChars = state.load();
    const classifiedChars = recreateLoadedChars(loadedChars);

    board.setTheme(state.theme);
    characters.heroes = classifiedChars;
    board.renderChars(classifiedChars);
    
    board.deselectAllCells();

    const { activePos } = state;
    if (typeof activePos === 'number') {
        board.selectCell(activePos, 'yellow');
        const char = characters.getTeamChar(activePos);
        interfacePL.card.renderChar(char);
    }

    teamAI.heroes = characters.getTeam('AI');
    teamPL.heroes = characters.getTeam('PL');
}

function recreateLoadedChars(chars) {
    return chars.map((char) => {
        let classedChar;
        const { level } = char;

        switch (char.type) {
            case 'vampire':
                classedChar = new Vampire(level);
                break;

            case 'undead':
                classedChar = new Undead(level);
                break;

            case 'daemon':
                classedChar = new Daemon(level);
                break;

            case 'bowman':
                classedChar = new Bowman(level);
                break;

            case 'magician':
                classedChar = new Magician(level);
                break;

            case 'swordsman':
                classedChar = new Swordsman(level);
                break;

            default:
                break;
        }

        for (let prop in char) {
            classedChar[prop] = char[prop];
        }
        return classedChar;
    })
}