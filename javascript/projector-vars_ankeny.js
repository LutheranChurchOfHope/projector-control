
// initilize location/address variables with meaningless content,
// so that they equal themselves. (This is needed for a
// switch/case block later on.)

var worshipCenter = 'worshipCenter';


// get all our variables ready:

var foldbackScreen;
var mainScreen;






// these functions have code pulled from the
// extronBox() function, such that all
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
		case 'worshipCenter':
			foldbackScreen = 'xx';
			mainScreen = 'yy';
			worshipCenter = 'http://10.50.95.20/file.html';
			break;
	}
}
