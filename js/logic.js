
var science = ["space","Albert Einstein", "biology","physics","fireworks","Niel Degrass Tyson","astrophysics","planets","black hole","cyclone","placebo","absolute zero","the big bang theory","chemistry","solar","Matter","gravity","astronomy","Isaac Newton","Portal 2","rick and morty","apollo 11","aliens"];

$("#add-button").on("submit",function(){
    event.preventDefault();
    newSearch();
    giphyButtonGenerator();
    $("#add-button")[0].reset();
})

function newSearch () {
    var search = $("#giphySearch").val();
    console.log(search);

    science.push(search);
    console.log(science);
} 
    
function giphyButtonGenerator (){
    $("#giphyButton").empty();    

    for (var i = 0; i < science.length; i++) {

        $("#giphyButton").append(`<button class="data-button" data-science="${science[i]}">${science[i]}</button>`);
    }
}

giphyButtonGenerator()

//delegated event
$(document).on("click",".data-button",function(){
    
    console.log("listening")
    
    var buttonText = '';
    buttonText = $(this).attr("data-science");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FAFrT5yn0MYLm6Ct7Es9VJtaAvgkfRnS&q="+ buttonText +"&limit=25&offset=0&rating=G&lang=en";
    
       
    $.ajax({
        url:queryURL,
        method:'GET',
    }).then(function(response){
        
        console.log(response);
        
        var results = response.data;
        
        //clear Div before creating buttons
        $("#giphShow").empty()

        //create buttons

        for(var i = 0; i < results.length; i++){
            var scienceDiv = $('div');
            var p = $('<p class= rating>').text('Rating '+results[i].rating);
            var scienceImage = $('<img class="gifImage">');
            scienceImage.attr('src',results[i].images.fixed_height.url);
            scienceImage.attr('still');
            scienceImage.attr('animated');

            //creat a class on the image so it is clickable
        
            //store the animated img in an attr called animated
            //store the still image in an attr called still
            //use those 2 attr to switch in and out of the source attr
            //create a state attr and set it to still orginally

            scienceDiv.append(p);
            scienceDiv.append(scienceImage);
        
            $("#giphShow").append(scienceDiv);
        }
        
    });    
  
});





//new click event for each giph


//get the url for still 
//get the url for aminimated
//on click switch url back and forth - state


