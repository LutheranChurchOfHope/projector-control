/* generic functions */

var xmlhttp = null;
try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch (e)
		{
			xmlhttp = false;
		}

if (!xmlhttp && typeof XMLHttpRequest!='undefined')
	{
		xmlhttp = new XMLHttpRequest();
	}


var WACI1ip = "10.40.97.229:33081";
var WACI2ip = "10.40.97.229:33082";
var WACI3ip = "10.40.97.229:33083";
var WACI4ip = "10.40.97.229:33084";

///////////////////////////////////////////////
//
// To Send Serial Commands make a link to: "javascript:serialSend(port, command, timeout)"
// To Trigger an Event make a link to: "javascript:TriggerEventByName('eventname', '0', '0', '0')"
//
///////////////////////////////////////////////

var RPCurlWACI1 = "http://"+WACI1ip+"/RPC";
var RPCurlWACI2 = "http://"+WACI2ip+"/RPC";
var RPCurlWACI3 = "http://"+WACI3ip+"/RPC";
var RPCurlWACI4 = "http://"+WACI4ip+"/RPC";





/* start WACI1 */
function serialWACI1Send(param1, param2, param3)
{

	// Param 1: Port
	// Param 2: Serial String
	// Param 3: Timeout
			
	xmlhttp.open("POST",RPCurlWACI1,false);
	var theString = "method=Serial_Send&Param1=" + param1 + "&Param2=" + param2 + "&Param3=" + param3;
	xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(theString);
}
	
function TriggerWACI1EventByName(param1, param2, param3, param4)
{
	
	// Param 1: Name of event to trigger
	
	xmlhttp.open("POST",RPCurlWACI1,false);
	var theString = "method=TriggerEventByName&Param1=" + param1 + "&Param2=" + param2 + "&Param3=" + "&Param4=" + param4;
	xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(theString);
}

function waci1(eventName)
{
	TriggerWACI1EventByName(eventName, '0', '0', '0');
}

/* end WACI1 */

/* start WACI2 */
function serialWACI2Send(param1, param2, param3)
{

	// Param 1: Port
	// Param 2: Serial String
	// Param 3: Timeout

	xmlhttp.open("POST",RPCurlWACI2,false);
	var theString = "method=Serial_Send&Param1=" + param1 + "&Param2=" + param2 + "&Param3=" + param3;
	xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(theString);
}

function TriggerWACI2EventByName(param1, param2, param3, param4)
{

	// Param 1: Name of event to trigger
	
	xmlhttp.open("POST",RPCurlWACI2,false);
	var theString = "method=TriggerEventByName&Param1=" + param1 + "&Param2=" + param2 + "&Param3=" + "&Param4=" + param4;
	xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(theString);
}

function waci2(eventName)
{
	TriggerWACI2EventByName(eventName, '0', '0', '0');
}

/* end WACI2 */
	
/* start WACI3 */
function serialWACI3Send(param1, param2, param3)
{

	// Param 1: Port
	// Param 2: Serial String
	// Param 3: Timeout
	
	xmlhttp.open("POST",RPCurlWACI3,false);
	var theString = "method=Serial_Send&Param1=" + param1 + "&Param2=" + param2 + "&Param3=" + param3;
	xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(theString);
}
	
function TriggerWACI3EventByName(param1, param2, param3, param4)
{

	// Param 1: Name of event to trigger

	xmlhttp.open("POST",RPCurlWACI3,false);
	var theString = "method=TriggerEventByName&Param1=" + param1 + "&Param2=" + param2 + "&Param3=" + "&Param4=" + param4;
	xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(theString);
}

function waci3(eventName)
{
	TriggerWACI3EventByName(eventName, '0', '0', '0');
}

/* end WACI3 */

/* start WACI4 */
function serialWACI4Send(param1, param2, param3)
{

	// Param 1: Port
	// Param 2: Serial String
	// Param 3: Timeout

	xmlhttp.open("POST",RPCurlWACI4,false);
	var theString = "method=Serial_Send&Param1=" + param1 + "&Param2=" + param2 + "&Param3=" + param3;
	xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(theString);
}

