export default function getTileType(index, boardSize) {
    const allCells = boardSize ** 2;

    if (index === 0) {
        return 'top-left';
    }
    if (index === boardSize - 1) {
        return 'top-right';
    }
    if (index < boardSize) {
        return 'top';
    }

    if (index === allCells - boardSize) {
        return 'bottom-left';
    }
    if (index === allCells - 1) {
        return 'bottom-right';
    }
    if (index >= allCells - boardSize) {
        return 'bottom';
    }

    if (index % boardSize === 0) {
        return 'left';
    }
    if ((index + 1) % boardSize === 0) {
        return 'right';
    }
    return 'center';
}
