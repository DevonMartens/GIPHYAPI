# GIPHYAPI
GifTastic

This repo contains my homework from GA Tech's coding boot camp for unit 6.

This web page is populated by gif's that are pulled to the page from the GIPHY API to make a dynamic web page that populates with gifs of your choice. 
The GIPHY API and uses JavaScript and jQuery to change the HTML of the site. 

The programming languages used to build this site include: HTML, CSS, Bootstrap, Javascript, and Jquery. In addition, JSON, Ajax, HTTP GET requests, and Server-side APIs were used to make this page functional.

About the app:
The app is animal themed. It provides some buttons on the inital view with animal types that can be clicked and as a result GIFs will generate that relate to the animal theme. A new button can be created by entering the text and creating a button, once that button is clicked GIFS will generate that are related to the animal. These GIFs are static but will move if the user clicks the image.


The app starts with a variable called Topics. The app takes the topics in this array and create buttons in the HTML. A for loop that appends a button for each string in the array.



When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it should stop playing. Under every gif, display its rating (PG, G, so on).This data is provided by the GIPHY API.

