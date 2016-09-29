function hideStuff(id) {
	document.getElementById(id).style.display = 'none';
}
// that's a universal hiding function - sweet!

/*

main menu (per room) is "mainTop";

Naming conventions:
_tc = toggle controls
_mc = menu controls
_fz = focus/zoom
_ks = keystone
_ls = lens shift

*/


// initialize vars so we don't
// have to use quotes:

var mainTop = 'mainTop';

// Hub:
var hubMainScreen = 'hubMainScreen';
var hubMainScreen_tc = 'hubMainScreen_tc';
var hubMainScreen_mc = 'hubMainScreen_mc';
var hubMainScreen_fz = 'hubMainScreen_fz';
var hubMainScreen_ls = 'hubMainScreen_ls';




function showHub(id) {
	hideStuff(mainTop);
	hideHub(id);
	document.getElementById(id).style.display = 'block';
}



/*
	end of "main" segments;
	start of "individual" segments;
*/



// start of "hub"
function hideHub(id) {
	hideStuff(hubMainScreen);
	hideStuff(hubMainScreen_tc);
	hideStuff(hubMainScreen_mc);
	hideStuff(hubMainScreen_fz);
	hideStuff(hubMainScreen_ls);
}
// end of "hub"



// done - at least for now...;
