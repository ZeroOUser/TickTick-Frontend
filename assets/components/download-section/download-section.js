'use strict';
class DownloadSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="${this.className}">
                <div class="card full-wrapper">
                    <div class="content">
                        <div class="text-wrapper">
                            <h3 class="title">Sync across all platforms</h3>
                            <p>Whether it's your phone, computer, tablet, or watch, TickTick offers real-time sync and seamless connection.</p>
                        </div>
                        <button>Download</button>
                    </div>
                    <img src="assets/images/platform.png" alt="image of different devices opening TickTick." loading="lazy">
                </div>
            </section>
        `
    }
}

customElements.define('download-section', DownloadSection);