import onMenuClick from "./menuClick"
import onLoadGameClick from "./loadGame"
import onSaveGameClick from "./saveGame"
import onNewGameClick from "./newGame";

export default function addMenuListeners() {
    this.menu.menu.addEventListener('click', (event) => onMenuClick.call(this, event));
    this.menu.load.addEventListener('click', (event) => onLoadGameClick.call(this, event));
    this.menu.save.addEventListener('click', (event) => onSaveGameClick.call(this, event));
    this.menu.restart.addEventListener('click', (event) => onNewGameClick.call(this, event));
}