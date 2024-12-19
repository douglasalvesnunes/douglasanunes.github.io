class WhatsBtn extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <style>
                #whatsappFixedButton {
                  z-index: 1000;
                  position:fixed;
                  bottom: 3rem;
                  right: 3rem;
                  color: #25D366;
                  font-size: 4rem;
                }
            </style>
            
            <div id="whatsBtn-container">
                <i id="whatsappFixedButton" class="fa-brands fa-whatsapp"><a href="https://wa.me/5531989368149"></a></i>
            </div>
         `;
  }
}

customElements.define('whatsbtn-component', WhatsBtn);