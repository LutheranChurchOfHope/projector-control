function httpGet (theUrl)
	{
		var xmlHttp = null;
    	xmlHttp = new XMLHttpRequest();
    	xmlHttp.open( "GET", theUrl, true );
    	xmlHttp.send();
    }

function goBack()
	{
		window.history.back();
	}


/*			case '':
				break;
			case '':
				break;
			case '':
				break;
*/


/*

Program flow:
- first, initilize all variables to the string of the variable name. This way, when calling the function,
		you don't have to use [ 'varName' ] format, you can just say [ varName ]. The reason for this is
		that the switch/case blocks are looking for a string - we can pass a [ 'string' ] to the function,
		but it's easier to just pass a [ variable ] that is set to [ 'string' ]. (Though, all ours are the
		same as itself, with the exception of underscores and dashes.

Then, the function is called.
		
- Find what room we're in. Found it? Great. Now, we need to do a few things:
	- setup the variables for all devices in the room. The number is the port on the Extron box said
		device is connected to.
	- change the value of the room's variable to the full URL of the file we're going to HTTP-GET later on.
	Don't include stuff after the file; that'll be added later.

Now, we tack some stuff onto the end of the URL, that's necessary to put there when talking to Extron boxes.
	Namely, it's the "?cmd=W" part, which kicks off the string to follow, with port number and command to execute.
	
- Find out what device type we'll be controlling. Got it? Good.
	- Now that we know that, let's find the command in our switch/case list that matches what the user is
		trying to do. After we find a match, we set the command variable to the serial data we need to send
		in order to execute that command on the desired device.
	- if the device we're talking to requires something funny, like start/end bytes, we add those here.
		Otherwise, just leave the command variable alone, and carry on!

Time to put it all together! Build the full URL to HTTP-GET from all the pieces we've established above.

URL Built? Good! Now run the part that makes us HTTP-GET it.

Done!


*/





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


// setup other same-as-name variables

var panasonicPJLink = 'panasonicPJLink';
var sanyoPLC = 'sanyoPLC';
var auto_adjust = 'auto-adjust';
var blank_off = 'blank-off';
var blank_on = 'blank-on';
var focus_in = 'focus-in';
var focus_in_coarse = 'focus-in-coarse';
var focus_in_fine = 'focus-in-fine';
var focus_in = 'focus-out';
var focus_out_coarse = 'focus-out-coarse';
var focus_out_fine = 'focus-out-fine';
var freeze_off = 'freeze-off';
var freeze_on = 'freeze-on';
var image1_recall = 'image1-recall';
var image2_recall = 'image2-recall';
var image3_recall = 'image3-recall';
var image4_recall = 'image4-recall';
var input_BNC = 'input-BNC';
var input_DVI = 'input-DVI';
var input_HDMI = 'input-HDMI';
var input_SVid = 'input-SVid';
var input_VGA = 'input-VGA';
var keystone_down = 'keystone-down';
var keystone_left = 'keystone-left';
var keystone_right = 'keystone-right';
var keystone_up = 'keystone-up';
var lens_shift_down = 'lens-shift-down';
var lens_shift_left = 'lens-shift-left';
var lens_shift_right = 'lens-shift-right';
var lens_shift_up = 'lens-shift-up';
var lens_shift_coarse_down = 'lens-shift-coarse-down';
var lens_shift_coarse_left = 'lens-shift-coarse-left';
var lens_shift_coarse_right = 'lens-shift-coarse-right';
var lens_shift_coarse_up = 'lens-shift-coarse-up';
var menu_down = 'menu-down';
var menu_enter = 'menu-enter';
var menu_left = 'menu-left';
var menu_off = 'menu-off';
var menu_on = 'menu-on';
var menu_right = 'menu-right';
var menu_toggle = 'menu-toggle';
var menu_up = 'menu-up';
var power_off = 'power-off';
var power_on = 'power-on';
var screen_down = 'screen-down';
var screen_up = 'screen-up';
var zoom_in = 'zoom-in';
var zoom_out = 'zoom-out';






