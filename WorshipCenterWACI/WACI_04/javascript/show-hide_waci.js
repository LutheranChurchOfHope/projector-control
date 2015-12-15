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
var wcMainLeft = 'wcMainLeft';
var wcMainRight = 'wcMainRight';
var wcCenterCenter = 'wcCenterCenter';
var wcCenterLeft = 'wcCenterLeft';
var wcCenterRight = 'wcCenterRight';
var wcFoldbackLeft = 'wcFoldbackLeft';
var wcFoldbackRight = 'wcFoldbackRight';
var wcMainLeft_tc = 'wcMainLeft_tc';
var wcMainLeft_mc = 'wcMainLeft_mc';
var wcMainLeft_fz = 'wcMainLeft_fz';
var wcMainLeft_ks = 'wcMainLeft_ks';
var wcMainLeft_ls = 'wcMainLeft_ls';
var wcMainRight_tc = 'wcMainRight_tc';
var wcMainRight_mc = 'wcMainRight_mc';
var wcMainRight_fz = 'wcMainRight_fz';
var wcMainRight_ks = 'wcMainRight_ks';
var wcMainRight_ls = 'wcMainRight_ls';
var wcCenterCenter_tc = 'wcCenterCenter_tc';
var wcCenterCenter_mc = 'wcCenterCenter_mc';
var wcCenterCenter_fz = 'wcCenterCenter_fz';
var wcCenterCenter_ks = 'wcCenterCenter_ks';
var wcCenterCenter_ls = 'wcCenterCenter_ls';
var wcCenterLeft_tc = 'wcCenterLeft_tc';
var wcCenterLeft_mc = 'wcCenterLeft_mc';
var wcCenterLeft_fz = 'wcCenterLeft_fz';
var wcCenterLeft_ks = 'wcCenterLeft_ks';
var wcCenterLeft_ls = 'wcCenterLeft_ls';
var wcCenterRight_tc = 'wcCenterRight_tc';
var wcCenterRight_mc = 'wcCenterRight_mc';
var wcCenterRight_fz = 'wcCenterRight_fz';
var wcCenterRight_ks = 'wcCenterRight_ks';
var wcCenterRight_ls = 'wcCenterRight_ls';
var wcFoldbackLeft_tc = 'wcFoldbackLeft_tc';
var wcFoldbackLeft_mc = 'wcFoldbackLeft_mc';
var wcFoldbackLeft_fz = 'wcFoldbackLeft_fz';
var wcFoldbackLeft_ks = 'wcFoldbackLeft_ks';
var wcFoldbackLeft_ls = 'wcFoldbackLeft_ls';
var wcFoldbackRight_tc = 'wcFoldbackRight_tc';
var wcFoldbackRight_mc = 'wcFoldbackRight_mc';
var wcFoldbackRight_fz = 'wcFoldbackRight_fz';
var wcFoldbackRight_ks = 'wcFoldbackRight_ks';
var wcFoldbackRight_ls = 'wcFoldbackRight_ls';




function showWC(id) {
	hideStuff(mainTop);
	hideWC(id);
	document.getElementById(id).style.display = 'block';
}


/*
	end of "main" segments;
	start of "individual" segments;
*/



// start of "wc"
function hideWC(id) {
	hideStuff(wcMainLeft);
	hideStuff(wcMainRight);
	hideStuff(wcCenterCenter);
	hideStuff(wcCenterLeft);
	hideStuff(wcCenterRight);
	hideStuff(wcFoldbackLeft);
	hideStuff(wcFoldbackRight);
	hideStuff(wcMainLeft_tc);
	hideStuff(wcMainLeft_mc);
	hideStuff(wcMainLeft_fz);
	hideStuff(wcMainLeft_ls);
	hideStuff(wcMainRight_tc);
	hideStuff(wcMainRight_mc);
	hideStuff(wcMainRight_fz);
	hideStuff(wcMainRight_ls);
	hideStuff(wcCenterCenter_tc);
	hideStuff(wcCenterCenter_mc);
	hideStuff(wcCenterCenter_fz);
	hideStuff(wcCenterCenter_ks);
	hideStuff(wcCenterCenter_ls);
	hideStuff(wcCenterLeft_tc);
	hideStuff(wcCenterLeft_mc);
	hideStuff(wcCenterLeft_fz);
	hideStuff(wcCenterLeft_ks);
	hideStuff(wcCenterLeft_ls);
	hideStuff(wcCenterRight_tc);
	hideStuff(wcCenterRight_mc);
	hideStuff(wcCenterRight_fz);
	hideStuff(wcCenterRight_ks);
	hideStuff(wcCenterRight_ls);
	hideStuff(wcFoldbackLeft_tc);
	hideStuff(wcFoldbackLeft_mc);
	hideStuff(wcFoldbackLeft_fz);
	hideStuff(wcFoldbackLeft_ks);
	hideStuff(wcFoldbackLeft_ls);
	hideStuff(wcFoldbackRight_tc);
	hideStuff(wcFoldbackRight_mc);
	hideStuff(wcFoldbackRight_fz);
	hideStuff(wcFoldbackRight_ks);
	hideStuff(wcFoldbackRight_ls);
}
// end of "wc"

// done - at least for now...;
