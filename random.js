/**
 * Created by pranavkapoor on 07/07/17.
 */
function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
            $("#quotez").html("<p id='random_quote' class='lead text-center'>" +
                response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");

        }
    });
}

$(function() {
    randomQuote();
});

$("button").click(function(){

    randomQuote();
});