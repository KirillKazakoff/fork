const skillT = (name) => ({
    block: 'li',
    cls: `skill ${name}-pic`,
});

export const skillsT = (skills) => ({
    block: 'ul',
    cls: 'skills',
    content: skills.map(skillT),
})

export const skillboxT = (char, turn) => ({
    block: 'div',
    cls: `skillbox-menu skillbox-${turn} skillbox-${char.type}`,
});