function TriggerWACI4EventByName(param1, param2, param3, param4)
{

	// Param 1: Name of event to trigger

	xmlhttp.open("POST",RPCurlWACI4,false);
	var theString = "method=TriggerEventByName&Param1=" + param1 + "&Param2=" + param2 + "&Param3=" + "&Param4=" + param4;
	xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(theString);
}

function waci4(eventName)
{
	TriggerWACI4EventByName(eventName, '0', '0', '0');
}

// end WACI4


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
	- setup the variables for all devices in the room. Since this script only supports the Worsihp Center,
		it should always simply initialize each device with its respective "self string", so to speak.

- Find out what device type we'll be controlling. Got it? Good.
	- Now that we know that, let's find the command in our switch/case list that matches what the user is
		trying to do. After we find a match, we set the command variable to the serial data we need to send
		in order to execute that command on the desired device.

Done!


*/




// setup other same-as-name variables

var nope = 'nope';
var wc = 'wc';

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
var zoom_in_coarse = 'zoom-in-coarse';
var zoom_in_fine = 'zoom-in-fine';
var zoom_out = 'zoom-out';
var zoom_out_coarse = 'zoom-out-coarse';
var zoom_out_fine = 'zoom-out-fine';






/*


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
	zoom-in-coarse
	zoom-in-fine
	zoom-out
	zoom-out-coarse
	zoom-out-fine


Note that strings use dashes, whereas variables use underscores.
So, you can use 'zoom-in' (with quotes), or "zoom_in" (without quotes).



The following devices are supported by deviceType:

	NOT IN USE FOR WACI DEVICES
	nope


The following devices are supported for "port":

bookstoreTV
centerBeam1
centerCenter
centerLeft
centerRight
entryPlasmas
foldbackLeft
foldbackRight
footballTV
gsPlasmas
mainLeft
mainRight
prayerTVs
vcPlasma01
vcPlasma02
vcPlasma03
vcPlasma04
vcPlasma05
vcPlasma06








*/

var action;
var address;
var deviceType;
var port;

