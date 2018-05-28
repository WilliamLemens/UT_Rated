var tbl = document.getElementsByClassName("rwd-table")[0];

// Insert "Rating" to thead
var th = tbl.tHead.children[0];
var ratingHead = document.createElement("th");
th.insertBefore(ratingHead, th.children[5]);
ratingHead.setAttribute("scope", "col");
ratingHead.innerHTML = "Rating"; // TODO add in a question field that opens a window describing extension

// Add cells to body for ratings
var trs = tbl.tBodies[0].children;
var c_num = "tmp"; // temp val
for (i = 0; i < trs.length; i++) {
	if (trs[i].children[0].className == "course_header") { // header
		c_num = trs[i].children[0].innerHTML.substr(4,8); // gets the course number
		continue;
	}
	var tds = trs[i].children;
	var newtd = document.createElement("td");
	trs[i].insertBefore(newtd, trs[i].children[5]);
	newtd.innerHTML = c_num;
}
//http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&queryoption=HEADER&facetSearch=true&query=gheith&sid=1255&dept=Computer%20Science
