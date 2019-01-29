$(function () {
  //1. Listen for "Select..."
  $('#drop-down').on('change', function (event) {
    event.preventDefault()

    const section = $('#drop-down').val();

    if (section !== "") {
      $(".ajax-loader").show();
      getStories(section);
    }
  });

  function getStories(section) {
    $('.top-stories ul').empty();

    //2. Make ajax request: 
    $.ajax({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=g6kpkfDKZ7PlqdA4ds2KEggP82QRbUyZ',
        dataType: 'json',
      })
      .done(function (data) {
        if (data.results.length === 0) {
          $('.top-stories ul').append('<li> Please select another section. </li>')

        } else {
          const articles = data.results.slice(0, 12);

          $.each(articles.filter(function (value) {
            const abstract = '<p class="abstract">' + value.abstract + '</p>';
            let img = '<div class="article-image" style="background-image:url(' + value.multimedia[4].url + ');">' + abstract + '</div>';
            const url = value.url

            console.log(value);

            $(".top-stories ul").append('<li class="article-list">' + '<a href="' + url + '">' + img + "</a>" + "</li>")

          }))
        }
      })

      //3. If unsuccessful 
      .fail(function () {
        console.log("Sorry, no articles were found. Please select another section.");
      })

      //4. Hide loader
      .always(function () {
        $('.ajax-loader').hide();
      })
  }

});