export default function showCharName(str) {
    const spans = this.card.querySelector('.char-name').children;
    const pairs = getHtmlIndexes(str);
    
    Array.from(spans).forEach((span) => span.textContent = '');

    pairs.forEach(([index, value]) => {
        const span = spans[index];
        span.className = value === ' ' ? 'space' : `w${index}`;
        
        spans[index].textContent = value;
    })
}

function getHtmlIndexes(str) {
    const upperStr = str[0].toUpperCase() + str.slice(1);
    const strArr = upperStr.split('');
    const maxLength = 14;
    const middle = maxLength / 2;

    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < maxLength; i++) {
        i < middle ? leftArr.push(i) : rightArr.push(i);
    }

    let nowArr = leftArr;
    let last = 0;
    strArr.forEach(() => {
        last = nowArr == leftArr ? nowArr.pop() : nowArr.shift();
        nowArr = nowArr === leftArr ? rightArr : leftArr;
    })

    const pairs = [];
    let end = 0;
    let start = 0;

    start = last < middle ? last : last - strArr.length + 1;
    end = start + strArr.length;

    for (let i = start; i < end; i += 1) {
        pairs.push([i, strArr.shift()]);
    }
    return pairs;
}