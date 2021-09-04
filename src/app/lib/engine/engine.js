export default function engine(node) {
    if ((node === false) || (node === undefined) || (node === null)) {
        return '';
    }

    if ((node === true) || (typeof node === 'string') || (typeof node === 'number')) {
        return node;
    }

    if (Array.isArray(node)) {
        let fragment = '';

        node.forEach((b) => {
            const htmlElement = engine(b);
            fragment += htmlElement;
        })

        return fragment;
    }

    let { block, cls, content, attrs, style } = node;
    let htmlAttrs = '';
    let htmlStyle = '';

    if (attrs) {
        Object.entries(attrs).forEach(([key, value]) => {
            htmlAttrs += `${key}="${value}"`;
        });
    }

    if (style) {
        let str = ''
        Object.entries(style).forEach(([key, value]) => {
            str += `${key}: ${value}; `;
        });
        htmlStyle = `style="${str}"`;
    }

    const htmlContent = engine(content);
    const htmlElement = generateHtml(block, cls, htmlContent, htmlAttrs, htmlStyle);

    return htmlElement;
}

function generateHtml(block, cls, content, attrs, style) {
    return `<${block} ${attrs} class="${cls}"${style}>${content}</${block}>`;
}