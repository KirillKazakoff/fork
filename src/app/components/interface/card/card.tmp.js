import charNameT from "./charName/charName.tmp";

const cardCharT = (type) => ({
    block: 'div',
    cls: `char-in-card ${type}`,
    content: '',
});

const cardGemT = (gem) => ({
    block: 'div',
    cls: `gem ${gem}`,
    content: '',
});

const cardManaT = (mana) => ({
    block: 'div',
    cls: `specials mana`,
    content: mana,
});

const cardHealthT = (health) => ({
    block: 'div',
    cls: `specials health`,
    content: health,
});

const cardAttackT = (attack) => ({
    block: 'div',
    cls: `specials attack`,
    content: attack
});

const cardT = (char) => ({
    block: 'div',
    cls: `card card-${char.type}`,
    content: getCardContent(char),
});

function getCardContent(charObj) {
    const char = cardCharT(charObj.type);
    const gem = cardGemT(charObj.gem);
    const mana = cardManaT(charObj.mana);
    const health = cardHealthT(charObj.health);
    const attack = cardAttackT(charObj.attack);
    const charName = charNameT(charObj.type);

    return [char, gem, mana, health, attack, charName];
};

export default cardT;
