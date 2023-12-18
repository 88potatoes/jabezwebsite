class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-sm container-fluid bg-info">
            <div class="container h-100 bg-warning d-flex align-items-center justify-content-center">
                <div class="row w-100">
                    <div class="col-8 text-white h1">
                        JY Health
                    </div>
                    <nav class="navbar-nav col-4 collapse navbar-collapse align-items-center justify-content-end" id="navElements">
                            <a href="./about.html" class="p-2 nav-link">About</a>
                            <a href="./contact.html" class="p-2 nav-link">Contact</a>
                            <a href="./servicelist.html" class="p-1 nav-link">Services</a>
                    </nav>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navElements" aria-expanded="false" aria-controls="navElements" aria-expanded="false" aria-label="Toggle Navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>`
        ;
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