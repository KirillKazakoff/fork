import state from "../../../state/state";

export default function onNewGameClick() {
    const { board, interfacePL, interfaceAI } = this;
    state.newGameStart();

    this.initCharacters();
    board.setTheme(state.theme);
    board.renderChars(this.characters.heroes);
    board.deselectAllCells();
    
    interfaceAI.card.renderGeneric();
    interfacePL.card.renderGeneric();
}