import './menu.css';
import engine from "../../lib/engine/engine";
import menuT from "./menu.tmp";

export default class Menu {
    constructor() {
        this.container = document.querySelector('.controls');
        this.renderMenu();
    }

    renderMenu() {
        const html = engine(menuT);  
        this.container.innerHTML = html;

        this.menu = this.container.querySelector('.menu-icon');
        this.restart = this.container.querySelector('.btn-restart');
        this.save = this.container.querySelector('.btn-save');
        this.load = this.container.querySelector('.btn-load');
    }
}