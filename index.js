var gradientReds = document.querySelectorAll(".gradientRed");
var sliderContainers = document.querySelectorAll(".slider-container");
var centeredImages = document.querySelectorAll(".centeredImage");
var partnersImages = document.querySelectorAll(".partners");
var partnersArea = document.querySelector(".partners-area");
var iconAreas = document.querySelectorAll(".iconsArea");
var insightArea = document.querySelector(".insight-area");

const checkInViewPort = () => {
  let partnersAreaY = Math.round(partnersArea.getBoundingClientRect().y);
  if (partnersAreaY < 430) {
    partnersImages.forEach((partner, index) => {
      setTimeout(() => {
        partner.classList.add("animate-partner");
      }, 150 * index + 1);
    });
  } else if (partnersAreaY < 0) {
    partnersImages.forEach((partner, index) => {
      setTimeout(() => {
        partner.classList.remove("animate-partner");
      }, 150 * index + 1);
    });
  } else {
    partnersImages.forEach((partner, index) => {
      setTimeout(() => {
        partner.classList.remove("animate-partner");
      }, 150 * index + 1);
    });
  }

  var overviewAreas = document.querySelectorAll(".overview-area");

  for (var i = 0; i < overviewAreas.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = overviewAreas[i].getBoundingClientRect().top;
    var elementVisible = 200;
    var count = 0;

    if (elementTop < windowHeight - elementVisible) {
      overviewAreas[i].querySelector(".imageArea")?.classList.add("active");
      overviewAreas[i].querySelector(".textArea")?.classList.add("active");
      overviewAreas[i].classList.add("active")
      setTimeout(() => {
        centeredImages.forEach((centeredImage) => {
          centeredImage.classList.add("image-fade-right");
        });
      }, 600);
    } else {
      overviewAreas[i].classList.remove("active");
      overviewAreas[i].querySelector(".imageArea")?.classList.remove("active");
      overviewAreas[i].querySelector(".textArea")?.classList.remove("active");
    }
  }
  sliderContainers.forEach((sliderContainer) => {
    let center = sliderContainer.querySelectorAll(".centeredImage");
    if (sliderContainer.classList.contains("active")) {
      center.forEach((centerItem) => {
        setTimeout(() => {
          centerItem.classList.add("image-fade-right");
        }, 600);
      });
    } else {
      center.forEach((centerItem) => {
        centerItem.classList.remove("image-fade-right");
      });
    }
  });

  let insightAreaY = insightArea.getBoundingClientRect().y;

  if (insightAreaY < 450) {
    iconAreas.forEach((iconArea, index) => {
      if (index == 0 || index == 2) {
        iconArea.style.transform = "translateY(-50px)";
      }
   
      iconArea.addEventListener("mouseleave", () => {
        iconArea.classList.add("iconsAreaAnimate");
        setTimeout(() => {
          iconArea.classList.remove("iconsAreaAnimate");
        }, 1000);
      });
    });
  } else {
    iconAreas.forEach((iconArea, index) => {
      if (index == 0 || index == 2) {
        iconArea.style.transform = "translateY(0px)";
      }
    });
  }
};
window.addEventListener("scroll", checkInViewPort);

let moveRandom = setInterval(() => {
  moveRandomly();
}, 2000);

const moveRandomly = () => {
  const containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    let gradientGreen = document.createElement("div");
    gradientGreen.className = "gradientGreen";
    var gradientGreens = document.querySelectorAll(".gradientGreen");
    gradientGreens.forEach((item) => {
      item.style.top =
        Math.round(Math.random() * container.clientHeight - item.clientHeight) +
        "px";
      item.style.left =
        Math.round(Math.random() * container.clientWidth - item.clientWidth) +
        "px";
    });

    gradientReds.forEach((item) => {
      setTimeout(() => {
        item.style.top =
          Math.round(
            Math.random() * container.clientHeight - item.clientHeight
          ) + "px";
        item.style.left =
          Math.round(Math.random() * container.clientWidth - item.clientWidth) +
          "px";
      }, 500);
    });
  });
};

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
});

let isDragging = false;
let startPosX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPosX = e.clientX;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startPosX;
  currentTranslate = prevTranslate + deltaX;
  slider.style.transform = `translateX(${currentTranslate}px)`;
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  prevTranslate = currentTranslate;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
  slider.style.cursor = "grab";
});

function updateSliderPosition() {
  slider.style.transition = "transform 0.3s ease-in-out";
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  slides.forEach((slide) => slide.classList.remove("image-fade-right"));

  // Add active class to the current slide
  slides[currentIndex].classList.remove("image-fade-right");
  setTimeout(() => {
    slides[currentIndex].classList.add("image-fade-right");
  }, 100);
}

const quoteImageContainers = document.querySelectorAll(
  ".quote-image-container"
);

window.addEventListener("scroll", () => {
  quoteImageContainers.forEach((quoteImageContainer) => {
    let quoteImageContainerY = quoteImageContainer.getBoundingClientRect();
    let initialQuote = quoteImageContainer.querySelector(".initialQuote");
    let pathImage = document.querySelector(".pathImage");
    let sliderImage = document.querySelector(".sliderImage");

    quoteImageContainerY = quoteImageContainerY.y;
    if (quoteImageContainerY < quoteImageContainer.clientHeight) {
      initialQuote.classList.add("quotes");
      setTimeout(() => {
        pathImage.classList.add("activeImage");
      }, 500);
      setTimeout(() => {
        sliderImage.classList.add("activeImage");
      }, 1000);
    } else {
      initialQuote.classList.remove("quotes");
      setTimeout(() => {
        pathImage.classList.remove("activeImage");
      }, 500);
      setTimeout(() => {
        sliderImage?.classList.remove("activeImage");
      }, 200);
    }
  });
});
