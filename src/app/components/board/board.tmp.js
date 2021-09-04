import getTileType from "./aux/getTileType";

const boardCellTmp = (cellType, percentage, position) => ({
    block: 'li',
    cls: `board__cell ${cellType}`,
    content: '',
    style: {
        'width': `${percentage}`,
        'padding-bottom': `${percentage}`,
    },
    attrs: {
        'data-position': position,
    },
});

const boardTmp = (boardSize, auxClass) => ({
    block: 'ul',
    cls: `board ${auxClass}`,
    content: genCells(boardSize),
})

function genCells(boardSize) {
    const cellSize = `${100 / boardSize}%`;
    const cells = [];

    for (let i = 0; i < boardSize ** 2; i++) {
        const cls = getTileType(i, boardSize);
        cells.push(boardCellTmp(cls, cellSize, i));
    }
    return cells;
}

export default boardTmp;
