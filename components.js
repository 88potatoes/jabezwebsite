class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-dark navbar-expand-sm container-fluid bg-primary pt-6 shadow">
            <div class="container h-100 d-flex align-items-center justify-content-center">
                <div class="row w-100">
                    <div class="col col-sm-8 text-white h1 mb-0">
                        JY Health
                    </div>
                    <nav class="justify-content-end text-center col col-sm-4 collapse navbar-collapse align-items-center" id="navElements">
                        <a href="./about.html" class="p-2 nav-link text-white shadow">About</a>
                        <a href="./contact.html" class="p-2 nav-link text-white">Contact</a>
                        <a href="./servicelist.html" class="p-2 nav-link text-white">Services</a>
                    </nav>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navElements" aria-expanded="false" aria-controls="navElements" aria-expanded="false" aria-label="Toggle Navigation">
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
        <div class="container-fluid bg-primary shadow">
            <div class="container h-100">
                <div class="row">
                    <div class="col">
                        <div class="text-white p-2">
                            <a href="./base.html" class="nav-link">Content Policy</a>
                        </div>
                        <div class="text-white p-2">
                            <a href="./base.html" class="nav-link">Privacy Statement</a>
                        </div>
                        <div class="text-white p-2">
                            <a href="./base.html" class="nav-link">Cancellation Policy</a>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-4 ms-auto h-100 order-sm-1 d-flex align-items-center justify-content-center">
                        <ul class="d-flex w-100 justify-content-around h-100 align-items-center list-unstyled">
                            <li><a href="https://www.facebook.com/" class="nav-link"><i class="bi bi-facebook h3 m-0 text-white"></i></a></li>
                            <li><a href="https://twitter.com/home?lang=en" class="nav-link"><i class="bi bi-twitter h3 m-0 text-white"></i></a></li>
                            <li><a href="https://www.instagram.com/" class="nav-link"><i class="bi bi-instagram h3 m-0 text-white"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-sm-8">
                        <div class=" text-white p-2 m-2 border-top border-white">
                        © JY Health 2023
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("footer-component", Footer);