function getCourseLinkHTML(c_num, text) {
	// "<a href="https://utdirect.utexas.edu/ctl/ecis/results/search.WBX?s_in_search_course_dept="+c_num[0]+", ?s_in_search_course_num="+c_num[1]+"\"> " + text+" </a>"
	return "<a href=\""+baseURL+"?search_type=course"+dept+c_num[0]+", "+course+c_num[1]+"\"> " + text+" </a>";
}

function getProfLinkHTML(name) {
	// "<a href="https://utdirect.utexas.edu/ctl/ecis/results/search.WBX?s_in_search_name="+name+"\"> "+name+" </a>";
	name = caseName(name);
	return "<a href=\""+baseURL+prof+name+"\"> "+name+" </a>";
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

var baseURL = "https://utdirect.utexas.edu/ctl/ecis/results/search.WBX";
var prof = "?s_in_search_name=";
var dept = "?s_in_search_course_dept=";
var course = "?s_in_search_course_num=";
var tbl = document.getElementsByClassName("rwd-table")[0];

// Add cells to body for ratings
var trs = tbl.tBodies[0].children;
var c_num = []; // [Field, Number]
for (i = 0; i < trs.length; i++)
	if (trs[i].children[0].className == "course_header") { // header
		c_num = getCourseNum(trs[i].children[0].innerHTML.substr(4)); // gets the course number
		trs[i].children[0].innerHTML = getCourseLinkHTML(c_num, trs[i].children[0].innerHTML);
	}
	else trs[i].children[4].innerHTML = getProfLinkHTML(trs[i].children[4].innerHTML);
