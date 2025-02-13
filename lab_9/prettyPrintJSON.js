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
        prettyPrintJSON(jsondata);
        console.log("worked2")
    });
}

function prettyPrintJSON(jsondata) {
    var pretty = JSON.stringify(jsondata, null, 4);
    $('#resultsbox').append("<p>" + pretty + "</p");
    console.log("worked3")
}
