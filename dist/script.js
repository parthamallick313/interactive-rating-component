"use strict";
const rate = document.querySelector(".rate");
const thank = document.querySelector(".thank");
const btnStar = document.querySelectorAll(".btn-star");
const rating = document.querySelector(".rating");
const submitBtn = document.querySelector(".submit");
btnStar.forEach((btn) => btn.addEventListener("click", select));
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", changeCard);
function select(e) {
    btnStar.forEach((btn) => {
        const resetBtn = btn;
        resetBtn.classList.replace("bg-grey", "bg-darkblue");
        resetBtn.classList.replace("text-white", "text-grey");
    });
    const starBtn = e.target;
    if (starBtn.classList.contains("btn-star")) {
        starBtn.classList.replace("bg-darkblue", "bg-grey");
        starBtn.classList.replace("text-grey", "text-white");
    }
}
function changeCard() {
    btnStar.forEach((btn) => {
        var _a;
        if (btn.classList.contains("bg-grey")) {
            rating &&
                (rating.innerHTML = `You selected ${(_a = btn.textContent) === null || _a === void 0 ? void 0 : _a.trim()} out of 5`);
            rate === null || rate === void 0 ? void 0 : rate.classList.replace("flex", "hidden");
            thank === null || thank === void 0 ? void 0 : thank.classList.replace("hidden", "flex");
        }
    });
}
