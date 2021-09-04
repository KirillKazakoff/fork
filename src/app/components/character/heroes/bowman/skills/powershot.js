import './powershot.css';
import powershotT from "./powershot.tmp";
import engine from '../../../../../lib/engine/engine';

import { getRotationDegree } from '../../../../../lib/utils/animations.utl';

export default function powershot(attacker, victim, duration) {
    return new Promise((resolve) => {
        const container = attacker.getCell();
        const html = engine(powershotT(attacker));
        container.insertAdjacentHTML('beforeEnd', html);

        const powershot = container.querySelector('.powershot');
        const degree = getRotationDegree(attacker, victim);

        if (degree === 0) powershot.style.top = '35px';
        if (degree === 135) powershot.style.top = '-20px'
        if (degree === 180) powershot.style.top = '-30px';
        if (degree === 225 || degree === 270) powershot.style.left = '70px';
        if (degree === 315) powershot.style.left = '90px';

        const animation = powershot.animate([
            { transform: `rotate(${degree}deg) scaleX(0)` },
            { transform: `rotate(${degree}deg) scaleX(10)` },
        ], {
            duration: duration,
            iterations: 1,
            easing: 'cubic-bezier(0.5, 0.1, 0.4, 0.9)',
            // easing: 'ease'
        });

        animation.addEventListener('finish', () => {
            powershot.remove();
            resolve();
        })
    })
}


















































// import './powershot.css';
// import powershotT from "./powershot.tmp";
// import engine from '../../../../../lib/engine/engine';

// import { getRotationDegree } from '../../../../../lib/utils/animations.utl';

// export default function powershot(attacker, victim, duration) {
//     return new Promise((resolve) => {
//         const container = attacker.getCell();
//         const html = engine(powershotT(attacker));
//         container.insertAdjacentHTML('beforeEnd', html);

//         const powershot = container.querySelector('.powershot');
//         const degree = getRotationDegree(attacker, victim);

//         if (degree === 0) powershot.style.top = '35px';
//         if (degree === 225) powershot.style.left = '70px';
//         if (degree === 270) powershot.style.left = '70px';
//         if (degree === 315) powershot.style.left = '100px';

//         const animation = powershot.animate([
//             { transform: `rotate(${degree}deg) scaleX(0)` },
//             { transform: `rotate(${degree}deg) scaleX(10)` },
//         ], {
//             duration: duration,
//             iterations: 1,
//             // easing: 'cubic-bezier(0.2, 0.4, 0.4, 0.9)',
//             easing: 'ease'
//         });

//         animation.addEventListener('finish', () => {
//             container.remove(powershot);
//             resolve();
//         })

//         animation.pause();
//         return animation;
//     })
// }
















