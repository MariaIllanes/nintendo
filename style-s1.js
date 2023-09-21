// My Nintendo Store hidden element--------------------

const showButton1 = document.getElementById("showButton-store");
const hiddenElementBtn1 = document.querySelector(".hiddenElementBtn1");

let isHidden1 = true;

showButton1.addEventListener("click", () => {
    if (isHidden1) {
        hiddenElementBtn1.style.display = "block";
    } else {
        hiddenElementBtn1.style.display = "none";
    }
    
    isHidden1 = !isHidden1; 
console.log("Show button clicked. isHidden:", isHidden1);
});

const closeButton1 = document.querySelector('.close-button1');
closeButton1.addEventListener('click', () => {
    hiddenElementBtn1.style.display = 'none'; 
    isHidden1 = true; 
    console.log("Close button clicked. isHidden:", isHidden1);
});



//Games hidden element--------------------

const showButton2 = document.getElementById("showButton-games");
const hiddenElementBtn2 = document.querySelector(".hiddenElementBtn2");

let isHidden2 = true;

showButton2.addEventListener("click", () => {
    if (isHidden2) {
        hiddenElementBtn2.style.display = "block";
    } else {
        hiddenElementBtn2.style.display = "none";
    }
    
    isHidden2 = !isHidden2; 
    console.log("Show button clicked. isHidden:", isHidden2);
});

const closeButton2 = document.querySelector('.close-button2');
closeButton2.addEventListener('click', () => {
    hiddenElementBtn2.style.display = 'none'; 
    isHidden2 = true; 
    console.log("Close button clicked. isHidden:", isHidden2);
});

//Nintendo Switch hidden element--------------------

const showButton3 = document.getElementById("showButton-switch");
const hiddenElementBtn3 = document.querySelector(".hiddenElementBtn3");

let isHidden3 = true;

showButton3.addEventListener("click", () => {
    if (isHidden3) {
        hiddenElementBtn3.style.display = "block";
    } else {
        hiddenElementBtn3.style.display = "none";
    }
    
    isHidden3 = !isHidden3; 
    console.log("Show button clicked. isHidden:", isHidden3);
});

const closeButton3 = document.querySelector('.close-button3');
closeButton3.addEventListener('click', () => {
    hiddenElementBtn3.style.display = 'none'; 
    isHidden3 = true; 
    console.log("Close button clicked. isHidden:", isHidden3);
});


//Play Nintendo  hidden element--------------------

const showButton4 = document.getElementById("showButton-play");
const hiddenElementBtn4 = document.querySelector(".hiddenElementBtn4");

let isHidden4 = true;

showButton4.addEventListener("click", () => {
    if (isHidden4) {
        hiddenElementBtn4.style.display = "block";
    } else {
        hiddenElementBtn4.style.display = "none";
    }
    
    isHidden4 = !isHidden4; 
    console.log("Show button clicked. isHidden:", isHidden4);
});

const closeButton4 = document.querySelector('.close-button4');
closeButton4.addEventListener('click', () => {
    hiddenElementBtn4.style.display = 'none';
    isHidden4 = true; 
    console.log("Close button clicked. isHidden:", isHidden4);
});


//---------------------


// document.addEventListener("DOMContentLoaded", function () {
//     const hiddenSectionContainers = document.querySelectorAll(".hiddenElementBtn1, .hiddenElementBtn2, .hiddenElementBtn3, .hiddenElementBtn4");
//     function closeAllHiddenSections() {
//       hiddenSectionContainers.forEach((container) => {
//         container.style.display = "none";
//       });
//     }

//     function toggleHiddenSection(sectionId) {
//       const section = document.getElementById(sectionId);
//       if (section.style.display === "block") {
//         section.style.display = "none";
//       } else {
//         closeAllHiddenSections();
//         section.style.display = "block";
//       }
//     }
  
//     window.addEventListener("click", function (event) {
//       let isClickInsideHiddenContainer = false;
//       hiddenSectionContainers.forEach((container) => {
//         if (container.contains(event.target)) {
//           isClickInsideHiddenContainer = true;
//         }
//       });
  
//       if (!isClickInsideHiddenContainer) {
//         closeAllHiddenSections();
//       }
//     });
  
    // Event listeners to open specific hidden sections when their respective buttons are clicked
//     document.getElementById("showButton-store").addEventListener("click", function () {
//       toggleHiddenSection("hiddenElementBtn1");
//     });
  
//     document.getElementById("showButton-games").addEventListener("click", function () {
//       toggleHiddenSection("hiddenElementBtn2");
//     });
  
//     document.getElementById("showButton-switch").addEventListener("click", function () {
//       toggleHiddenSection("hiddenElementBtn3");
//     });
  
//     document.getElementById("showButton-play").addEventListener("click", function () {
//       toggleHiddenSection("hiddenElementBtn4");
//     });
//   });
  