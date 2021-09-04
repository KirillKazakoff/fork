export function getCellCoords(char) {
    const cell = char.getCell();
    const coords = cell.getBoundingClientRect();

    let { top, left } = coords;
    top = top + pageYOffset;
    left = left + pageXOffset;

    const coordsObj = { top, left };
    return coordsObj;
}

export function getRotationDegree(attacker, victim) {
    const { left: attackerLeft, top: attackerTop } = getCellCoords(attacker);
    const { left: victimLeft, top: victimTop } = getCellCoords(victim);

    const a = Math.abs(attackerLeft - victimLeft);
    const b = Math.abs(attackerTop - victimTop);

    let degree = 0;
    if (attackerLeft === victimLeft) {
        degree = attackerTop > victimTop ? 270 : 90;
        return degree;
    }

    if (attackerTop === victimTop) {
        degree = attackerLeft > victimLeft ? 180 : 0;
        return degree;
    }

    const c = Math.sqrt(a ** 2 + b ** 2);
    const cos = ((a ** 2) + (c ** 2) - (b ** 2)) / (2 * a * c);
    degree = Math.acos(cos) * 180 / Math.PI;

    if (attackerLeft < victimLeft && attackerTop > victimTop) {
        return 270 + degree;
    }

    if (attackerLeft > victimLeft && attackerTop < victimTop) {
        return 180 - degree;
    }

    if (attackerLeft > victimLeft && attackerTop > victimTop) {
        return 180 + degree;
    }

    return degree;
}
