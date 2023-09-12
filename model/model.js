
var homeContent 
= `<div class="home-hero">
        <h1 id="home-hero-text">Shoes Made to Last</h1>
    </div>

    <section class="display">
        <div class="item-card">
            <img src="./assets/imgs/img1.jpg" class="item-img">
            <p class="item-name">Crimson Train</p>
            <p class="item-price">180.00$</p>
        </div>
        <div class="item-card">
            <img src="./assets/imgs/img2.jpg" class="item-img">
            <p class="item-name">Speed Flex 22</p>
            <p class="item-price">220.00$</p>
        </div>
        <div class="item-card">
            <img src="./assets/imgs/img3.jpg" class="item-img">
            <p class="item-name">Sport Type R</p>
            <p class="item-price">100.00$</p>
        </div>
    </section>

    <section class="questions"></section>

`;

var aboutContent 
= `<h1>About Page</h1>`;

var productContent 
= `<h1>Product Page</h1>`;

var contactContent 
= `<h1>Contact Page</h1>`;

export function addPageContent(pageName){
    let pageContentName = pageName + "Content"
    $("#app").html(eval(pageContentName))
    
    // $("#app").html(`<h1>${pageName} Page</h1>`)
    
}

