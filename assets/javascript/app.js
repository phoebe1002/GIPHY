// Initial array of topics in city theme
var topics = ["Seattle","Bellevue"," New York"];

// Adding a click event listener to all elements with a class of "topic-btn"
$(document).on("click", ".topic-btn", function(){

	var city = $(this).attr("data-name");
	var limit = 10;

	// Constructing a queryURL using the city name
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	city + "&api_key=rMxo3PNbjPpe5oWg4JeZ7vx9jIyScJ9o&limit=" + limit +'"';

	// Performing an AJAX request with the queryURL
	$.ajax({
		url: queryURL,
		method: "GET",
		}).then(function (response) {
		var results = response.data
		
		// Deleting the gif prior to adding new ones
		$("#gifs-view").empty();

		// Looping through each result item
		for (var i = 0; i < results.length; i++) {
			// Creating and storing a div tag
			var cityDiv = $("<div class='image-content'>");
			// Creating a paragraph tag with the result item's rating
			var p = $("<p class='text-center'>").text("Rating: " + results[i].rating);
			// Creating a variable that holds the image-btn inside the imgage tag 
			var imageBtn = "<img src='" + results[i].images.fixed_height_still.url + "' data-still='"+ results[i].images.fixed_height_still.url + "' data-animate='"+ results[i].images.fixed_height.url + "' data-state='still' class='image-btn'>";
			
			// Appending the paragraph and image tag to the cityDiv
			cityDiv.append(imageBtn);
			cityDiv.append(p);

			// Prependng the cityDiv to the HTML page in the div
			$("#gifs-view").prepend(cityDiv);
		}
	});
});

// Adding a click event listener to all elements with a class of "image-btn"
$(document).on("click", ".image-btn", function(){

	// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
	var state = $(this).attr("data-state");

// If the clicked image's state is still, update its src attribute to what its data-animate value is.
// Then, set the image's data-state to animate
// Else set src to the data-still value
	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
		$(this).attr("id", 'animate-btn');
	} else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
		$(this).attr("id", 'state-btn')
	}
});

// Function for displaying topic data
function renderButtons() {

	// Deleting the topic button prior to adding new ones
	$("#buttons-view").empty();

// Looping through the array of topics
	for (var i = 0; i < topics.length; i++) {
	//Dynamically generating buttons fo each topic in the array
	var topicBtn = $("<button>");
	// Adding a class to topic buttons
	topicBtn.addClass("topic-btn btn btn-info");
	// Adding a data-attribute
	topicBtn.attr("data-name", topics[i]);
	// Adding the button to the buttons-view div
	topicBtn.text(topics[i]);

	$("#buttons-view").append(topicBtn);
	}
}

// Creating an  event handler function to show user input as a topicBtn when add-topic button is clicked
$("#add-topic").on("click", function(event) {
	event.preventDefault();

	//Grabbing the input from the textbox
	var topic = $("#topic-input").val().trim();

	// Creating a variable to check empty input
	var empt = document.forms["add-gif-form"]["topic-input"].value;

	// Checking if we have empty input
	// If yes - ask user to input again
	if (empt == "")
	{
	alert("Please input a city"); 
	} else {
	//Adding topic from usesr input with title case format into topics array
	topics.push(toTitleCase(topic));

	//Using to test out what element is inside the topics array
	console.log(topics);

	//Calling renderButtons() funtion to handle setting array element as new button showing in buttons-view div
	renderButtons();
}

});

// Clearing text in topic-input
$("#reset-text").on("click", function(event) {
	$('#topic-input').val('');
});

// Calling renderButtons() function to display intial buttons
renderButtons();

// Using the toTitleCase() function to convert words to title case
function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}



