let slideIndex = 1;

let myTimer;

let slideshowContainer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 5000);

  slideshowContainer = document.getElementsByClassName("paragraf")[0];

  slideshowContainer.addEventListener("mouseenter", pause);
  slideshowContainer.addEventListener("mouseleave", resume);
});

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 5000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 5000);
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 5000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("p1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex);
  }, 5000);
};

/////////////////// second
let slide = 1;

let mytimer1;
let container;

window.addEventListener("load", function () {
  showSlides1(slide);
  mytimer1 = setInterval(function () {
    plusSlides1(1);
  }, 5000);

  container = document.getElementsByClassName("paragraf1")[0];
  container.addEventListener("mouseenter", pause1);
  container.addEventListener("mouseleave", resume1);
});

function plusSlides1(n) {
  clearInterval(mytimer1);
  if (n < 0) {
    showSlides1((slide -= 1));
  } else {
    showSlides1((slide += 1));
  }

  if (n === -1) {
    mytimer1 = setInterval(function () {
      plusSlides1(n + 2);
    }, 5000);
  } else {
    mytimer1 = setInterval(function () {
      plusSlides1(n + 1);
    }, 5000);
  }
}

function currentSlide2(n) {
  clearInterval(mytimer1);
  mytimer1 = setInterval(function () {
    plusSlides1(n + 1);
  }, 5000);
  showSlides1((slide = n));
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("p2");
  let dots1 = document.getElementsByClassName("dot2");
  if (n > slides1.length) {
    slide = 1;
  }
  if (n < 1) {
    slide = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slide - 1].style.display = "block";
  dots1[slide - 1].className += " active";
}

pause1 = () => {
  clearInterval(mytimer1);
};

resume1 = () => {
  clearInterval(mytimer1);
  mytimer1 = setInterval(function () {
    plusSlides1(slide);
  }, 5000);
};

///////////// third

let slide2 = 1;

let mytimer2;
let container2;

window.addEventListener("load", function () {
  showSlides2(slide2);
  mytimer2 = setInterval(function () {
    plusSlides2(1);
  }, 5000);

  container2 = document.getElementsByClassName("paragraf2")[0];
  container2.addEventListener("mouseenter", pause2);
  container2.addEventListener("mouseleave", resume2);
});

function plusSlides2(n) {
  clearInterval(mytimer2);
  if (n < 0) {
    showSlides2((slide2 -= 1));
  } else {
    showSlides2((slide2 += 1));
  }

  if (n === -1) {
    mytimer2 = setInterval(function () {
      plusSlides2(n + 2);
    }, 5000);
  } else {
    mytimer2 = setInterval(function () {
      plusSlides2(n + 1);
    }, 5000);
  }
}

function currentSlide3(n) {
  clearInterval(mytimer2);
  mytimer2 = setInterval(function () {
    plusSlides2(n + 1);
  }, 5000);
  showSlides2((slide2 = n));
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("p3");
  let dots2 = document.getElementsByClassName("dot3");
  if (n > slides2.length) {
    slide2 = 1;
  }
  if (n < 1) {
    slide2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slide2 - 1].style.display = "block";
  dots2[slide2 - 1].className += " active";
}

pause2 = () => {
  clearInterval(mytimer2);
};

resume2 = () => {
  clearInterval(mytimer2);
  mytimer2 = setInterval(function () {
    plusSlides2(slide2);
  }, 5000);
};

