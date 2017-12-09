var tbl = document.getElementsByClassName('rwd-table')[0];
// Insert "Rating" to thead
var th = tbl.tHead.children[0];
var ratingHead = document.createElement('th'); //th.insertCell(5);
th.insertBefore(ratingHead, th.children[5]);
ratingHead.setAttribute("scope", "col");
ratingHead.innerHTML = "Rating"; // TODO add in a question field that opens a window describing extension
// Add cells to body for ratings
//var tb = tbl.tBodies[0];
//for ()
