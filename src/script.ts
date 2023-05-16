//Selecting States
const rate = document.querySelector(".rate");
const thank = document.querySelector(".thank");

//Selecting rating buttons and rating text
const btnStar = document.querySelectorAll(".btn-star");
const rating = document.querySelector(".rating");

//selecting the submit button
const submitBtn = document.querySelector(".submit");

//events
btnStar.forEach((btn) => btn.addEventListener("click", select));
submitBtn?.addEventListener("click", changeCard);

function select(e: Event) {
  btnStar.forEach((btn) => {
    const resetBtn = btn as HTMLElement;
    resetBtn.classList.replace("bg-grey", "bg-darkblue");
    resetBtn.classList.replace("text-white", "text-grey");
  });
  const starBtn = e.target as HTMLElement;
  if (starBtn.classList.contains("btn-star")) {
    starBtn.classList.replace("bg-darkblue", "bg-grey");
    starBtn.classList.replace("text-grey", "text-white");
  }
}

function changeCard() {
  btnStar.forEach((btn) => {
    if (btn.classList.contains("bg-grey")) {
      rating &&
        (rating.innerHTML = `You selected ${btn.textContent?.trim()} out of 5`);
      rate?.classList.replace("flex", "hidden");
      thank?.classList.replace("hidden", "flex");
    }
  });
}