/*


Notes for WACI:

address = 'wc'
port = device name (centerCenter, mainLeft, etc)
deviceType = 'nope'
action = action (lens-shift-right, keystone-right, etc)


invocation should look something like:
waciBox(wc, <port>, nope, <action>)

*/
function waciBox (address, port, deviceType, action)
{

	populateVars (address);

	var command;
	var waciNum;
	var projNum; // or Plasma number! Whichever corresponds to the device. :-)
	var devType; // different from deviceType! This is just to help with string concatenation.


	if (deviceType == 'nope')
	{
		/*
			We can use string concatenation, since
			Will Pile had the foresight to standardize
			the ways in which Events are Named.
			
			Thanks, Will!
		*/

		switch (action)
			{
			case 'auto-adjust':
				command = 'AUTOADJUST';
				break;
			case 'blank-off':
				command = 'blankoff';
				break;
			case 'blank-on':
				command = 'blankon';
				break;
			case 'focus-in':
				command = 'focus_in';
				break;
			case 'focus-out':
				command = 'focus_out';
				break;
			case 'freeze-off':
				command = 'freezeoff';
				break;
			case 'freeze-on':
				command = 'freezeon';
				break;
			case 'input-1':
				command = 'input_1';
				break;
			case 'input-2':
				command = 'input_2';
				break;
			case 'input-3':
				command = 'input_3';
				break;
			case 'input-4':
				command = 'input_4';
				break;
/*
			case 'keystone-down':
				command = 'KEYSTONEDOWN';
				break;
			case 'keystone-left':
				command = 'KEYSTONELEFT';
				break;
			case 'keystone-right':
				command = 'KEYSTONERIGHT';
				break;
			case 'keystone-up':
				command = 'KEYSTONERIGHT';
				break;
*/
			case 'lens-shift-down':
				command = 'lensshift_down';
				break;
			case 'lens-shift-left':
				command = 'lensshift_left';
				break;
			case 'lens-shift-right':
				command = 'lensshift_right';
				break;
			case 'lens-shift-up':
				command = 'lensshift_up';
				break;
/*
			case 'lens-shift-coarse-down':
				command = 'LENSSHIFTCOARSEDOWN';
				break;
			case 'lens-shift-coarse-left':
				command = 'LENSSHIFTCOARSELEFT';
				break;
			case 'lens-shift-coarse-right':
				command = 'LENSSHIFTCOARSERIGHT';
				break;
			case 'lens-shift-coarse-up':
				command = 'LENSSHIFTCOARSEUP';
				break;
*/
			case 'menu-down':
				command = 'point_down';
				break;
			case 'menu-enter':
				command = 'enter';
				break;
			case 'menu-left':
				command = 'point_left';
				break;
			case 'menu-off':
				command = 'menuoff';
				break;
			case 'menu-on':
				command = 'menuon';
				break;
			case 'menu-right':
				command = 'point_right';
				break;
			case 'menu-up':
				command = 'point_up';
				break;
			case 'power-off':
				command = 'off';
				break;
			case 'power-on':
				command = 'on';
				break;
			case 'zoom-in':
				command = 'zoom_in';
				break;
			case 'zoom-out':
				command = 'zoom_out';
				break;
		}
		
		
		switch (port)
		{
			case 'bookstoreTV':
				projNum = '20';
				waciNum = '4';
				devType = 'Plasma';
				break;
			case 'centerBeam1':
				projNum = '8';
				waciNum = '2';
				devType = 'proj';
				break;
			case 'centerCenter':
				projNum = '7';
				waciNum = '4';
				devType = 'proj';
				break;
			case 'centerLeft':
				projNum = '5';
				waciNum = '3'
				devType = 'proj';
				break;
			case 'centerRight':
				projNum = '6';
				waciNum = '4';
				devType = 'proj';
				break;
			case 'entryPlasmas':
				projNum = '8';
				waciNum = '4';
				devType = 'Plasma';
				break;
			case 'foldbackLeft':
				projNum = '3';
				waciNum = '1'
				devType = 'proj';
				break;
			case 'foldbackRight':
				projNum = '4';
				waciNum = '1';
				devType = 'proj';
				break;
			case 'footballTV':
				projNum = '9';
				waciNum = '3';
				devType = 'Plasma';
				break;
			case 'gsPlasmas':
				projNum = '5';
				waciNum = '4';
				devType = 'Plasma';
				break;
			case 'mainLeft':
				projNum = '1';
				waciNum = '1'
				devType = 'proj';
				break;
			case 'mainRight':
				projNum = '2';
				waciNum = '1';
				devType = 'proj';
				break;
			case 'prayerTVs':
				projNum = '12';
				waciNum = '4';
				devType = 'Plasma';
				break;
			case 'vcPlasma01':
				projNum = '1';
				waciNum = '2';
				devType = 'Plasma';
				break;
			case 'vcPlasma02':
				projNum = '2';
				waciNum = '2';
				devType = 'Plasma';
				break;
			case 'vcPlasma03':
				projNum = '3';
				waciNum = '2';
				devType = 'Plasma';
				break;
			case 'vcPlasma04':
				projNum = '4';
				waciNum = '3';
				devType = 'Plasma';
				break;
			case 'vcPlasma05':
				projNum = '6';
				waciNum = '3';
				devType = 'Plasma';
				break;
			case 'vcPlasma06':
				projNum = '7';
				waciNum = '3';
				devType = 'Plasma';
				break;
		}

		
		var fullCommand = devType + projNum + command;

		if (waciNum == '1')
		{
			waci1(fullCommand);
		}
		if (waciNum == '2')
		{
			waci2(fullCommand);
		}
		if (waciNum == '3')
		{
			waci3(fullCommand);
		}
		if (waciNum == '4')
		{
			waci4(fullCommand);
		}

	} // end if(); for device
	
}






/*
	Code examples:
	
	
	Worship Center main house left (Panasonic) lens shift up:
	waciBox ( wc, mainLeft, nope, lens-shift-up );
	
	Worship Center center-center zoom out:
	waciBox ( wc, centerCenter, nope, zoom-out );
	
*/



// EOF