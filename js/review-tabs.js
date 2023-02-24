(function () {
    const buttonsParents = document.querySelectorAll(".review__change-buttons");
    const buttons = document.querySelectorAll(".review__change-button");
    const reviews = document.querySelectorAll(".review__content");
  
    function showReview(reviewIndex) {
      hideAllRewiews();
      reviews[reviewIndex].classList.remove("hide");
    }
  
    function hideAllRewiews() {
      reviews.forEach((review) => {
        review.classList.add("hide");
      });
    }
  
    for (let i = 0; i < buttonsParents.length; i++) {
      buttonsParents[i].addEventListener("click", (e) => {
        buttons.forEach((el, index) => {
          if (el === e.target) {
            showReview(index - 3 * i);
          }
        });
      });
    }
  
    showReview(0);
})();
  