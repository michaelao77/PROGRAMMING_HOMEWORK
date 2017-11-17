// Testing
console.log("hello");

// Searchbar
function buttonClicked() {
	// Get username
	var firstName = document.getElementById("firstName");
	var firstNameToShow = firstName.value;

	// Display username
	var textToShow = document.getElementById("fullNameToShow");
	textToShow.innerHTML = "No result found for " + "'" + firstNameToShow + "'" + ". Try again.";

}