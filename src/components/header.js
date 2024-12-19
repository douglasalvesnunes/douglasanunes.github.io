class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>

            header{
                position: sticky;
                top: 0;
                z-index:1000;
            }
        
            #header{
                background-color: #F8F8F8;
                border-bottom: 3px solid #033F7D;
                font-family: 'Inter';
                width: 100%;
            }

            #logo{
                width: 56px;
                height: auto;
            }

            #nav-bar {
                display: flex;
                align-items: center;
                justify-content: space-around;
                list-style-type: none;
                margin: 0;
                padding: 0;
            }

            #nav-bar li{
                display: inline-block;
                font-size: 15px;
            }

            #nav-bar a{
                height: 100%;
            }

            #nav-bar a:link{
                color: #033F7D;
                text-decoration: none;
            }

            #nav-bar a:visited{
                color: #033F7D;
                text-decoration: none;
            }

            #nav-bar a:hover{
                text-decoration:underline;
            }

            #nav-bar button{
                background-color: #033F7D;
                border: none;
                border-radius: 7%;
                color: white;
                padding:0px 6px;
            }

            #img-telephone{
                width: 24px; 
                height: auto;
                vertical-align:middle ;
            }

            @media(max-width:450px){
                
                #header{
                    border-bottom: 2px solid #033F7D;    
                }
                
                #nav-bar{
                    display:grid;
                    grid-template-columns: auto auto auto auto;
                }

                #item1{
                    grid-column-start:1;
                    grid-column-end:2;
                    text-align: right;
                }

                #item6{
                    grid-column-start:3;
                    grid-column-end:5;
                    grid-row-start:1;
                    grid-row-end:2;
                    text-align:center;
                }

                #item2{
                    grid-column-start:1;
                    grid-column-end:2;
                    grid-row-start:4;
                    grid-row-end:5;
                }

                #item3{
                    grid-column-start:2;
                    grid-column-end:3;
                    grid-row-start:4;
                    grid-row-end:5;
                }

                #item4{
                    grid-column-start:3;
                    grid-column-end:4;
                    grid-row-start:4;
                    grid-row-end:5;
                }

                #item5{
                    grid-column-start:4;
                    grid-column-end:5;
                    grid-row-start:4;
                    grid-row-end:5;
                }

                #logo{
                    width: 62px;
                    height: auto;
                    margin-top:5px;
                }

                #img-telephone{
                    margin-right:10px;
                }
                #nav-bar button{
                    border-radius: 6%;
                    padding:5px 15px;
                }
                
                .grid-top-line{
                    margin-top: 10px;
                    margin-bottom:25px;
                }

                .grid-bottom-line{
                    margin-bottom:15px
                }
            }
        </style>

        <header>
            <div id ="header">
                <ul id="nav-bar">
                    <li id="item1" class="grid-top-line"><a href="../public/index.html"><img id="logo" src="../src/images/refritek-logo.png" alt="Logo Refritek Solucoes"></a></li>
                    <li id="item2" class="grid-bottom-line"><a href="../public/about.html">SOBRE NÓS</a></li>
                    <li id="item3" class="grid-bottom-line"><a href="../public/services.html">SERVIÇOS</a></li>
                    <li id="item4" class="grid-bottom-line"><a href="../public/contact.html">CONTATO</a></li>
                    <li id="item5" class="grid-bottom-line"><a href="../public/blog.html">BLOG</a></li>
                    <li id="item6" class="grid-top-line"><a href="tel:+55-42-0000-0000"><button><img id="img-telephone" src="../src/images/Group 234.png">(00)0000-0000</button></a>
                </ul>
            </div>
        </header>
    `;
  }
}

customElements.define('header-component', Header);