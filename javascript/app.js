$(document).ready(function() {
    var topics = ["Shark", "Armadillo", "Gecko", "Penguin", "Gorilla", "Chimp", "Snake", "Bird", "Parrot", "Gator"];
   
   function populateButtons(topics, ".newButtons", "#gifArea") {
       $('#addedButton').empty(); 
   }
   
   
     for (var i = 0; i< topics .length; i++) {
         var animalButton = $('<button>');
         animalButton.addClass(classToAdd);
         animalButton.attr('data-type', arrayToUse[i]);
         animalButton.text(topics[i]);
         $(topics.append(a);
       }
   
     
     $(document).on("click",".newButtons", function() {
         $('#addedButton').empty();
         $('.newButtons').removeClass("active");
         $(this).addClass('active');
     
         var type = $(this).attr("data-type");
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=gAqN16PRJ6aBi1cl5I5ZqVkcFB8zp3WG";
     
     $.ajax ({
         url: queryURL,
         method: "GET"
     })
     
     .then(function(response) {
   var results = response.data;
     
     for (var i = 0; i < results.length; i++) { 
         var animalDiv = $("<div class=\"animal-item\">");
      
         var rating = results[i].rating;
     
         var p = $("<p>").text("Rating: " + rating);
     
         var animated = results[i].images.fixed_height.url;
         var still = results[i].images.fixed_height_still.url;
     
         var animalImage = $("<img>");
         animalImage.attr("src", still);
         animalImage.attr("data-still", still);
         animalImage.attr("data-animate", animated);
         animalImage.attr("data-state", still);
         animalImage.addClass("animal-image");
     
         animalDiv.append(p);
         animalDiv.append(animalImage);
     
         $("#animals").append(animalDiv);
     }
     });
   
     
     //reckeck line
     $ (document).on("click", "#add-animal", function () {
         var state = $(this).attr("data-state");
       
         if (state === "still") {
             $(this).attr("src", $(this).attr("data-animate"));    
             $(this).attr("data-state", "animate");
         }
         else {
         $(this).attr("src", $(this).attr("data-still"));    
         $(this).attr("data-state", "still");
         }
         
   
     $("#add-animal").on("click", function(event) {
         event.preventDefault();
         var newAnimal = $("input").eq(0).val(0); 
       if (newAnimal.length > 2) {
           topics.push(newAnimal);
       }
      
     
         populateButtons(animals, "newButton", "#newButtons");

    });