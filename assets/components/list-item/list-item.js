'use strict';
class ListItem extends HTMLElement {
    connectedCallback() {
        const iconId = this.getAttribute('icon-id');
        const contentText = this.getAttribute('content-text');
        const tips = JSON.parse(this.dataset.tips);
        this.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon" icon-size="xs">
                <use href="${iconId}"></use>
            </svg>
            <p class="content-text">${contentText}</p>
            <div class="tips">
                  ${tips.map(tip => `<p>${tip}</p>`).join('')}
            </div>
            <p class="edit-menu hidden">...</p>
        `
    }
}

customElements.define('list-item', ListItem);

const setItemActive = function(item, l) {
    l.forEach((i) => {
        i.classList.remove('bg-active');
    });
    item.classList.add('bg-active');
}
const listItems = document.querySelectorAll('list-item');
listItems.forEach((i) => {
    i.addEventListener('click', () => {
        setItemActive(i, listItems);
    });
    i.addEventListener('mouseenter', () => {
        const tips = i.querySelector('.tips');
        const editMenu = i.querySelector('.edit-menu');
        tips.classList.add('hidden');
        editMenu.classList.remove('hidden');
    })
    i.addEventListener('mouseleave', () => {
        const tips = i.querySelector('.tips');
        const editMenu = i.querySelector('.edit-menu');
        tips.classList.remove('hidden');
        editMenu.classList.add('hidden');
    })
})