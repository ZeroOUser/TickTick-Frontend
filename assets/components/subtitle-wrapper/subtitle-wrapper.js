'use strict';
class SubtitleWrapper extends HTMLElement {
    connectedCallback() {
        const subtitle = this.getAttribute("subtitle");
        this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon" icon-size="xxxs"><path d="M2.666 4.902c.26-.26.683-.26.943 0L8 9.292l4.391-4.39a.667.667 0 01.943.943L8.47 10.707a.667.667 0 01-.943 0L2.666 5.845a.667.667 0 010-.943z"/></svg>
            <h3 class="category-title">${subtitle}</h3>
        `
    }
}

customElements.define("subtitle-wrapper", SubtitleWrapper);