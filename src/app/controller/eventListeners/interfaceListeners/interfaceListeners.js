import onLeftClick from "./leftClickSkill"

export default function addInterfaceListeners() {
    this.interfacePL.skillbox.boxEl.addEventListener('click', (e) => onLeftClick.call(this, e));
}