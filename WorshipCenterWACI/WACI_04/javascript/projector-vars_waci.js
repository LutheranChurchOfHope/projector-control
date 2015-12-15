
// initilize location/address variables with meaningless content,
// so that they equal themselves. (This is needed for a
// switch/case block later on.)

var wc = 'wc';


// get all our variables ready:

var bookstoreTV_0;
var bookstoreTV_1;
var bookstoreTV_2;
var bookstoreTV_3;
var centerBeam1;
var centerCenter;
var centerLeft;
var centerRight;
var entryPlasmas;
var foldbackLeft;
var foldbackRight;
var footballTV;
var gsPlasmas;
var mainLeft;
var mainRight;
var prayerTVs;
var vcPlasma01;
var vcPlasma02;
var vcPlasma03;
var vcPlasma04;
var vcPlasma05;
var vcPlasma06;



// these functions have code pulled from the
// waciBox() function, such that all
// "generic" code is in one file, and
// all the "specific" code resides in
// other files (or at least one other)

function populateVars (address) {
	/*
		This switch block is the code that sets up
		our variables for the different projectors.
		
		It knows, per room, what ports correspond to
		what projector - so you don't have to remember.
	*/
	switch (address)
	{
		case 'wc':
			bookstoreTV_0 = 'bookstoreTV-0';
			bookstoreTV_1 = 'bookstoreTV-1';
			bookstoreTV_2 = 'bookstoreTV-2';
			bookstoreTV_3 = 'bookstoreTV-3';
			centerBeam1 = 'centerBeam1';
			centerCenter = 'centerCenter';
			centerLeft = 'centerLeft';
			centerRight = 'centerRight';
			entryPlasmas = 'entryPlasmas';
			foldbackLeft = 'foldbackLeft';
			foldbackRight = 'foldbackRight';
			footballTV = 'footballTV';
			gsPlasmas = 'gsPlasmas';
			mainLeft = 'mainLeft';
			mainRight = 'mainRight';
			prayerTVs = 'prayerTVs';
			vcPlasma01 = 'vcPlasma01';
			vcPlasma02 = 'vcPlasma02';
			vcPlasma03 = 'vcPlasma03';
			vcPlasma04 = 'vcPlasma04';
			vcPlasma05 = 'vcPlasma05';
			vcPlasma06 = 'vcPlasma06';
			break;
	}
}
