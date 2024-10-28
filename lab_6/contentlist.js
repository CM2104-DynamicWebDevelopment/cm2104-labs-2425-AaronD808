
function addContent () {
	// add a list of items to the content div
    let items = ["hewey", "dewey", "louie"];
	
	// build the html string for a <ul> list
    let items_html = "<ul>";
    for (let i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";
	
	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html

}

