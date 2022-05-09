
// rating button and text change
const ratingText = document.querySelector("#number");

const ratingRecevied = document.querySelectorAll(".rating").forEach( rating => {
  rating.addEventListener("click", () => {
    const buttonId = rating.id;
    ratingText.innerText = buttonId;

  });
});

// Submit button and card change
const thankscard = document.getElementById("thanks-card");

const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function() {
   thankscard.style.display = "block";
});
