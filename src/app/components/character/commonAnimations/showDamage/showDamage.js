import './damage.css';
import damageT from "./damage.tmp";
import engine from "../../../../lib/engine/engine";

export default function showDamage(position, damage) {
    return new Promise((resolve) => {
        const cell = document.querySelector(`[data-position="${position}"]`)
        cell.innerHTML += engine(damageT(damage));
        const damageEl = cell.querySelector('.damage');

        damageEl.addEventListener('animationend', () => {
            cell.removeChild(damageEl);
            resolve();
        });
    });
}

