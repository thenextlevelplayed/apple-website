import '../css/style.css';
// import {Helmet} from "react-helmet";
import main from "../../src/js/main";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {


 
    return(
<body>
   <Navbar />
    
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
   </section>
   <Footer />

</body>


  );
};

// abc();




  export default Home;