/*

Address:
"address" is something like "http://ip-address:port/file.html",
which includes everything before the "?".

Port:
"port" is the two-digit port of the Extron device, to which the
device you wish to control is connected.

Device Type:
"deviceType" should specify a type of device/device "class", as
it were; scroll down a ways to see your options for this item.

Organization should be alphabetical by name.

Not all actions are supported by all devices. Here are the
actions that are supported on at least one device:

	auto-adjust
	blank-off
	blank-on
	focus-in
	focus-in-coarse
	focus-in-fine
	focus-out
	focus-out-coarse
	focus-out-fine
	freeze-off
	freeze-on
	image1-recall
	image2-recall
	image3-recall
	image4-recall
	input-BNC
	input-DVI
	input-HDMI
	input-SVid
	input-VGA
	keystone-down
	keystone-left
	keystone-right
	keystone-up
	lens-shift-down
	lens-shift-left
	lens-shift-right
	lens-shift-up
	lens-shift-coarse-down
	lens-shift-coarse-left
	lens-shift-coarse-right
	lens-shift-coarse-up
	menu-down
	menu-enter
	menu-left
	menu-off
	menu-on
	menu-right
	menu-toggle
	menu-up
	power-off
	power-on
	screen-down
	screen-up
	zoom-in
	zoom-out


Note that strings use dashes, whereas variables use underscores.
So, you can use 'zoom-in' (with quotes), or "zoom_in" (without quotes).



The following devices are supported by deviceType:

	daLite
	panasonicPJLink
	sanyoPLC














*/

var action;
var address;
var deviceType;
var port;

