
var homeContent 
= `<div class="home-hero">
        <h1 id="home-hero-text">ShoeMania</h1>
    </div>

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

