// Access To Elements We Will Use Them

// Elements Of Headr Section
let logo= document.querySelector(".logo");
let headrButton= document.querySelector(".button-icon button");
let moonIcon= document.querySelector(".icon .moon");
let moonFill= document.querySelector(".moon .moon-fill");
let sunIcon= document.querySelector(".icon .sun");
let allLinks= Array.from(document.querySelectorAll(".links li"));
let socialSpan= document.querySelector(".social .order");
let socialLine= document.querySelector(".social .line");
let socialIcon= Array.from(document.querySelectorAll(".social-icon i"));
// Elements Of Landing Section
let picOfHeadingSection= document.querySelector(".picture-info .picture");
let nameOfHeadingSection= document.querySelector(".info .name");
let spanOfInfoSection= Array.from(document.querySelectorAll(".info span"));
let buttonOfHeadingSection= document.querySelector(".info a button");
let buttonSvg= document.querySelector(".info a button svg .stroke");
let scrolliconSvg= Array.from(document.querySelectorAll(".scroll-icon svg"));
let scrollIconSpan= document.querySelector(".scroll-icon span");
// Elements Of About Section
let picOfAboutSection= document.querySelector(".my-picture");
let h2OfAboutSection= document.querySelector(".details h2");
let paragraphsOfAboutSection= Array.from(document.querySelectorAll(".details p"));
// Elements Of Contact Section
let formInputs= Array.from(document.querySelectorAll("form .same-bg"));
let sendLink= Array.from(document.querySelectorAll(".contact-info a"));
// Elements From All The Page
let allMainHeading= Array.from(document.querySelectorAll(".main-heading"));
let allClassStyleBox= Array.from(document.querySelectorAll(".style-box"));

// Main Code

// Change Style From Dark Mode To Light Mode And Reverse
moonIcon.onclick= function (){
  moonIcon.style.cssText= "display: none";
  sunIcon.style.cssText=  "display: block";

  // Change Css Style For All Elements In The Page
  // Start Haedr
  document.body.style.cssText= "background-color: #191526";
  logo.style.cssText= "color: #D8E68F";
  headrButton.classList.remove("light");
  headrButton.classList.add("dark");
  // End Headr

  // Start Landing Section
  socialSpan.style.cssText= "color: #D8E68F";
  socialLine.style.cssText= "background-color: #D8E68F";
  socialIcon.forEach((icon) => {
    icon.style.cssText= "color: #D8E68F";
  })
  picOfHeadingSection.style.cssText= "background-image: linear-gradient(180deg,#D8E68F,#FFFFFF)";
  nameOfHeadingSection.style.cssText= "color: #D8E68F";
  spanOfInfoSection.forEach((span) => {
    span.style.cssText= "color: #C4C4C4";
  })
  buttonOfHeadingSection.style.cssText= "background-color: #D8E68F ; color: #3E3F2D";
  buttonSvg.style.cssText= "stroke: #3E3F2D";
  scrolliconSvg.forEach((icon) => {
    icon.style.cssText= "fill: #D8E68F";
  })
  scrollIconSpan.style.cssText= "color: #D8E68F";

  // Start About Section
  picOfAboutSection.classList.remove("light");
  picOfAboutSection.classList.add("dark");
  h2OfAboutSection.style.cssText= "color: #E8E9D7";
  paragraphsOfAboutSection.forEach((para) => {
    para.style.cssText= "color: #C4C4C4";
  })

  // Start Contact Section
  formInputs.forEach((input) => {
    input.style.cssText= "background-color: #35364B ; color: #FFFFFF";
  })
  sendLink.forEach((link) => {
    link.style.cssText= "color: #D8E68F";
  })

  // Change Css Style For All Main Heading
  allMainHeading.forEach((heading) => {
    if (heading.classList.contains("light")){
      heading.classList.remove("light");
      heading.classList.add("dark");
    }
  })

  // Change Background Color For All Element There Have StyleBox Class
  allClassStyleBox.forEach((box) => {
    box.style.cssText= "background-color: #2B2D41";
  })
}

sunIcon.onclick= function (){
  sunIcon.style.cssText= "display: none";
  moonIcon.style.cssText=  "display: block";

  // Change Colors
  // Start headr
  document.body.style.cssText= "background-color: #E8E9D7";
  logo.style.cssText= "color: #3E3F2D";
  headrButton.classList.remove("dark");
  headrButton.classList.add("light");
  moonFill.style.cssText= "fill: #3E3F2D";
  // End Headr

  // Start Landing Section
  socialSpan.style.cssText= "color: #3E3F2D";
  socialLine.style.cssText= "background-color: #3E3F2D";
  socialIcon.forEach((icon) => {
    icon.style.cssText= "color: #3E3F2D";
  })
  picOfHeadingSection.style.cssText= "background-image: linear-gradient(180deg,#3E3F2D,transparent)";
  nameOfHeadingSection.style.cssText= "color: #3E3F2D";
  spanOfInfoSection.forEach((span) => {
    span.style.cssText= "color: #7F7F7F";
  })
  buttonOfHeadingSection.style.cssText= "background-color: #3E3F2D ; color: #FFFFFF";
  buttonSvg.style.cssText= "stroke: #FFFFFF";
  scrolliconSvg.forEach((icon) => {
    icon.style.cssText= "fill: #3E3F2D";
  })
  scrollIconSpan.style.cssText= "color: #3E3F2D";

  // Start About Section
  picOfAboutSection.classList.remove("dark");
  picOfAboutSection.classList.add("light");
  h2OfAboutSection.style.cssText= "color: #3E3F2D";
  paragraphsOfAboutSection.forEach((para) => {
    para.style.cssText= "color: #7F7F7F";
  })

  // Start Contact Section
  formInputs.forEach((input) => {
    input.style.cssText= "background-color: #E8E9D7 ; color: #3E3F2D";
  })
  sendLink.forEach((link) => {
    link.style.cssText= "color: #3E3F2D";
  })
  
  // Change Css Style For All Main Heading
  allMainHeading.forEach((heading) => {
    if (heading.classList.contains("dark")){
      heading.classList.remove("dark");
      heading.classList.add("light");
    }
  })

  // Change Background Color For All Element There Have StyleBox Class
  allClassStyleBox.forEach((box) => {
    box.style.cssText= "background-color: #3E3F2D";
  })
}

// Put Class Active On Difference Links
allLinks.forEach((link) => {
  link.addEventListener("click", (eve) => {
    allLinks.forEach((link) => {
      link.classList.remove("active");
    })
    eve.currentTarget.classList.add("active");
  })
});

// ScrollReveall Animation

ScrollReveal({
  rest: true,
  distance: "60px",
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal(".picture, .footer h2",{delay: 100, origin: "top"});
ScrollReveal().reveal(".picture-info .info , .main-heading",{delay: 300, origin: "top"});
ScrollReveal().reveal(".landing-section .social , .scroll-icon",{delay: 600, origin: "bottom"});
ScrollReveal().reveal(".my-picture",{delay: 700, origin: "top"});
ScrollReveal().reveal(".details",{delay: 300, origin: "bottom"});
ScrollReveal().reveal(".skill, .send-message, .footer ul li",{delay: 500, origin: "right", interval: 200});
ScrollReveal().reveal(".card, .contact-info .box",{delay: 300, origin: "bottom", interval: 300});


