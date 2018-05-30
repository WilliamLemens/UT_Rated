function getProfLinkHTML(name) {
	// "<a href="https://utdirect.utexas.edu/ctl/ecis/results/search.WBX?s_in_search_name="+name+"\"> "+name+" </a>";
	name = caseName(name);
	return "<a href=\""+baseURL+prof+name+"\"> "+name+" </a>";
}

function caseName(name) {
	return name.charAt(0)
		+ name.substr(1, name.length-2).toLowerCase()
		+ name.charAt(name.length-1);
}

var baseURL = "https://utdirect.utexas.edu/ctl/ecis/results/search.WBX";
var prof = "?s_in_search_name=";
var tbl = document.getElementsByClassName("rwd-table")[0];

// Add cells to body for ratings
var trs = tbl.tBodies[0].children;
var c_num = []; // [Field, Number]
for (i = 0; i < trs.length; i++)
	if (trs[i].children[0].className != "course_header")
		trs[i].children[4].innerHTML = getProfLinkHTML(trs[i].children[4].innerHTML);
