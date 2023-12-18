class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="container-fluid h-5 bg-info">
            <div class="container h-100 bg-warning d-flex align-items-center justify-content-center">
                <div class="row w-100">
                    <div class="col-md-8 text-white">
                        <h1>JY Health</h1>
                    </div>
                    <div class="col">
                        <div class="row align-items-center h-100 text-center">
                            <div class="col-4">About</div>
                            <div class="col-4">Contact</div>
                            <div class="col-4">Services</div>
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
                            Content Policy
                        </div>
                        <div class="bg-secondary text-white p-2">
                            Privacy Statement
                        </div>
                        <div class="bg-secondary text-white p-2">
                            Cancellation Policy
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-4 ms-auto h-100 order-sm-1 d-flex align-items-center justify-content-center">
                        <ul class="d-flex w-100 justify-content-around h-100 align-items-center list-unstyled">
                            <li><i class="bi bi-facebook h3"></i></li>
                            <li><i class="bi bi-twitter h3"></i></li>
                            <li><i class="bi bi-instagram h3"></i></li>
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