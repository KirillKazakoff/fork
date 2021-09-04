import './css/defaultStyle.css';
import './css/style.css';
import './css/fonts.css';

import Controller from './controller/controller';

window.onload = () => {
    const controller = new Controller();
    controller.init();
    const bowman = controller.teamPL.heroes[0];
    const bublic1 = controller.teamAI.heroes[0];
    const bublic2 = controller.teamAI.heroes[1];


    // bowman.shot(bublic1);
    // bowman.shot(bublic2);
}
