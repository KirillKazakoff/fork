import state from "../../../state/state";

export default function onSaveGameClick() {
    state.save(this.characters.heroes);
}