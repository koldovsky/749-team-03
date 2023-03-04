(function () {

  const elements = [
    '<div>Detailed</div>',
    '<div>Statistics</div>',
    '<div>About</div>',
    '<div>Drones</div>'
  ];

  let currentSlide = 0;

  function renderSlides(elements) {
    const slidersContainer = document.querySelector('.about-carousel__slides');
    slidersContainer.innerHTML = elements[currentSlide];
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= elements.length ? 0 : currentSlide + 1;
    renderSlides(elements);
  }

  setInterval(nextSlide, 2000);

  renderSlides(elements);

})();