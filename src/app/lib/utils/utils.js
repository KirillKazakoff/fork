/* eslint-disable no-restricted-globals */
export function getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
}

export function sortAscending(prop, arr) {
    const array = arr;

    if (array.length < 1) {
        return 0;
    }
    if (typeof array[0][prop] === 'number') {
        array.sort((a, b) => a[prop] - b[prop]);
    }
    if (typeof array[0][prop] === 'string') {
        array.sort((a, b) => {
            if (a[prop] < b[prop]) return -1;
            if (a[prop] > b[prop]) return 1;
            return 0;
        })
    }
    return array;
}

export function sortDescending(prop, arr) {
    const array = arr;

    if (array.length < 1) {
        return 0;
    }
    if (typeof array[0][prop] === 'number') {
        array.sort((a, b) => b[prop] - a[prop]);
    }
    if (typeof array[0][prop] === 'string') {
        array.sort((a, b) => {
            if (b[prop] < a[prop]) return -1;
            if (b[prop] > a[prop]) return 1;
            return 0;
        })
    }
    return array;
}

export function getHighestPropChar(prop, chars) {
    return sortDescending(prop, chars)[0];
}

export function getLowestPropChar(prop, chars) {
    return sortAscending(prop, chars)[0];
}

export function setify(iterable) {
    return [...new Set(iterable)];
}

