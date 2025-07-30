'use strict';
class FeatureCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name");
        const heading = this.getAttribute("heading");
        const details = this.getAttribute("details");
        const img = this.getAttribute("img");
        const video = this.getAttribute("video");
        this.innerHTML = `
            <div>
                <div class="__body">
                    <div class="__text">
                        <p class="__name">${name}</p>
                        <h3 class="__title">
                            ${heading}
                        </h3>
                        <p class="__details">
                            ${details}
                        </p>
                    </div>
                    <img src="${img}" alt="" loading="lazy">
                </div>
                <video preload="metadata" loading="lazy" autoplay muted loop class="__cover">
                    <source src="${video}" type="video/mp4">
                </video>
            </div>
        `
    }
}

customElements.define('feature-card', FeatureCard);