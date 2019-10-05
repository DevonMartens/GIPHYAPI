$(document).ready(function() {

    var topics = ["Shark", "Armadillo", "Gecko", "Penguin", "Gorilla", "Chimp", "Snake", "Bird", "Parrot", "Gator"];

   

   function populateButtons() {

       $('.here').empty(); 

       for (var i = 0; i< topics.length; i++) {

        var animalButton = $('<button>');

        animalButton.addClass("topics btn btn-info m-3");

        animalButton.attr('data-type', topics[i]);

        animalButton.text(topics[i]);

        $(".here").append(animalButton);

      }

   }

   

     populateButtons();

   

     

     $(document).on("click","#addTopic", function(event) {

         event.preventDefault();

        var newAnimal = $("#Input").val().trim();

        topics.push(newAnimal)


        populateButtons();


        

    })


    $(document).on("click", ".topics", function () {

         $('#gifArea').empty();

         $('#addTopic').removeClass("active");

         $(this).addClass('active');

     

         var type = $(this).attr("data-type");

         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=gAqN16PRJ6aBi1cl5I5ZqVkcFB8zp3WG";

        console.log(queryURL);

        $.ajax ({

            url: queryURL,

            method: "GET"

        })

     

     .then(function(response) {

         var results = response.data;

        console.log(results);

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

        

            $("#gifArea").append(animalDiv);

        }

     });

        

    })

     

     //recheck line

     $(document).on("click", ".animal-image", function () {

         var state = $(this).attr("data-state");

       

         if (state === "still") {

             $(this).attr("src", $(this).attr("data-animate"));    

             $(this).attr("data-state", "animate");

         }

         else {

         $(this).attr("src", $(this).attr("data-still"));    

         $(this).attr("data-state", "still");

         }

        })
    })