const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  const offset = -index * 800;
  carousel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
});




class Carousel {
    constructor(containerSelector, imageWidth = 800) {
      this.carousel = document.querySelector(containerSelector);
      this.images = this.carousel.querySelectorAll("img");
      this.prevBtn = this.carousel.parentElement.querySelector(".prev");
      this.nextBtn = this.carousel.parentElement.querySelector(".next");
      this.index = 0;
      this.imageWidth = imageWidth;
  
      this.init();
    }
  
    init() {
      this.prevBtn.addEventListener("click", () => this.showSlide(this.index - 1));
      this.nextBtn.addEventListener("click", () => this.showSlide(this.index + 1));
      this.showSlide(this.index); // показать первый слайд
    }
  
    showSlide(i) {
      this.index = (i + this.images.length) % this.images.length;
      const offset = -this.index * this.imageWidth;
      this.carousel.style.transform = `translateX(${offset}px)`;
    }
  }
  