//////////// fourth
/*
 let slide3 = 1;

 let mytimer3;
 let container3;

 window.addEventListener("load", function () {
   showSlides3(slide3);
   mytimer3 = setInterval(function () {
     plusSlides3(1);
   }, 4000);

   container3 = document.getElementsByClassName("paragraf3")[0];
   container3.addEventListener("mouseenter", pause3);
   container3.addEventListener("mouseleave", resume3);
 });

 function plusSlides3(n) {
   clearInterval(mytimer3);
   if (n < 0) {
     showSlides3((slide3 -= 1));
   } else {
     showSlides3((slide3 += 1));
   }

   if (n === -1) {
     mytimer3 = setInterval(function () {
       plusSlides3(n + 2);
     }, 4000);
   } else {
     mytimer3 = setInterval(function () {
       plusSlides3(n + 1);
     }, 4000);
   }
 }

 function currentSlide4(n) {
   clearInterval(mytimer3);
   mytimer3 = setInterval(function () {
     plusSlides3(n + 1);
   }, 4000);
   showSlides3((slide3 = n));
 }

 function showSlides3(n) {
   let i;
   let slides3 = document.getElementsByClassName("p4");
   let dots3 = document.getElementsByClassName("dot4");
   if (n > slides3.length) {
     slide3 = 1;
   }
   if (n < 1) {
     slide3 = slides3.length;
   }
   for (i = 0; i < slides3.length; i++) {
     slides3[i].style.display = "none";
   }
   for (i = 0; i < dots3.length; i++) {
     dots3[i].className = dots3[i].className.replace(" active", "");
   }
   slides3[slide3 - 1].style.display = "block";
   dots3[slide3 - 1].className += " active";
 }

 pause3 = () => {
   clearInterval(mytimer3);
 };

 resume3 = () => {
   clearInterval(mytimer3);
   mytimer3 = setInterval(function () {
     plusSlides3(slide3);
   }, 4000);
 };*/

///////// fifth

let slide4 = 1;

let mytimer4;
let container4;

window.addEventListener("load", function () {
  showSlides4(slide4);
  mytimer4 = setInterval(function () {
    plusSlides4(1);
  }, 5000);

  container4 = document.getElementsByClassName("paragraf4")[0];
  container4.addEventListener("mouseenter", pause4);
  container4.addEventListener("mouseleave", resume4);
});

function plusSlides4(n) {
  clearInterval(mytimer4);
  if (n < 0) {
    showSlides4((slide4 -= 1));
  } else {
    showSlides4((slide4 += 1));
  }

  if (n === -1) {
    mytimer4 = setInterval(function () {
      plusSlides4(n + 2);
    }, 5000);
  } else {
    mytimer4 = setInterval(function () {
      plusSlides4(n + 1);
    }, 5000);
  }
}

function currentSlide5(n) {
  clearInterval(mytimer4);
  mytimer4 = setInterval(function () {
    plusSlides4(n + 1);
  }, 5000);
  showSlides4((slide4 = n));
}

function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("p5");
  let dots4 = document.getElementsByClassName("dot5");
  if (n > slides4.length) {
    slide4 = 1;
  }
  if (n < 1) {
    slide4 = slides4.length;
  }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slide4 - 1].style.display = "block";
  dots4[slide4 - 1].className += " active";
}

pause4 = () => {
  clearInterval(mytimer4);
};

resume4 = () => {
  clearInterval(mytimer4);
  mytimer4 = setInterval(function () {
    plusSlides4(slide4);
  }, 5000);
};

/////////// sixth

let slide5 = 1;

let mytimer5;
let container5;

window.addEventListener("load", function () {
  showSlides5(slide5);
  mytimer5 = setInterval(function () {
    plusSlides5(1);
  }, 5000);

  container5 = document.getElementsByClassName("paragraf5")[0];
  container5.addEventListener("mouseenter", pause5);
  container5.addEventListener("mouseleave", resume5);
});

function plusSlides5(n) {
  clearInterval(mytimer5);
  if (n < 0) {
    showSlides5((slide5 -= 1));
  } else {
    showSlides5((slide5 += 1));
  }

  if (n === -1) {
    mytimer5 = setInterval(function () {
      plusSlides5(n + 2);
    }, 5000);
  } else {
    mytimer5 = setInterval(function () {
      plusSlides5(n + 1);
    }, 5000);
  }
}

function currentSlide6(n) {
  clearInterval(mytimer5);
  mytimer5 = setInterval(function () {
    plusSlides5(n + 1);
  }, 5000);
  showSlides5((slide5 = n));
}

function showSlides5(n) {
  let i;
  let slides5 = document.getElementsByClassName("p6");
  let dots5 = document.getElementsByClassName("dot6");
  if (n > slides5.length) {
    slide5 = 1;
  }
  if (n < 1) {
    slide5 = slides5.length;
  }
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slide5 - 1].style.display = "block";
  dots5[slide5 - 1].className += " active";
}

pause5 = () => {
  clearInterval(mytimer5);
};

resume5 = () => {
  clearInterval(mytimer5);
  mytimer5 = setInterval(function () {
    plusSlides5(slide5);
  }, 5000);
};
