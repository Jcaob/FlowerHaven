import { addPageContent } from "../model/model.js";

function initListeners() {
   $("nav a").on("click", (e) =>{
    e.preventDefault();
    let butID = e.currentTarget.id;
    addPageContent(butID)
   })
}
 
$(document).ready(function () {
initListeners();
addPageContent("home");
});