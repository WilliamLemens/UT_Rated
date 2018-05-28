/*function makeXMLHttpRequest(url) {
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.send();

	if (request.status = 200)
		return request.responseText;
}*/

function search (name, c_num) {
	name = caseName(name);

	/*console.log("Getting prof info for "+name+", and "+c_num[0]+" "+c_num[1]+".");
	var request = makeXMLHttpRequest(baseURL+name);

	if (request === 'undefined')
		return "bad search request";

	console.log("\""+request+"\"");

	return request;*/

	return "<a href=\""+baseURL+name+"\">"
		+ "Teacher: " + name
		+ ", Course: " + c_num[0]+"-"+c_num[1]+"</a>";
}

function getCourseNum(c_num) {
	if (c_num.charAt(1) == ' ' && !isNaN(c_num.charAt(2))) // "A 123" or "A 123K"
		return [c_num.charAt(0), c_num.substr(3, 4).trim()];
	if (c_num.charAt(2) == ' ') // "AB 123" or "AB 123K"
		return [c_num.substr(0, 2), c_num.substr(4, 4).trim()];
	return [c_num.substr(0, 3), c_num.substr(5, 4).trim()]; // "ABC 123", "A B 123", "ABC 123K", or "A B 123K"
}

function caseName(name) {
	return name.charAt(0)
		+ name.substr(1, name.length-2).toLowerCase()
		+ name.charAt(name.length-1);
}

var baseURL = "https://utdirect.utexas.edu/ctl/ecis/results/search.WBX?s_in_search_name=";
var tbl = document.getElementsByClassName("rwd-table")[0];

// Insert "Rating" to thead
var th = tbl.tHead.children[0];
var ratingHead = document.createElement("th");
th.insertBefore(ratingHead, th.children[5]);
ratingHead.setAttribute("scope", "col");
ratingHead.innerHTML = "Rating"; // TODO add in a question field that opens a window describing extension

// Add cells to body for ratings
var trs = tbl.tBodies[0].children;
var c_num = []; // [Field, Number]
for (i = 0; i < trs.length; i++) {
	if (trs[i].children[0].className == "course_header") { // header
		c_num = getCourseNum(trs[i].children[0].innerHTML.substr(4)); // gets the course number
		continue;
	}
	var tds = trs[i].children;
	var newtd = document.createElement("td");
	trs[i].insertBefore(newtd, trs[i].children[5]);
	newtd.innerHTML = search(trs[i].children[4].innerHTML, c_num);
}
