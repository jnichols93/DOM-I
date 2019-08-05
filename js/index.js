const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
///nAV
let navAList = document.querySelectorAll("header nav a");
navAList[0].innerText = siteContent["nav"]["nav-item-1"];
navAList[1].innerText = siteContent["nav"]["nav-item-2"];
navAList[3].innerText = siteContent["nav"]["nav-item-4"];
navAList[4].innerText = siteContent["nav"]["nav-item-5"];
navAList[5].innerText = siteContent["nav"]["nav-item-6"];
///END NAV

/// CTA
let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.innerText = siteContent["cta"].h1;
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerText = siteContent["cta"].button;
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//topcontent
let topContentH4 = document.querySelectorAll(".top-content .text-content h4");
topContentH4[0].innerText = siteContent["main-content"]["features-h4"];
topContentH4[1].innerText = siteContent["main-content"]["about-h4"];

let mainContentImg = document.querySelector("#middle-img");
mainContentImg.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);

let bottomContentH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
);

bottomContentP[0].innerText = siteContent["main-content"]["services-content"];
bottomContentP[1].innerText = siteContent["main-content"]["product-content"];
bottomContentP[2].innerText = siteContent["main-content"]["vision-content"];

let contactHeading = document.querySelector(".contact h4");
contactHeading.innerText = siteContent["contact"]["contact-h4"];

let contactPs = document.querySelectorAll(".contact p");
contactPs[1].innerText = siteContent["contact"]["phone"];
contactPs[0].innerText = siteContent["contact"]["address"];
contactPs[2].innerText = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.innerText = siteContent["footer"]["copyright"];

