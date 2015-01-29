
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
var mainCenter;
var mainLeft;
var mainRight;
var mainScreen;
var mainSide;






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
			bridge = 'http://10.40.97.229:33075/file.html';
			break;
		case 'chapel':
			foldbackSide = '03';
			mainCenter = '02';
			mainSide = '01';
			chapel = 'http://10.40.97.229:33070/file.html';
			break;
		case 'gym':
			mainSide = '01';
			gym = 'http://10.40.97.229:33065/file.html';
			break;
		case 'well':
			mainCenter = '01';
			well = 'http://10.40.97.229:33130/file.html';
			break;
		case 'rm101A':
			mainCenter = '01';
			rm101A = 'http://10.40.97.229:33098/file.html';
			break;
		case 'rm101B':
			mainCenter = '01';
			rm101B = 'http://10.40.97.229:33099/file.html';
			break;
		case 'rm101C':
			mainCenter = '01';
			rm101C = 'http://10.40.97.229:33101/file.html';
			break;
		case 'rm128':
			mainCenter = '02';
			mainScreen = '01';
			rm128 = 'http://10.40.97.229:33128/file.html';
			break;
		case 'rm212':
			mainCenter = '02';
			mainScreen = '01';
			rm212 = 'http://10.40.97.229:33212/file.html';
			break;
		case 'rm214':
			mainCenter = '02';
			mainScreen = '01';
			rm214 = 'http://10.40.97.229:33214/file.html';
			break;
		case 'rm216':
			mainCenter = '02';
			mainScreen = '01';
			rm216 = 'http://10.40.97.229:33216/file.html';
			break;
		case 'rmRR1':
			mainCenter = '01';
			rmRR1 = 'http://10.40.97.229:33060/file.html';
			break;
	}
}
