<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Animal Buttons</title>
</head>

<body>
  <button data-animal="cat">meow</button>
  <button data-animal="dog">woof</button>
  <button data-animal="bird">chirp</button>
  <div id="gifs-appear-here">
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript"></script>

$( document ).ready(function() {
  var topics = ["kitty", "dog", "owl","parrot", "shark", "stingray"]
 
  }

    for (var i = 0; i< arrayToUse.length; i++) {
        var a = $('button');
        a.addClass(classToAdd);
        a.attr('data-type', arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
    }
        }
    
    $(document).on("click",".animal-button", function() {
        $('#animals').empty();
        $('.animal-button').removeClass("active");
        $(this).addClass('active')
    
        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api"
    
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
        animalImage.attr("src",still);
        animalImage.attr("data-still",still);
        animalImage.attr("data-animate",animated);
        animalImage.attr("data-state",still);
        animalImage.addClass("animal-image");
    
        animalDiv.append(p);
        animalDiv.append(animalImage);
    
        $("#animals").append(animalDiv);
    }
    });
    );
    
    (document).on("click", ".animal-image", function () {
        var state = $(this).("data-state");
    
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
    });
    
    $("#add-animal").on("click", function(event) {
        event.preventDefault();
        var newAnimal = $("input").eq(0).val(0);
    
        if(newAnimal.length > 2) {
            animals.push(newAnimal)
        }
    
        populateButtons(animals, "animal-button", "#animal-buttons");
        );
    
    
    }