const emptyStar = "star-empty.svg";
const filledStar = "star-filled.svg";

let stars = document.querySelectorAll(".rating-stars img");

stars.forEach((star, pos) => {
	star.addEventListener("click", function () {
		stars.forEach((hStar, key) => {
			// logic here
			key <= pos ? (hStar.src = filledStar) : (hStar.src = emptyStar);
		});
	});
});

function resetRating() {
	stars.forEach((star) => {
		star.src = emptyStar;
	});
}
