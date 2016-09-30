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
var worshipCenterMainScreen = 'worshipCenterMainScreen';
var worshipCenterMainScreen_tc = 'worshipCenterMainScreen_tc';
var worshipCenterMainScreen_mc = 'worshipCenterMainScreen_mc';
var worshipCenterMainScreen_fz = 'worshipCenterMainScreen_fz';
var worshipCenterMainScreen_ls = 'worshipCenterMainScreen_ls';




function showWorshipCenter(id) {
	hideStuff(mainTop);
	hideWorshipCenter(id);
	document.getElementById(id).style.display = 'block';
}



/*
	end of "main" segments;
	start of "individual" segments;
*/



// start of "worshipCenter"
function hideWorshipCenter(id) {
	hideStuff(worshipCenterMainScreen);
	hideStuff(worshipCenterMainScreen_tc);
	hideStuff(worshipCenterMainScreen_mc);
	hideStuff(worshipCenterMainScreen_fz);
	hideStuff(worshipCenterMainScreen_ls);
}
// end of "hub"



// done - at least for now...;
