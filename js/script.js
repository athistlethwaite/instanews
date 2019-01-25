//Problem 1: Retreive content from the NYT Top Stories API and add it to our site. 
//If we don't get a successful response, let the user know in the interface somewhere.

//1. Listen for the select menu to change (watching the value on the select menu) 
//1b. If select value is "section..." do nothing and return from the function immediately!
//1c. Here we want to show the loader 
//1d. Clear out old stories - when the user selects a new category, you want the 12 stories to disappear so you have room for the other section 
//2. Send a request to the NYT API for data based on the value of the select menu 
//3. Get a response/If successful: NYT API will send us a lot of information we need to parse the data and decide waht parts we want to append to our DOM ** use jquery each 
//4. Append that stuff to the dom: 
//5. Don't get a response/If unsuccessful: Show a helpful error message to the user in the UI(user interface) - append an error message to the DOM 
//6. Hide the loader 


//the same as document ready(), this is #1 
$(function() {
  $('#sections').on('change', function() {
    const section = $(this).val();

    //if section is empty, return (3 lines for this )
    //show loader 
    //clear stories 

    //make ajax request 
    $.ajax({
      method: 'GET'
      url: 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=g6kpkfDKZ7PlqdA4ds2KEggP82QRbUyZ',
      dataType: 'json'
    })
    .done(function(response) {
      // console.log(response); //is an object!
      console.log(reponse.results) //this will show only the array when you click index on the web
      //append all the things
      //1. Filter the data in response.results to only include 12 articles with images 
      //2. Create .each to run a function for each article
      //3. For each article, create constants for image URL, title and link * open up your console to find out more information about waht NYT called their items you want to show
      //4. Make a HTML string for the article, using the constants we just created - this will be an li (look at itunes example)
      //5. Now we have to put it into the #section by using Append. Append string to stories section 
    })
    .fail(function() {
      //do stuff here if it doesn't work out 
    })
    .always(function() {
      //hide the loader 
    });



  });
});


