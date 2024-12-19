class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <style>

                footer{
                    font-family: 'Inter';
                }

                #footer-container{
                    background-color: black;
                    display: flex;
                    justify-content: space-evenly;
                    opacity: 80%;
                    width:100%;
                }

                #container-sociais{
                    margin-top: 35px;
                    z-index: 1000;
            
                }

                .bold-centered{
                    font-weight: 1000;
                    display: inline-block;
                    text-align: center;
                    margin: 0;
                }

                .contato-sociais{
                    display: inline-block;
                    text-align: center;
                    margin: 25px 0 25px 0;
                    width: 180px;
                }

                #logo-img{
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 5rem;
                    height: auto;
                }

                .contato-sociais p{
                    color: white;
                    text-align: left;
                    margin: 15px 0 0 0 ;
                }

                .contato-sociais ul{
                    display: flex;
                    justify-content: space-between;
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }

                #container-sociais li{
                    margin-top: 15px;
                }

                .contato-sociais .img-sociais{
                    height: 2rem;
                    width: 2rem;
                }

                #links-container{
                    display: inline-block;
                    width: 340px;
                    margin-left:0; 
                }

                #links-container p{
                    padding-bottom: 25px;
                }

                #inside-wrapper{
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                #inside-wrapper a{
                    color: white;
                    padding: 7px;
                }

                .left-align{
                    width: 60%;
                    text-align: left;
                }

                .right-align{
                    width: 40%;
                    text-align: right;
                }

                #container-orcamento{
                    display: flex;
                    justify-content: center;
                    margin: 25px 0 25px 0;
                    width: 170px;
                }

                #container-orcamento h2{
                    display: inline-block;
                    color: white;
                    font-size: 21px;
                    margin: 20px 0 25px 0;
                    text-align: center;
                }

                #container-orcamento p{
                    color: white;
                    display: block;
                    margin: 0 auto 0 auto;
                    text-align: center;
                }

                #footer-button{
                    background-color: #043E7D;
                    border: none;
                    color: white;
                    display: block;
                    margin: 20px auto 0 auto;
                    padding: 10px 25px;
                    text-decoration: none;
                    width: 100%;
                }

                #copyright-container{
                    background-color: black;
                    opacity: 80%;
                    text-align: center;
                }

                #copyright-container p{
                    color: white;
                    margin: 0;
                }
            </style>

            <footer>
                <div id="footer-container">
                    <div id="container-sociais" class="contato-sociais">
                        <img id="logo-img" src="../src/images/refritek-logo-branco.png">
                        <p>contato@refritek.com</p>
                        <p>+55(41)0000-0000</p>
                        <ul>
                             <li><a href="https:wa.me/+5531989368149" target="_blank"><img class="img-sociais" src="../src/images/WhatsApp.svg.png" alt="Whatsapp logo"></a></li>
                            <li><a href="https://www.facebook.com" target="_blank"><img class="img-sociais" src="../src/images/Facebook.png" alt="Facebook logo"></a></li>
                            <li><a href="https://www.instagram.com/refriteksolucoes/" target="_blank"><img class="img-sociais" src="../src/images/Instagram.png" alt="Instagram logo"></a></li>
                        </ul>
                    </div>
                    <div class="contato-sociais" id="links-container">
                        <p class="bold-centered">LINKS</p>
                        <div id="inside-wrapper">
                            <a class="left-align" href="#">Perguntas Frequentes</a>
                            <a class= right-align href="#">Gerenciamento</a>
                        </div>
                        <div id="inside-wrapper">
                            <a class="left-align" href="#">Fórum</a>
                            <a class= right-align href="#">Sobre Nós</a>
                        </div>
                        <div id="inside-wrapper">
                            <a class="left-align" href="#">Termos e Condições</a>
                            <a class= right-align href="#">Serviços</a>
                        </div>
                        <div id="inside-wrapper">
                            <a class="left-align" href="#">Política de Privacidade</a>
                            <a class= right-align href="#">Blog</a>
                        </div>
                    </div>
                    <div id="container-orcamento">
                        <div id="wrapper-orcamento">
                            <h2 class="bold-centered">Solicite seu orçamento</h2>
                            <p>Resposta em ate XXh!</p>
                            <button id="footer-button">Solicite agora</button>
                        </div>
                    </div>
                </div>
                <div id="copyright-container">
                    <p>© 2024 Refritek Soluções.Todos os direitos reservados.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);