function extronBox (address, port, deviceType, action)
{
	
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
				
		
	//var urlStart = address + '?cmd=W' + port + 'RS|';
	var urlStart = address + '?cmd=W' + port;
	var command;



	if (deviceType == 'daLite')
	{
		// no need need to change urlStart, because
		// using IR instead of just plain serial
		
		
		
		/*
			This switch block takes the action you want
			to execute, and turns it into the
			the corresponding serial command.
		*/
		
		switch (action)
		{
			case 'screen-down':
				command = '%2C1%2C2%2C0IR|';
				break;
			case 'screen-up':
				command = '%2C1%2C1%2C0IR|';
				break;
		} // end switch();
		// no funny little stuff needed!
		// command = command;
	} // end if(); for device

	if (deviceType == 'sanyoPLC')
	{
		
		var urlStart = urlStart + 'RS|';
		
		/*
			This switch block takes the action you want
			to execute, and turns it into the
			the corresponding serial command.
		*/
		switch (action)
		{
			case 'auto-adjust':
				command = 'C89';
				break;
			case 'blank-off':
				command = 'C0E';
				break;
			case 'blank-on':
				command = 'C0D';
				break;
			case 'focus-in':
				command = 'C4A';
				break;
			case 'focus-out':
				command = 'C4B';
				break;
			case 'freeze-off':
				command = 'C44';
				break;
			case 'freeze-on':
				command = 'C43';
				break;
			case 'input-1':
				command = 'C05';
				break;
			case 'input-2':
				command = 'C06';
				break;
			case 'input-3':
				command = 'C07';
				break;
			case 'input-4':
				command = 'C08';
				break;
			case 'keystone-down':
				command = 'C8F';
				break;
			case 'keystone-left':
				command = 'C91';
				break;
			case 'keystone-right':
				command = 'C90';
				break;
			case 'keystone-up':
				command = 'C8E';
				break;
			case 'lens-shift-down':
				command = 'C5E';
				break;
			case 'lens-shift-left':
				command = 'C5F';
				break;
			case 'lens-shift-right':
				command = 'C60';
				break;
			case 'lens-shift-up':
				command = 'C5D';
				break;
			case 'lens-shift-coarse-down':
				command = 'C5E%0DC5E';
				break;
			case 'lens-shift-coarse-left':
				command = 'C5F%0DC5F';
				break;
			case 'lens-shift-coarse-right':
				command = 'C60%0DC60';
				break;
			case 'lens-shift-coarse-up':
				command = 'C5D%0DC5D';
				break;
			case 'menu-down':
				command = 'C3D';
				break;
			case 'menu-enter':
				command = 'C3F';
				break;
			case 'menu-left':
				command = 'C3B';
				break;
			case 'menu-off':
				command = 'C1D';
				break;
			case 'menu-on':
				command = 'C1C';
				break;
			case 'menu-right':
				command = 'C3A';
				break;
			case 'menu-up':
				command = 'C3C';
				break;
			case 'power-off':
				command = 'C01';
				break;
			case 'power-on':
				command = 'C00';
				break;
			case 'zoom-in':
				command = 'C46';
				break;
			case 'zoom-out':
				command = 'C47';
				break;
		}
		
		// Add in Sanyo's funny little end byte:
		command = command + '%0D';
	} // end if(); for device
	
	if (deviceType == 'panasonicPJLink')
	{
		var urlStart = urlStart + 'RS|';

		/*
			This switch block takes the action you want
			to execute, and turns it into the
			the corresponding serial command.
		*/
		switch (action)
		{
			case 'auto-adjust':
				command = 'OAS';
				break;
			case 'blank-off':
				command = 'OSH:0';
				break;
			case 'blank-on':
				command = 'OSH:1';
				break;
			case 'focus-in-coarse':
				command = 'VXX:LNSI4=+00200';
				break;
			case 'focus-in-fine':
				command = 'VXX:LNSI4=+00000';
				break;
			case 'focus-out-coarse':
				command = 'VXX:LNSI4=+00201';
				break;
			case 'focus-out-fine':
				command = 'VXX:LNSI4=+00001';
				break;
			case 'freeze-off':
				command = 'OFZ:0';
				break;
			case 'freeze-on':
				command = 'OFZ:1';
				break;
			case 'image1-recall':
				command = 'VPM:IM1';
				break;
			case 'image2-recall':
				command = 'VPM:IM2';
				break;
			case 'image3-recall':
				command = 'VPM:IM3';
				break;
			case 'image4-recall':
				command = 'VPM:IM4';
				break;
			case 'input-BNC':
				command = 'IIS:RG2';
				break;
			case 'input-DVI':
				command = 'IIS:DVI';
				break;
			case 'input-HDMI':
				command = 'IIS:HD1';
				break;
			case 'input-SVid':
				command = 'IIS:SVD';
				break;
			case 'input-VGA':
				command = 'IIS:RG1';
				break;
			case 'lamp-eco':
				command = 'OLP:0';
				break;
			case 'lamp-normal':
				command = 'OLP:3';
				break;
			case 'lens-shift-down':
				command = 'VXX%3ALNSI3=%2B00001';
				break;
			case 'lens-shift-left':
				command = 'VXX%3ALNSI2=%2B00001';
				break;
			case 'lens-shift-right':
				command = 'VXX%3ALNSI2=%2B00000';
				break;
			case 'lens-shift-up':
				command = 'VXX%3ALNSI3=%2B00000';
				break;
			case 'menu-down':
				command = 'OCD';
				break;
			case 'menu-enter':
				command = 'OEN';
				break;
			case 'menu-left':
				command = 'OCL';
				break;
			case 'menu-right':
				command = 'OCR';
				break;
			case 'menu-toggle':
				command = 'OMN';
				break;
			case 'menu-up':
				command = 'OCU';
				break;
			case 'power-off':
				command = 'POF';
				break;
			case 'power-on':
				command = 'PON';
				break;
			case 'zoom-in-coarse':
				command = 'VXX:LNSI5=+00200';
				break;
			case 'zoom-in-fine':
				command = 'VXX:LNSI5=+00000';
				break;
			case 'zoom-out-coarse':
				command = 'VXX:LNSI5=+00201';
				break;
			case 'zoom-out-fine':
				command = 'VXX:LNSI5=+00001';
				break;
		} // end switch();
		// Add in Panasonic's funny little
		// start and end bytes:
		command = '%02' + command + '%03';
	} // end if(); for device

	var urlFull = urlStart + command
	// un-comment next line, when you need to debug:
	// alert (urlFull);
	httpGet (urlFull);
}






/*
	Code examples:
	
	
	Bridge main house left (Panasonic) lens shift up:
	extronBox ( bridge, mainLeft, panasonicPJLink, lens-shift-up );
	
	Chapel center (Sanyo) zoom out:
	extronBox ( chapel, mainCenter, sanyoPLC, zoom-out );
	
*/



// EOF
