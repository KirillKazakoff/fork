export default function onMenuClick(event) {
    const { target } = event;
    const menu = target.parentElement;
    const btnList = menu.querySelector('.menu-buttons');

    btnList.classList.toggle('buttons-active');
}
