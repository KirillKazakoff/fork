const maxLength = 14;

const letterT = (count) => ({
    block: 'span',
    cls: `w${count}`,
    content: '',
});

const charNameT = (name) => ({
    block: 'div',
    cls: 'specials char-name',
    content: genLetters(maxLength),
});

function genLetters(count) {
    const letters = [];
    for (let i = 0; i < count; i += 1) {
        letters.push(letterT(i));
    }
    return letters;
};

export default charNameT;