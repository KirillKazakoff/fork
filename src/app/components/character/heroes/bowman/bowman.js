import './bowman.css';
import Character from '../../character';
import powershot from './skills/powershot';


export default class Bowman extends Character {
    constructor(level) {
        super(level, 'bowman');
        this.attack = 5;
        this.mana = 5;
        this.moveRange = 8;
        this.attackRange = 8;

        this.skills = ['powershot'];
        this.shotAttack = 5;
        this.upFromScratch();
    }

    async powershot(target) {
        return new Promise((resolve) => {
            this.attack = this.shotAttack;
            const duration = 1200;    

            const fightPromise = new Promise((resolve) => {
                setTimeout(async () => {
                    const killed = await this.fight(target);
                    resolve(killed);
                }, duration / 4);
            })

            return Promise.all([fightPromise, powershot(this, target, duration)]).then((killed) => {
                    resolve(killed);
                });
        })
    }

    // async shot(target) {
    //     return new Promise((resolve) => {
    //         this.attack = this.shotAttack;
    //         const animation = powershot(this, target);
    //         animation.play();
    //         // setTimeout(() => animation.pause(), 200)

    //         const { duration } = animation.effect.getTiming();
    //         setTimeout(() => {
    //             this.fight(target).then((killed) => resolve(killed))
    //         }, duration / 3);
    //     })
    // }
}
