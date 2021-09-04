export default function onLeftClick(e) {
    const { card } = this.interfacePL;

    if (e.target.classList.contains('skill')) {
        const skill = e.target.classList[1].split('-')[0];
        card.char.skillActive = skill;

        e.target.classList.add('selected', 'selected-yellow');
    }
}