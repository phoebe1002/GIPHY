// call the GIPHY API 
// Performing GET requests to the GIPHY API and logging the responses to the console
// Constructing a queryURL variable we will use instead of the literal string inside of the ajax method

// Use JavaScript and jQuery to change the HTML elements
    // Generate buttons for each element in array topics
    // Enable user to click on the topicButton - 10 static gifs place on the page
    // Enable user to click on the gifButton - pause gif animation and show git animation 

// Initial array of topics
var topics = ["Seattle","Bellevue"," New York"];


// Adding a click event listener to all elements with a class of "topic-btn"
$(document).on("click", ".topic-btn", function(){

	var city = $(this).attr("data-name");

	// Constructing a queryURL using the city name
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	city + "&api_key=rMxo3PNbjPpe5oWg4JeZ7vx9jIyScJ9o&limit=10";

	// Performing an AJAX request with the queryURL
	$.ajax({
		url: queryURL,
		method: "GET",
		}).then(function (response) {
			console.log(queryURL);
			console.log(response);	

		var results = response.data
		$("#gifs-view").empty();
		// Looping through each result item
		for (var i = 0; i < results.length; i++) {

			// Creating and storing a div tag
			var cityDiv = $("<div class='image-content'>");

			// Creating a paragraph tag with the result item's rating
			var p = $("<p class='text-center'>").text("Rating: " + results[i].rating);

			// Creating a variable that holds the image-btn 
			var imageBtn = "<img src='" + results[i].images.fixed_height_still.url + "' data-still='"+ results[i].images.fixed_height_still.url + "' data-animate='"+ results[i].images.fixed_height.url + "' data-state='still' class='image-btn'>";
			console.log(imageBtn);
			// Appending the paragraph and image tag to the cityDiv
			cityDiv.append(p);
			cityDiv.append(imageBtn);

			// Prependng the cityDiv to the HTML page in the "#gifs-appear-here" div
			$("#gifs-view").prepend(cityDiv);
		}
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
});

// Function for displaying topic data
function renderButtons() {

// Deleting the movies prior to adding new movies
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

	//Adding topic from usesr input to the existing array
	topics.push(topic);

	//Using to test out what element is inside the topics array
	console.log(topics);

	//Calling renderButtons() funtion to handle setting array element as new button showing in buttons-view div
	renderButtons();

});

// Calling renderButtons() function to display intial buttons
renderButtons();