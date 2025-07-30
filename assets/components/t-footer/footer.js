'use strict';
class TFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container">
                <div class="link-container">
                    <div class="category">
                        <h4 class="title">Products</h4>
                        <ul>
                            <li><a href="#">Get Started</a></li>
                            <li><a href="#">Download Apps</a></li>
                            <li><a href="#">premium</a></li>
                            <li><a href="#">Education offer</a></li>
                            <li><a href="#">Gift Cards</a></li>
                        </ul>
                    </div>
                    <div class="category">
                        <h4 class="title">Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Translations</a></li>
                        </ul>
                    </div>
                    <div class="category">
                        <h4 class="title">resources</h4>
                        <ul>
                            <li><a href="#">URL Scheme</a></li>
                            <li><a href="#">Refer Friends & Earn</a></li>
                            <li><a href="#">Integrations</a></li>
                        </ul>
                    </div>
                    <div class="category">
                        <h4 class="title">About</h4>
                        <ul>
                            <li><a href="#">About Use</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Media</a></li>
                        </ul>
                    </div>
                    <div class="category">
                        <h4 class="title">Legal</h4>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">License</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div class="category social">
                    <select name="lang-picker" id="" class="lang-picker">
                        <option value="English">English</option>
                    </select>
                    <ul class="icons">
                        <li><a href="#"><img src="assets/images/twitter.png" alt=""></a></li>
                        <li><a href="#"><img src="assets/images/reddit.png" alt=""></a></li>
                        <li><a href="#"><img src="assets/images/facebook.png" alt=""></a></li>
                        <li><a href="#"><img src="assets/images/instagram.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
            <p class="copyright-wrapper">&copy; 2025 TickTick Team</p>
        `
    }
}

customElements.define("t-footer", TFooter);