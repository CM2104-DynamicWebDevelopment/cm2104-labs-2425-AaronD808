$(function(){
    alert("document ready");

    $('#searchform').submit(function(){
        var searchterms = $("#searchterms").val();
        addItemToList("example item");
        return false;
    });
});

function addItemToList (item){
    $('#results').append("<li>" + item + "</li>");
}