$(document).ready(function() {

  $.ajax({
     type: "GET",
     url: "https://myapi.profstream.com/api/379f9b/wines",
     success: function(wines) {
        // console.log("Wine's name is " + wines[0].name);
        // console.log("Wine's year is " + wines[0].year);
        // console.log("Wine's grapes is " + wines[0].grapes);
        //
        // console.log("Wine's name is " + wines[1].name);
        // console.log("Wine's year is " + wines[1].year);
        // console.log("Wine's grapes is " + wines[1].grapes);

        wines.forEach(function(wine) {
          console.log("Name: " + wine.name);
          console.log("Year: " + wine.year);
          console.log("Grapes: " + wine.grapes);
          console.log("Country: " + wine.country);
          console.log("Region: " + wine.region);
          console.log("Description: " + wine.description);
          console.log("Picture: " + wine.picture);
        });
     },

     error: function() {
        alert("Error getting wines");
     },

  });

});
