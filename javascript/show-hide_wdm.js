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


function showBridge(id) {
	hideStuff('mainTop');
	hideBridge(id);
	document.getElementById(id).style.display = 'block';
}

function showChapel(id) {
	hideStuff('mainTop');
	hideChapel(id);
	document.getElementById(id).style.display = 'block';
}

function showGym(id) {
	hideStuff('mainTop');
	hideGym(id);
	document.getElementById(id).style.display = 'block';
}


/*
	end of "main" segments;
	start of "individual" segments;
*/



// start of "bridge"
function hideBridge(id) {
	hideStuff('bridgeMainLeft');
	hideStuff('bridgeMainRight');
	hideStuff('bridgeMainCenter');
	hideStuff('bridgeFoldbackCenter');
	hideStuff('bridgeMainLeft_tc');
	hideStuff('bridgeMainLeft_mc');
	hideStuff('bridgeMainLeft_fz');
	hideStuff('bridgeMainLeft_ks');
	hideStuff('bridgeMainLeft_ls');
	hideStuff('bridgeMainRight_tc');
	hideStuff('bridgeMainRight_mc');
	hideStuff('bridgeMainRight_fz');
	hideStuff('bridgeMainRight_ks');
	hideStuff('bridgeMainRight_ls');
	hideStuff('bridgeMainCenter_tc');
	hideStuff('bridgeMainCenter_mc');
	hideStuff('bridgeMainCenter_fz');
	hideStuff('bridgeMainCenter_ks');
	hideStuff('bridgeMainCenter_ls');
	hideStuff('bridgeFoldbackCenter_tc');
	hideStuff('bridgeFoldbackCenter_mc');
	hideStuff('bridgeFoldbackCenter_fz');
	hideStuff('bridgeFoldbackCenter_ks');
	hideStuff('bridgeFoldbackCenter_ls');
}
// end of "bridge"

// start of "chapel"
function hideChapel(id) {
	hideStuff('chapelMainCenter');
	hideStuff('chapelMainSide');
	hideStuff('chapelFoldbackSide');
	hideStuff('chapelMainCenter_tc');
	hideStuff('chapelMainCenter_mc');
	hideStuff('chapelMainCenter_fz');
	hideStuff('chapelMainCenter_ks');
	hideStuff('chapelMainCenter_ls');
	hideStuff('chapelMainSide_tc');
	hideStuff('chapelMainSide_mc');
	hideStuff('chapelMainSide_fz');
	hideStuff('chapelMainSide_ls');
	hideStuff('chapelFoldbackSide_tc');
	hideStuff('chapelFoldbackSide_mc');
	hideStuff('chapelFoldbackSide_fz');
	hideStuff('chapelFoldbackSide_ks');
	hideStuff('chapelFoldbackSide_ls');
}
// end of "chapel"

// start of "gym"
function hideGym(id) {
	hideStuff('gymMainSide');
	hideStuff('gymMainSide_tc');
	hideStuff('gymMainSide_mc');
	hideStuff('gymMainSide_fz');
	hideStuff('gymMainSide_ks');
	hideStuff('gymMainSide_ls');
}
// end of "gym"

// done - at least for now...;
