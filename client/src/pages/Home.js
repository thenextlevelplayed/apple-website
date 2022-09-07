import '../css/style.css';
// import {Helmet} from "react-helmet";
import main from "../../src/js/main";


    



const Home = () => {


 
    return(
<body>
   <header>
    <div class="container">
        <nav class="nav">
            <ul class="nav-list nav-list-mobile" >
                <li class="nav-item">
                    <div class="mobile-meun" >
                        <span class="line line-top"></span>
                        <span class="line line-bottom"></span>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="index.html" class="nav-link nav-link-apple"></a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link nav-link-bag"></a>
                </li>
            </ul>
            {/* <!-- /.nav-list nav-list-mobile --> */}
            <ul class="nav-list nav-list-larger">                
                <li class="nav-item nav-item-hidden">
                    <a href="index.html" class="nav-link nav-link-apple"></a>
                </li>
                <li class="nav-item">
                    <a href="store.html" class="nav-link">Store</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Mac</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">iPad</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">iPhone</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Watch</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">AirPods</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">TV &amp; Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Only on Apple</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Accessories</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Support</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link nav-link-search"></a> 
                </li>
                <li class="nav-item nav-item-hidden">
                    <a href="#" class="nav-link nav-link-bag"></a> 
                </li>
            </ul>
            {/* <!-- /.nav-list nav-list-larger --> */}
        </nav>
    </div>
   </header>
    
   <section class="hero iphone-13">
    <div class="container">
        <div class="title title-dark">
            <h2 class="title-heading">iPhone 13</h2>
            <h3 class="title-sub-heading">Your new superpower.</h3>
        </div>
        <div class="cta">
            <a href="#" class="cta-link cta-link-darker" id="">Learn more</a>
            <a href="#" class="cta-link cta-link-darker" id="">Buy</a>
        </div>
    </div>
   </section>

   <section class="hero iphone-13-pro">
    <div class="container">
        <div class="title title-dark">
            <h2 class="title-heading">iPhone 13 Pro</h2>
            <h3 class="title-sub-heading">Oh. So. Pro.</h3>
        </div>
        <div class="cta">
            <a href="#" class="cta-link cta-link-darker" id="">Learn more</a>
            <a href="#" class="cta-link cta-link-darker" id="">Buy</a>
        </div>
    </div>
    
   </section>

   <section class="hero back-to-school-2022">
    <div class="container">
        <div class="title title-dark">
            <h2 class="title-heading">Get <span>supercharged</span> for college.</h2>
            <h3 class="title-sub-heading">Save&nbsp;on&nbsp;Mac&nbsp;or&nbsp;iPad. Plus&nbsp;get&nbsp;a&nbsp;gift&nbsp;card&nbsp;up&nbsp;to&nbsp;$150.</h3>
        </div>
        <div class="cta">
            <a href="#" class="cta-link cta-link-darker" id="">Shop now</a>
            {/* <!-- <a href="#" class="cta-link" id="">Buy</a> --> */}
        </div>
    </div>
   </section>

   <section class="collection">
    <div class="collection-container">
        <div class="collection-module macbook-air">
            <div class="collection-title title-dark">
                <h2 class="collection-title-heading">MacBook Air</h2>
                <h3 class="collection-title-word"></h3>
            </div>
            <div class="cta">
                <a href="#" class="cta-link cta-link-darker" id="">Learn more</a>
                <a href="#" class="cta-link cta-link-darker" id="">Buy</a>
            </div>
        </div>
        <div class="collection-module macbook-pro-13">
            <div class="collection-title title-white">
                <h2 class="collection-title-heading">MacBook Pro 13"</h2>
                <h3 class="collection-title-word"></h3>
            </div>            
            <div class="cta">
                <a href="#" class="cta-link cta-link-darker" id="">Learn more</a>
                <a href="#" class="cta-link cta-link-darker" id="">Buy</a>
            </div>
        </div>
    </div>

    <div class="collection-container">
        <div class="collection-module watch">
            <div class="collection-title title-dark">
                <h2 class="collection-title-heading"></h2>
                <p class="title-sub-heading">It’s our largest display yet.</p>
            </div>
            <div class="cta">
                <a href="#" class="cta-link cta-link-darker" id="">Learn more</a>
                <a href="#" class="cta-link cta-link-darker" id="">Buy</a>
            </div>
        </div>
        <div class="collection-module ipad-air">
            <div class="collection-title title-white">
                <h2 class="collection-title-heading"></h2>
                <p class="title-sub-heading">Light. Bright. Full of might.</p>
            </div>            
            <div class="cta">
                <a href="#" class="cta-link cta-link-darker" id="">Learn more</a>
                <a href="#" class="cta-link cta-link-darker" id="">Buy</a>
            </div>
        </div>
    </div>

    <div class="collection-container">
        <div class="collection-module apple-pay">
            {/* <!-- <div class="collection-title title-dark">
                <h2 class="collection-title-heading"></h2>
                <h3 class="title-sub-heading"></h3>
            </div>
            <div class="cta">
                <a href="#" class="cta-link cta-link-darker" id="">Learn more</a>
                <a href="#" class="cta-link cta-link-darker" id="">Buy</a>
            </div> --> */}
        </div>
        <div class="collection-module apple-music">
            {/* <!-- <div class="collection-title title-white">
                <h2 class="collection-title-heading"></h2>
                <h3 class="title-sub-heading"></h3>
            </div>            
            <div class="cta">
                <a href="#" class="cta-link cta-link-darker" id="">Learn more</a>
                <a href="#" class="cta-link cta-link-darker" id="">Buy</a>
            </div> --> */}
        </div>
    </div>
   </section>
   <section class="carousel-module">
    <div class="item-module">
        <div class="item item-1">
            <a href="#item-1">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Drama</span> <span class="m-dot" aria-hidden="true">·</span> Family. It’s a killer.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-2">
            <a href="#item-2">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Animation</span> <span class="m-dot" aria-hidden="true">·</span> Sometimes all you need is for everything to go wrong.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-3">
            <a href="#item-3">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Drama</span> <span class="m-dot" aria-hidden="true">·</span> One man’s freedom hides in another man’s darkness.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-4">
            <a href="#item-4">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Comedy</span> <span class="m-dot" aria-hidden="true">·</span> 20 Emmy® Nominations Including Best Comedy</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-5">
            <a href="#item-5">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Sports</span> <span class="m-dot" aria-hidden="true">·</span> Live MLB games, every Friday.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-6">
            <a href="#item-6">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Thriller</span> <span class="m-dot" aria-hidden="true">·</span> 14 Emmy® Nominations Including Best Drama</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-7">
            <a href="#item-7">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Drama</span> <span class="m-dot" aria-hidden="true">·</span> Based on actual events from Hurricane Katrina.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-8">
            <a href="#item-8">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Comedy</span> <span class="m-dot" aria-hidden="true">·</span> She’s about to change her fortune.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-9">
            <a href="#item-9">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Drama</span> <span class="m-dot" aria-hidden="true">·</span> 3 Emmy® Nominations Including Best Actress</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-10">
            <a href="#item-10">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Documentary</span> <span class="m-dot" aria-hidden="true">·</span> Unknown. Unexplained. Unbelievable. Until now.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="item-module">
        <div class="item item-11">
            <a href="#item-11">
                <div class="inner">
                    <div class="info-top">
                        <figure class="atv-plus-icon"></figure>
                        <figure class="logo"></figure>
                    </div>
                    <div class="info-bottom">
                        <div class="button-play">Stream now <span class="play-button-icon"></span></div>
                        <p class="typography-shows-genre"><span class="genre">Mystery</span> <span class="m-dot" aria-hidden="true">·</span> Solving mysteries. Making waves.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    {/* <!-- 上一頁 下一頁 --> */}
    <div class="paddlenav">
        <ul>
            <li class="previous">
                <button class="arrow previous-arrow" onclick="plusSlides(-1)"></button>
            </li>
            <li class="next">
                <button class="arrow next-arrow" onclick="plusSlides(1)"></button>
            </li>
        </ul>
    </div>
    {/* <!-- 點點 --> */}
    <div class="dot-wrapper">
        <ul class="dotnav-items">
           <li role="presentation">
            <a href="#item-1" class="dot" onclick="currentSlide(1)">
                <span>Item 1</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-2" class="dot" onclick="currentSlide(2)">
                <span>Item 2</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-3" class="dot" onclick="currentSlide(3)">
                <span>Item 3</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-4" class="dot" onclick="currentSlide(4)">
                <span>Item 4</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-6" class="dot" onclick="currentSlide(5)">
                <span>Item 6</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-6" class="dot" onclick="currentSlide(6)">
                <span>Item 6</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-7" class="dot" onclick="currentSlide(7)">
                <span>Item 7</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-8" class="dot" onclick="currentSlide(8)">
                <span>Item 8</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-9" class="dot" onclick="currentSlide(9)">
                <span>Item 9</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-10" class="dot" onclick="currentSlide(10)">
                <span>Item 10</span>
            </a>
           </li>
           <li role="presentation" >
            <a href="#item-11" class="dot" onclick="currentSlide(11)">
                <span>Item 11</span>
            </a>
           </li>
        </ul>
    </div>

    {/* <buttom class="pasue-play">
        <svg viewBox="0 0 85 85">
            <defs>
                <g id="pause-icon">
                    <path d="M42.5,84.5c-23.16,0-42-18.84-42-42c0-23.16,18.84-42,42-42c23.16,0,42,18.84,42,42C84.5,65.66,65.66,84.5,42.5,84.5z M42.5,4.5c-20.95,0-38,17.05-38,38s17.05,38,38,38s38-17.05,38-38S63.45,4.5,42.5,4.5z"></path>
                    <path d="M50,28.25c1.1,0,2,0.9,2,2v24c0,1.1-0.9,2-2,2s-2-0.9-2-2v-24C48,29.15,48.9,28.25,50,28.25z"></path>
                    <path d="M35,28.25c1.1,0,2,0.9,2,2v24c0,1.1-0.9,2-2,2s-2-0.9-2-2v-24C33,29.15,33.9,28.25,35,28.25z"></path>
                </g>
                <g id="play-icon">
                    <path d="M42.5,84.5c-23.16,0-42-18.84-42-42c0-23.16,18.84-42,42-42c23.16,0,42,18.84,42,42C84.5,65.66,65.66,84.5,42.5,84.5z M42.5,4.5c-20.95,0-38,17.05-38,38s17.05,38,38,38s38-17.05,38-38S63.45,4.5,42.5,4.5z"></path>
                    <path d="M55.73,41.55c0.3,0.45,0.3,1.03,0,1.48c-0.11,0.23-0.29,0.41-0.52,0.52L35.27,56.1c-0.23,0.12-0.48,0.17-0.74,0.15 c-0.8-0.03-1.45-0.68-1.48-1.48v-25c-0.01-0.26,0.07-0.52,0.22-0.74c0.11-0.23,0.29-0.41,0.52-0.52c0.22-0.15,0.48-0.23,0.74-0.22 c0.25,0.01,0.5,0.06,0.74,0.15L55.21,41c0.21,0.16,0.39,0.36,0.52,0.59"></path>
                </g>
            </defs>
        </svg>
    </buttom> */}
   </section>

   <footer class="globalfooter">
    <div class="gf-content">
        <section>
            <ul>
                <li><span id="footnote-1">1. Qualified&nbsp;Purchasers receive an Apple&nbsp;Gift&nbsp;Card when they purchase an eligible Mac or iPad at a Qualifying&nbsp;Location. Only one Apple&nbsp;Gift&nbsp;Card per eligible Mac or iPad per Qualified&nbsp;Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers shall receive a discount equal to the value of the Apple&nbsp;Gift&nbsp;Card off the price of the eligible Mac or iPad, but will be charged for all items in their cart, including the Apple&nbsp;Gift&nbsp;Card. Important notice regarding the checkout receipt and monthly statement for Apple&nbsp;Card&nbsp;Monthly&nbsp;Installment&nbsp;(ACMI) purchases with this promotion: Qualified&nbsp;Purchasers selecting ACMI (a 0% APR payment option) as payment type at checkout shall receive a discount equal to the value of the Apple&nbsp;Gift&nbsp;Card off the price of the eligible Mac or iPad. This will result in one ACMI installment plan over 12 months for the eligible iPad or Mac discounted by the instant credit, and a second ACMI installment plan over 12 months for the full price of the Apple&nbsp;Gift&nbsp;Card. The total combined amount charged over the two separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, Qualified Purchasers will receive and be charged for the Apple&nbsp;Gift&nbsp;Card in the amount of the applicable discount off the eligible Mac or iPad. ACMI is subject to credit approval and credit limit. Variable&nbsp;APRs for Apple&nbsp;Card other than ACMI range from 13.24% to 24.24% based on creditworthiness. Rates as of August 1, 2022. If you choose the pay‑in‑full or one‑time‑payment option for an ACMI‑eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple&nbsp;Card. Taxes and shipping are not included in ACMI transactions and are subject to your standard purchase APR. See the Apple&nbsp;Card&nbsp;Customer&nbsp;Agreement at <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank" rel="nofollow">https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf</a> for more information. ACMI is not available for purchases made online at the following special stores: Apple&nbsp;Employee&nbsp;Purchase Plan; participating corporate Employee&nbsp;Purchase&nbsp;Programs; Apple&nbsp;at&nbsp;Work for small businesses; Government, and Veterans and Military&nbsp;Purchase&nbsp;Programs, or on refurbished devices. Apple&nbsp;Card is issued by Goldman&nbsp;Sachs&nbsp;Bank&nbsp;USA, Salt&nbsp;Lake&nbsp;City&nbsp;Branch. Available for qualifying applicants in the United&nbsp;States. If you reside in the U.S. territories, please call Goldman&nbsp;Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple&nbsp;Card. This offer cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Availability of in‑store promotion offerings may be limited by Apple&nbsp;Store location closures as a result of COVID‑19. Additional restrictions apply. View full terms and conditions of offer <a href="/us/shop/back-to-school/terms-conditions">here</a>.
            </span></li>
                <li><span id="footnote-2">2. Through August 28, 2022, Apple will donate $10 for every purchase made in the U.S. using Apple&nbsp;Pay on <a href="/store/">apple.com</a>, through the Apple&nbsp;Store app, or at an Apple&nbsp;Store. Donations are limited to a maximum of one million dollars ($1,000,000). The donation goes to the National Park Foundation.</span></li>
                <li>Photo credit for Apple&nbsp;Pay promotion: “Sunset” by Poffenberger Photography. Shot at Scotts Bluff National Monument in Scotts Bluff County, Nebraska.</li>
                <li><span class="tv-plus-legal">Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.</span></li>
            </ul>
        </section>
    </div>

</footer>



</body>

  );
};

// abc();




  export default Home;
