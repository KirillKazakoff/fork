const btnRestart = {
    block: 'button',
    cls: 'btn btn-restart',
    content: 'New Game',
}

const btnSave = {
    block: 'button',
    cls: 'btn btn-save',
    content: 'Save Game',
}

const btnLoad = {
    block: 'button',
    cls: 'btn btn-load',
    content: 'Load Game',
}

const menuButton = (btnT) => ({
    block: 'li',
    cls: 'menu-button',
    content: btnT,
})

const menuButtons = {
    block: 'ul',
    cls: 'menu-buttons',
    content: [btnRestart, btnSave, btnLoad].map(menuButton),
}

const menuIcon = {
    block: 'div',
    cls: 'menu-icon',
    content: '',
}

const menuT = {
    block: 'div',
    cls: 'menu',
    content: [menuIcon, menuButtons],  
}

export default menuT;



