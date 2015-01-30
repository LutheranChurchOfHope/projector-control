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

// Bridge:
var bridgeMainLeft = 'bridgeMainLeft';
var bridgeMainRight = 'bridgeMainRight';
var bridgeMainCenter = 'bridgeMainCenter';
var bridgeFoldbackCenter = 'bridgeFoldbackCenter';
var bridgeMainLeft_tc = 'bridgeMainLeft_tc';
var bridgeMainLeft_mc = 'bridgeMainLeft_mc';
var bridgeMainLeft_fz = 'bridgeMainLeft_fz';
var bridgeMainLeft_ks = 'bridgeMainLeft_ks';
var bridgeMainLeft_ls = 'bridgeMainLeft_ls';
var bridgeMainRight_tc = 'bridgeMainRight_tc';
var bridgeMainRight_mc = 'bridgeMainRight_mc';
var bridgeMainRight_fz = 'bridgeMainRight_fz';
var bridgeMainRight_ks = 'bridgeMainRight_ks';
var bridgeMainRight_ls = 'bridgeMainRight_ls';
var bridgeMainCenter_tc = 'bridgeMainCenter_tc';
var bridgeMainCenter_mc = 'bridgeMainCenter_mc';
var bridgeMainCenter_fz = 'bridgeMainCenter_fz';
var bridgeMainCenter_ks = 'bridgeMainCenter_ks';
var bridgeMainCenter_ls = 'bridgeMainCenter_ls';
var bridgeFoldbackCenter_tc = 'bridgeFoldbackCenter_tc';
var bridgeFoldbackCenter_mc = 'bridgeFoldbackCenter_mc';
var bridgeFoldbackCenter_fz = 'bridgeFoldbackCenter_fz';
var bridgeFoldbackCenter_ks = 'bridgeFoldbackCenter_ks';
var bridgeFoldbackCenter_ls = 'bridgeFoldbackCenter_ls';

// Chapel:
var chapelMainCenter = 'chapelMainCenter';
var chapelMainSide = 'chapelMainSide';
var chapelFoldbackSide = 'chapelFoldbackSide';
var chapelMainCenter_tc = 'chapelMainCenter_tc';
var chapelMainCenter_mc = 'chapelMainCenter_mc';
var chapelMainCenter_fz = 'chapelMainCenter_fz';
var chapelMainCenter_ks = 'chapelMainCenter_ks';
var chapelMainCenter_ls = 'chapelMainCenter_ls';
var chapelMainSide_tc = 'chapelMainSide_tc';
var chapelMainSide_mc = 'chapelMainSide_mc';
var chapelMainSide_fz = 'chapelMainSide_fz';
var chapelMainSide_ls = 'chapelMainSide_ls';
var chapelFoldbackSide_tc = 'chapelFoldbackSide_tc';
var chapelFoldbackSide_mc = 'chapelFoldbackSide_mc';
var chapelFoldbackSide_fz = 'chapelFoldbackSide_fz';
var chapelFoldbackSide_ks = 'chapelFoldbackSide_ks';
var chapelFoldbackSide_ls = 'chapelFoldbackSide_ls';

// Gym:
var gymMainSide = 'gymMainSide';
var gymMainSide_tc = 'gymMainSide_tc';
var gymMainSide_mc = 'gymMainSide_mc';
var gymMainSide_fz = 'gymMainSide_fz';
var gymMainSide_ks = 'gymMainSide_ks';
var gymMainSide_ls = 'gymMainSide_ls';




function showBridge(id) {
	hideStuff(mainTop);
	hideBridge(id);
	document.getElementById(id).style.display = 'block';
}

function showChapel(id) {
	hideStuff(mainTop);
	hideChapel(id);
	document.getElementById(id).style.display = 'block';
}

function showGym(id) {
	hideStuff(mainTop);
	hideGym(id);
	document.getElementById(id).style.display = 'block';
}


/*
	end of "main" segments;
	start of "individual" segments;
*/



// start of "bridge"
function hideBridge(id) {
	hideStuff(bridgeMainLeft);
	hideStuff(bridgeMainRight);
	hideStuff(bridgeMainCenter);
	hideStuff(bridgeFoldbackCenter);
	hideStuff(bridgeMainLeft_tc);
	hideStuff(bridgeMainLeft_mc);
	hideStuff(bridgeMainLeft_fz);
	hideStuff(bridgeMainLeft_ks);
	hideStuff(bridgeMainLeft_ls);
	hideStuff(bridgeMainRight_tc);
	hideStuff(bridgeMainRight_mc);
	hideStuff(bridgeMainRight_fz);
	hideStuff(bridgeMainRight_ks);
	hideStuff(bridgeMainRight_ls);
	hideStuff(bridgeMainCenter_tc);
	hideStuff(bridgeMainCenter_mc);
	hideStuff(bridgeMainCenter_fz);
	hideStuff(bridgeMainCenter_ks);
	hideStuff(bridgeMainCenter_ls);
	hideStuff(bridgeFoldbackCenter_tc);
	hideStuff(bridgeFoldbackCenter_mc);
	hideStuff(bridgeFoldbackCenter_fz);
	hideStuff(bridgeFoldbackCenter_ks);
	hideStuff(bridgeFoldbackCenter_ls);
}
// end of "bridge"

// start of "chapel"
function hideChapel(id) {
	hideStuff(chapelMainCenter);
	hideStuff(chapelMainSide);
	hideStuff(chapelFoldbackSide);
	hideStuff(chapelMainCenter_tc);
	hideStuff(chapelMainCenter_mc);
	hideStuff(chapelMainCenter_fz);
	hideStuff(chapelMainCenter_ks);
	hideStuff(chapelMainCenter_ls);
	hideStuff(chapelMainSide_tc);
	hideStuff(chapelMainSide_mc);
	hideStuff(chapelMainSide_fz);
	hideStuff(chapelMainSide_ls);
	hideStuff(chapelFoldbackSide_tc);
	hideStuff(chapelFoldbackSide_mc);
	hideStuff(chapelFoldbackSide_fz);
	hideStuff(chapelFoldbackSide_ks);
	hideStuff(chapelFoldbackSide_ls);
}
// end of "chapel"

// start of "gym"
function hideGym(id) {
	hideStuff(gymMainSide);
	hideStuff(gymMainSide_tc);
	hideStuff(gymMainSide_mc);
	hideStuff(gymMainSide_fz);
	hideStuff(gymMainSide_ks);
	hideStuff(gymMainSide_ls);
}
// end of "gym"

// done - at least for now...;
