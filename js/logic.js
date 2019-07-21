var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=FAFrT5yn0MYLm6Ct7Es9VJtaAvgkfRnS&q=javascript&limit=25&offset=0&rating=G&lang=en'

$.ajax({
    url:queryURL,
    method:'GET',
}).then(function(response){
    console.log(response);
})


