
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

    <section class="questions">
        <h1 class="q-head">Frequently Asked Questions</h1>
        <p class="q-des">We gathered the answers to some popular questions below. If you can't find your question below feel free to contact us,<br> and we'll be happy to help.</p>
        <div class="question-holder">
            <div class="question-col" >
                <div class="question">
                    <p class="question-name">Do you ship internationally?</p>
                    <p class="question-answer">Yes, we are pleased to confirm that we offer worldwide shipping! Please note that we are unable to deliver to some countries and we apologize for any inconvenience caused.</p>
                </div>
                <div class="question">
                    <p class="question-name"> Where do you ship from?</p>
                    <p class="question-answer"> We ship all of our orders from the Netherlands, where our warehouse is based.</p>
                </div>
                <div class="question">
                    <p class="question-name">Do you offer free returns?</p>
                    <p class="question-answer">We offer a refund on any items returned to us within 14 days of the delivery date, excluding any delivery costs. To request a return, go to Order Management.</p>
                </div>
            </div >
            <div class="question-col">
                <div class="question">
                    <p class="question-name">Where do you ship from?</p>
                    <p class="question-answer">We ship all of our orders from the Netherlands, where our warehouse is based.</p>
                </div>
                <div class="question">
                    <p class="question-name">Do you offer free returns?</p>
                    <p class="question-answer">We offer a refund on any items returned to us within 14 days of the delivery date, excluding any delivery costs. To request a return, go to Order Management.</p>
                </div>
                <div class="question">
                    <p class="question-name">Do you ship internationally?</p>
                    <p class="question-answer">Yes, we are pleased to confirm that we offer worldwide shipping! Please note that we are unable to deliver to some countries and we apologize for any inconvenience caused.</p>
                </div>
            </div>
            <div class="question-col">
                <div class="question">
                    <p class="question-name">Do you offer free returns?</p>
                    <p class="question-answer">We offer a refund on any items returned to us within 14 days of the delivery date, excluding any delivery costs. To request a return, go to Order Management.</p>
                </div>
                <div class="question">
                    <p class="question-name">Do you ship internationally?</p>
                    <p class="question-answer">Yes, we are pleased to confirm that we offer worldwide shipping! Please note that we are unable to deliver to some countries and we apologize for any inconvenience caused.</p>
                </div>
                <div class="question">
                    <p class="question-name">Where do you ship from?</p>
                    <p class="question-answer">We ship all of our orders from the Netherlands, where our warehouse is based.</p>
                </div>
            </div>
        </div>
    </section>

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

