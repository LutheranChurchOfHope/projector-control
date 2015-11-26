
// initilize location/address variables with meaningless content,
// so that they equal themselves. (This is needed for a
// switch/case block later on.)

var bridge = 'bridge';
var chapel = 'chapel';
var daLite = 'daLite';
var gym = 'gym';
var rm101A = 'rm101A';
var rm101B = 'rm101B';
var rm101C = 'rm101C';
var rm102 = 'rm102';
var rm104 = 'rm104';
var rm128 = 'rm128';
var rm212 = 'rm212';
var rm214 = 'rm214';
var rm216 = 'rm216';
var rmRR1 = 'rmRR1';
var well = 'well';


// get all our variables ready:

var foldbackCenter;
var foldbackLeft;
var foldbackRight;
var foldbackSide;
var foldbackTV;
var mainCenter;
var mainLeft;
var mainRight;
var mainScreen;
var mainSide;
var mainOne;
var mainTwo;
var mainThree;






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
		case 'bridge':
			foldbackCenter = '04';
			mainCenter = '03';
			mainLeft = '01';
			mainRight = '02';
			bridge = 'http://10.40.30.75/file.html';
			break;
		case 'chapel':
			foldbackSide = '03';
			mainCenter = '02';
			mainSide = '01';
			chapel = 'http://10.40.30.70/file.html';
			break;
		case 'gym':
			mainSide = '01';
			gym = 'http://10.40.30.65/file.html';
			break;
		case 'well':
			mainCenter = '01';
			mainOne = '03';
			mainTwo = '04';
			mainThree = '05';
			foldbackTV = '06';
			well = 'http://10.40.30.130/file.html';
			break;
		case 'rm101A':
			mainCenter = '02';
			mainScreen = '01';
			rm101A = 'http://10.40.30.98/file.html';
			break;
		case 'rm101B':
			mainCenter = '02';
			mainScreen = '01';
			rm101B = 'http://10.40.30.99/file.html';
			break;
		case 'rm101C':
			mainCenter = '02';
			mainScreen = '01';
			rm101C = 'http://10.40.30.101/file.html';
			break;
		case 'rm102':
			mainCenter = '02';
			mainScreen = '01';
			rm101C = 'http://10.40.30.102/file.html';
			break;
		case 'rm104':
			mainCenter = '02';
			mainScreen = '01';
			rm101C = 'http://10.40.30.104/file.html';
			break;
		case 'rm128':
			mainCenter = '02';
			mainScreen = '01';
			rm128 = 'http://10.40.30.128/file.html';
			break;
		case 'rm212':
			mainCenter = '02';
			mainScreen = '01';
			rm212 = 'http://10.40.30.212/file.html';
			break;
		case 'rm214':
			mainCenter = '02';
			mainScreen = '01';
			rm214 = 'http://10.40.30.214/file.html';
			break;
		case 'rm216':
			mainCenter = '02';
			mainScreen = '01';
			rm216 = 'http://10.40.30.216/file.html';
			break;
		case 'rmRR1':
			mainCenter = '01';
			rmRR1 = 'http://10.40.30.60/file.html';
			break;
	}
}
