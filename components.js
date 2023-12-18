class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="container-fluid h-5 bg-info" style="height: 5rem;">
            <div class="container h-100 bg-warning d-flex align-items-center justify-content-center">
                <div class="row w-100">
                    <div class="col-md-8 text-white">
                        <h1>JY Health</h1>
                    </div>
                    <div class="col">
                        <div class="row align-items-center h-100 text-center">
                            <div class="col-4"><a href="./about.html">About</a></div>
                            <div class="col-4"><a href="./contact.html">Contact</a></div>
                            <div class="col-4"><a href="./servicelist.html">Services</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define("header-component", Header);

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid bg-info">
            <div class="container bg-warning h-100">
                <div class="row">
                    <div class="col">
                        <div class="bg-secondary text-white p-2">
                            <a href="./base.html">Content Policy</a>
                        </div>
                        <div class="bg-secondary text-white p-2">
                            <a href="./base.html">Privacy Statement</a>
                        </div>
                        <div class="bg-secondary text-white p-2">
                            <a href="./base.html">Cancellation Policy</a>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-4 ms-auto h-100 order-sm-1 d-flex align-items-center justify-content-center">
                        <ul class="d-flex w-100 justify-content-around h-100 align-items-center list-unstyled">
                            <li><a href="https://www.facebook.com/"><i class="bi bi-facebook h3"></i></a></li>
                            <li><a href="https://twitter.com/home?lang=en"><i class="bi bi-twitter h3"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i class="bi bi-instagram h3"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-sm-8">
                        <div class="bg-primary text-white p-2 m-2">
                            C JY Health
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("footer-component", Footer);