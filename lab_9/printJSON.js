$(function(){
    alert("document ready");

    $('#searchform').submit(function(){
        var searchterms = $("#searchterms").val();
        getResultsFromOMDB(searchterms);
        console.log("worked1")
        return false;
    });
});

function getResultsFromOMDB(searchterms) {
    var url = "https://www.omdbapi.com/?apikey=125338a&s=" + searchterms;
    $.getJSON(url, function(jsondata){
        printJSON(jsondata);
        console.log("worked2")
    });
}

function printJSON(jsondata) {
    var normal = JSON.stringify(jsondata);
    $('#resultsbox').append("<p>" + normal + "</p");
    console.log("worked3")
}
