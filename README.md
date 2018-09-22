# GifTastic

## Overview
### Goal of the project 
- use the GIPHY API to make a dynamic web page that populates with gifs
### Tasks 
- call the GIPHY API 
- use JavaScript and jQuery to change the HTML elements 


### Design
1. **Hit the GIPHY API**.
   * [Giphy API](https://developers.giphy.com/docs/).
   * GIPHY parameters
     * `q`
     * `limit`
     * `rating`

2. create an array of strings, each one related to the theme topic. Save it to a variable called `topics`.
   * We chose animals for our theme, but you can make a list to your own liking.

3. create buttons for each element in `topics` array.  
   * Try using a loop that appends a button for each string in the array.

4. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

5. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

6. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

7. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// call the GIPHY API 
// Performing GET requests to the GIPHY API and logging the responses to the console
// Constructing a queryURL variable we will use instead of the literal string inside of the ajax method

// Use JavaScript and jQuery to change the HTML elements
    // Generate buttons for each element in array topics
    // Enable user to click on the topicButton - 10 static gifs place on the page
    // Enable user to click on the gifButton - pause gif animation and show git animation 