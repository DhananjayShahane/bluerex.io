/*

   fancy title for website tab message 
   like "come back to again !!! " 
   tha`s whay i am uses this .... function

*/
$.mFancyTitle({
  mftMissYou: true,
  mftMissYouTitle: 'Thank You ', // new document title: it will appear when the user leaves your page and open another tab in the browser
  mftFaviconBlink: [true, false],
  mftTitleMarquee: [false, true],
  mftTitleMarqueeDir: ['right','left'],
  mftTitleMarqueeDelay: [500, 1000],
  mftMissYouFavicon: {
    'apple-touch-icon-precomposed': './assets/images/favicon/apple-icon-57x57.png',
    'icon': './assets/images/favicon/apple-icon-57x57.png',
    'shortcut icon': './assets/images/favicon/apple-icon-57x57.png'
  } // new favicons: they will be visible when the user leaves your page and open another tab in the browser
});



// toggle tabs in products details

product_tab = document.querySelectorAll(".toggle_btns")

product_tab.forEach(btns => {
  btns.addEventListener("click", (e) => {
    product_tab.forEach(t => t.classList.remove("active_product_tab"))
    e.target.classList.toggle("active_product_tab");
  })
});


// toggle tab in product category items

products_items = document.querySelectorAll(".product_item");

products_items.forEach(tab =>{
  tab.addEventListener("click",(e)=>{
    products_items.forEach(f => f.classList.remove("active_product_tab"))
    e.target.classList.toggle("active_product_tab");
  })
});


//  contact us form functionality
 function contactform(event){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    event.preventDefault();
    if($("#userName").val() == "" ||  $("#userEmail").val() == ""){
        document.getElementById("formvalidationMsg").innerText ='All fields are required';
        setTimeout(()=>{
          document.getElementById("formvalidationMsg").innerText ='';
        },3000)
    } else{

      // Email validation conditional validation
      if(reg.test($("#userEmail").val()) == false){
        alert("enter valid email address")
        return false
      }else{
        document.getElementById("formvalidationMsg").innerText ='Thank you contact us !';
        $("#contactus_Form")[0].reset()
        setTimeout(()=>{
          document.getElementById("formvalidationMsg").innerText ='';
        },4000) 
      }
    } 
  }





// customize loader functionality
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
    document.querySelector(
        "#loader").style.visibility = "visible";
    } else {
        setTimeout(()=>{
          document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
        },2000)
    }
};

