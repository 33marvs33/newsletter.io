const submitBtn = document.querySelector(".subscribe__btn");
const emailInput = document.querySelector(".email__address");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault()
	const URL = "submit.html";
	const emailValue = emailInput.value;
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (!emailValue.match(validRegex) || emailValue == "" || emailValue == undefined) {
		document.querySelector(".error__email").classList.remove("hidden");
		return;
	} else {
		document.querySelector(".error__email").classList.add("hidden");
		localStorage.setItem("email", JSON.stringify(emailInput.value));
		window.location.href = URL;
	}
});
