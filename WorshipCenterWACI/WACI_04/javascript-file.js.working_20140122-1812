
/* generic functions */

var WACIip = "10.40.97.229:33084";
var RPCurl = "http://"+WACIip+"/RPC";

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

function getResponse()
	{
		if (xmlhttp.readyState == 4)
			{
				//alert(xmlhttp.response); // <-- sample to show return data, parse 'xmlhttp.response' to get necessary data
			}
	}

function rpc(method, params)
	{
		// method: any valid WACI RPC method
		// params: parameters, in URL encoded name value pairs (e.g., 'param1=a&param2=b&param3=c')
		xmlhttp.open("POST",RPCurl,false);
		var theString = "method=" + method + "&" + params;
		xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
		//xmlhttp.onreadystatechange = getResponse;
		xmlhttp.send(theString);
		return xmlhttp.response;
	}

/* specific functions */

function modifyString(string)
	{
		var str=string; 
		var n=str.replace("%02","");
		var str=n;
		var n=str.replace("%03","");
		var str=n;
		// removes "%02" and "%03"
		
		var n=str.replace('status=1&response1=','');
		var str=n;
		// removes other unnecessary stuff
		
		
		var n=str.replace(/\+/g,' ');
		var str=n;
		// changes plusses to spaces
		
		return str;
		// returns the modified string
	}

function populateFields()
	{
		proj1lamp();
		proj1stat();
		proj1temp();
		proj2lamp();
		proj2stat();
		proj2temp();
		proj3lamp();
		proj3stat();
		proj3temp();
		proj4lamp();
		proj4stat();
		proj4temp();
		proj5lamp();
		proj5stat();
		proj5temp();
		proj6lamp();
		proj6stat();
		proj6temp();
		proj7lamp();
		proj7stat();
		proj7temp();
	}


/*
function PARAM_LAMP_NAME()
	{
		var origString=rpc('GetVariableValueByName', 'param1=PARAM_LAMP_NAME');
		var modString=modifyString(origString);
		document.getElementById("PARAM_LAMP_NAME").innerHTML=modString;
	}

function PARAM_STAT_NAME()
	{
		var origString=rpc('GetVariableValueByName', 'param1=PARAM_STAT_NAME');
		var modString=modifyString(origString);
		var n=modString;

		if (n==0)
			{
				modString="Off";
			}
		else
			{
				if (n==1)
					{
						modString="On";
					}
				else
					{
						modString="Error";
					}
			}
		document.getElementById("PARAM_STAT_NAME").innerHTML=modString;
	}
*/


// Projector 1
function proj1lamp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj1lamp');
		var modString=modifyString(origString);
		document.getElementById("proj1lamp").innerHTML=modString;
	}

function proj1stat()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj1stat');
		var modString=modifyString(origString);
		var n=modString;

		if (n==80)
			{
				modString="Off";
			}
		else
			{
				if (n==00)
					{
						modString="On";
					}
				else
					{
						modString="Error";
					}
			}
		document.getElementById("proj1stat").innerHTML=modString;
	}

function proj1temp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj1temp');
		var modString=modifyString(origString);
		var n=modString;
		var modString=decodeURIComponent(n);
		var n=modString;

		var m=n.split(" ");
		var tempA=m[1] * 9/5 + 32 ;
		var tempB=m[3] * 9/5 + 32 ;
		
		var tempA=Math.round(tempA)+" &deg;F&nbsp;&nbsp;&nbsp;";
		var tempB=Math.round(tempB)+" &deg;F&nbsp;&nbsp;&nbsp;";
		
		
		var n=tempA+" "+tempB;
		var modString=n;
		
		document.getElementById("proj1temp").innerHTML=modString;
	}
// end Proj1

// Projector 2
function proj2lamp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj2lamp');
		var modString=modifyString(origString);
		document.getElementById("proj2lamp").innerHTML=modString;
	}

function proj2stat()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj2stat');
		var modString=modifyString(origString);
		var n=modString;

		if (n==80)
			{
				modString="Off";
			}
		else
			{
				if (n==00)
					{
						modString="On";
					}
				else
					{
						modString="Error";
					}
			}
		document.getElementById("proj2stat").innerHTML=modString;
	}

function proj2temp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj2temp');
		var modString=modifyString(origString);
		var n=modString;
		var modString=decodeURIComponent(n);
		var n=modString;

		var m=n.split(" ");
		var tempA=m[1] * 9/5 + 32 ;
		var tempB=m[3] * 9/5 + 32 ;
		
		var tempA=Math.round(tempA)+" &deg;F&nbsp;&nbsp;&nbsp;";
		var tempB=Math.round(tempB)+" &deg;F&nbsp;&nbsp;&nbsp;";
		
		
		var n=tempA+" "+tempB;
		var modString=n;
		
		document.getElementById("proj2temp").innerHTML=modString;
	}
// end Proj2

// Projector 3
function proj3lamp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj3lamp');
		var modString=modifyString(origString);
		document.getElementById("proj3lamp").innerHTML=modString;
	}

function proj3stat()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj3stat');
		var modString=modifyString(origString);
		var n=modString;

		if (n==80)
			{
				modString="Off";
			}
		else
			{
				if (n==00)
					{
						modString="On";
					}
				else
					{
						modString="Error";
					}
			}
		document.getElementById("proj3stat").innerHTML=modString;
	}

function proj3temp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj3temp');
		var modString=modifyString(origString);
		var n=modString;
		var modString=decodeURIComponent(n);
		var n=modString;

		var m=n.split(" ");
		var tempA=m[1] * 9/5 + 32 ;
		var tempB=m[3] * 9/5 + 32 ;
		var tempC=m[5] * 9/5 + 32 ;
		
		var tempA=Math.round(tempA)+" &deg;F&nbsp;&nbsp;&nbsp;";
		var tempB=Math.round(tempB)+" &deg;F&nbsp;&nbsp;&nbsp;";
		var tempC=Math.round(tempC)+" &deg;F&nbsp;&nbsp;&nbsp;";
		
		
		var n=tempA+" "+tempB+" "+tempC;
		var modString=n;
		
		document.getElementById("proj3temp").innerHTML=modString;
	}
// end Proj3

// Projector 4
function proj4lamp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj4lamp');
		var modString=modifyString(origString);
		document.getElementById("proj4lamp").innerHTML=modString;
	}

function proj4stat()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj4stat');
		var modString=modifyString(origString);
		var n=modString;

		if (n==80)
			{
				modString="Off";
			}
		else
			{
				if (n==00)
					{
						modString="On";
					}
				else
					{
						modString="Error";
					}
			}
		document.getElementById("proj4stat").innerHTML=modString;
	}

function proj4temp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj4temp');
		var modString=modifyString(origString);
		var n=modString;
		var modString=decodeURIComponent(n);
		var n=modString;

		var m=n.split(" ");
		var tempA=m[1] * 9/5 + 32 ;
		var tempB=m[3] * 9/5 + 32 ;
		var tempC=m[5] * 9/5 + 32 ;
		
		var tempA=Math.round(tempA)+" &deg;F&nbsp;&nbsp;&nbsp;";
		var tempB=Math.round(tempB)+" &deg;F&nbsp;&nbsp;&nbsp;";
		var tempC=Math.round(tempC)+" &deg;F&nbsp;&nbsp;&nbsp;";
		
		
		var n=tempA+" "+tempB+" "+tempC;
		var modString=n;
		
		document.getElementById("proj4temp").innerHTML=modString;
	}
// end Proj4

// Projector 5
function proj5lamp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj5lamp');
		var modString=modifyString(origString);
		document.getElementById("proj5lamp").innerHTML=modString;
	}

function proj5stat()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj5stat');
		var modString=modifyString(origString);
		var n=modString;

		if (n==0)
			{
				modString="Off";
			}
		else
			{
				if (n==1)
					{
						modString="On";
					}
				else
					{
						modString="Error";
					}
			}
		document.getElementById("proj5stat").innerHTML=modString;
	}

function proj5temp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj5temp');
		var modString=modifyString(origString);
		var n=modString;
		var modString=decodeURIComponent(n);
		var n=modString;
		var modString=n.split("/");

		var n=modString[1];
		var modString=n + " &deg;F";
		
		document.getElementById("proj5temp").innerHTML=modString;
	}
// end Proj5

// Projector 6
function proj6lamp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj6lamp');
		var modString=modifyString(origString);
		document.getElementById("proj6lamp").innerHTML=modString;
	}

function proj6stat()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj6stat');
		var modString=modifyString(origString);
		var n=modString;

		if (n==0)
			{
				modString="Off";
			}
		else
			{
				if (n==1)
					{
						modString="On";
					}
				else
					{
						modString="Error";
					}
			}
		document.getElementById("proj6stat").innerHTML=modString;
	}

function proj6temp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj6temp');
		var modString=modifyString(origString);
		var n=modString;
		var modString=decodeURIComponent(n);
		var n=modString;
		var modString=n.split("/");

		var n=modString[1];
		var modString=n + " &deg;F";
		
		document.getElementById("proj6temp").innerHTML=modString;
	}
// end Proj6

// Projector 7
function proj7lamp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj7lamp');
		var modString=modifyString(origString);
		document.getElementById("proj7lamp").innerHTML=modString;
	}

function proj7stat()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj7stat');
		var modString=modifyString(origString);
		var n=modString;

		if (n==80)
			{
				modString="Off";
			}
		else
			{
				if (n==00)
					{
						modString="On";
					}
				else
					{
						modString="Error";
					}
			}
		document.getElementById("proj7stat").innerHTML=modString;
	}

function proj7temp()
	{
		var origString=rpc('GetVariableValueByName', 'param1=proj7temp');
		var modString=modifyString(origString);
		var n=modString;
		var modString=decodeURIComponent(n);
		var n=modString;

		var m=n.split(" ");
		var tempA=m[1] * 9/5 + 32 ;
		var tempB=m[3] * 9/5 + 32 ;
		var tempC=m[5] * 9/5 + 32 ;
		
		var tempA=Math.round(tempA)+" &deg;F&nbsp;&nbsp;&nbsp;";
		var tempB=Math.round(tempB)+" &deg;F&nbsp;&nbsp;&nbsp;";
		var tempC=Math.round(tempC)+" &deg;F&nbsp;&nbsp;&nbsp;";
		
		
		var n=tempA+" "+tempB+" "+tempC;
		var modString=n;
		
		document.getElementById("proj7temp").innerHTML=modString;
	}
// end Proj7


function goBack()
	{
		window.history.back();
	}

//Set your WACI IP or Hostname Here *****************************
/*
var WACI1ip = "10.40.97.213";
var WACI2ip = "10.40.97.214";
var WACI3ip = "10.40.97.215";
var WACI4ip = "10.40.97.216";
*/


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
// end WACI4



/* start custom stuff */















function foldbackAutoPC()
	{
		javascript:TriggerWACI1EventByName('proj3and4autopc', '0', '0', '0');
	}


function plasmaFBinputA()
	{
		javascript:TriggerWACI2EventByName('plasma9input6', '0', '0', '0');
	}
function plasmaFBinputB()
	{
		javascript:TriggerWACI2EventByName('plasma9input7', '0', '0', '0');
	}
		

function plasmaRossHDMI()
	{
		javascript:TriggerWACI3EventByName('Plasma7HDMI', '0', '0', '0');
	}
function plasmaRossVGA()
	{
		javascript:TriggerWACI3EventByName('Plasma7VGA', '0', '0', '0');
	}
		
/* start Plasma ON */

// VC plasma displays
function plasmaVC1On()
	{
		javascript:TriggerWACI2EventByName('plasma1on', '0', '0', '0');
	}

function plasmaVC2On()
	{
		javascript:TriggerWACI2EventByName('plasma2on', '0', '0', '0');
	}

function plasmaVC3On()
	{
		javascript:TriggerWACI3EventByName('plasma3on', '0', '0', '0');
	}

function plasmaVC4On()
	{
		javascript:TriggerWACI3EventByName('plasma4on', '0', '0', '0');
	}

function plasmaVC5On() // Plasma VC 5 is "plasma6".
	{
		javascript:TriggerWACI3EventByName('plasma6on', '0', '0', '0');
	}

function plasmaVC6On() // Plasma VC 6 is "plasma7".
	{
		javascript:TriggerWACI3EventByName('plasma7on', '0', '0', '0');
	}

// other plasma displays
function plasmaGSOn() // Gathering Space plasmas
	{
		javascript:TriggerWACI4EventByName('plasma5on', '0', '0', '0');
	}

function plasmaENTRYOn() // Entry displays
	{
		javascript:TriggerWACI4EventByName('plasma8on', '0', '0', '0');
	}

function plasmaFBOn() // Plasma 9 is the Football plasma
	{
		javascript:TriggerWACI3EventByName('plasma9on', '0', '0', '0');
	}

function plasma10On()
	{
		javascript:TriggerWACI2EventByName('plasma10on', '0', '0', '0');
	}

function plasmaCAFEOn()
	{
		javascript:TriggerWACI4EventByName('plasma20on', '0', '0', '0');
	}

function plasmaPRAYEROn()
	{
		javascript:TriggerWACI4EventByName('plasma12on', '0', '0', '0');
	}


/* end Plasma ON */


/* start Plasma OFF */

// VC plasma displays
function plasmaVC1Off()
	{
		javascript:TriggerWACI2EventByName('plasma1off', '0', '0', '0');
	}

function plasmaVC2Off()
	{
		javascript:TriggerWACI2EventByName('plasma2off', '0', '0', '0');
	}

function plasmaVC3Off()
	{
		javascript:TriggerWACI3EventByName('plasma3off', '0', '0', '0');
	}

function plasmaVC4Off()
	{
		javascript:TriggerWACI3EventByName('plasma4off', '0', '0', '0');
	}

function plasmaVC5Off() // Plasma VC 5 is "plasma6".
	{
		javascript:TriggerWACI3EventByName('plasma6off', '0', '0', '0');
	}

function plasmaVC6Off() // Plasma VC 6 is "plasma7".
	{
		javascript:TriggerWACI3EventByName('plasma7off', '0', '0', '0');
	}

// other plasma displays
function plasmaGSOff() // Gathering Space plasmas
	{
		javascript:TriggerWACI4EventByName('plasma5off', '0', '0', '0');
	}

function plasmaENTRYOff() // Entry displays
	{
		javascript:TriggerWACI4EventByName('plasma8off', '0', '0', '0');
	}

function plasmaFBOff() // Plasma 9 is the Football plasma
	{
		javascript:TriggerWACI3EventByName('plasma9off', '0', '0', '0');
	}

function plasma10Off()
	{
		javascript:TriggerWACI2EventByName('plasma10off', '0', '0', '0');
	}

function plasmaCAFEOff()
	{
		javascript:TriggerWACI4EventByName('plasma20off', '0', '0', '0');
	}

function plasmaPRAYEROff()
	{
		javascript:TriggerWACI4EventByName('plasma12off', '0', '0', '0');
	}

/* end Plasma OFF */



// Projectors on/off

/* start Projector ON */

function projHLon()
	{
		projector1On();
	}
function projHRon()
	{
		projector2On();
	}
function projFBHLon()
	{
		projector3On();
	}
function projFBHRon()
	{
		projector4On();
	}
function projCHLon()
	{
		projector5On();
	}
function projCHCon()
	{
		projector7On();
	}
function projCHRon()
	{
		projector6On();
	}


function projector1On()
	{
		javascript:TriggerWACI1EventByName('proj1on', '0', '0', '0');
	}

function projector2On()
	{
		javascript:TriggerWACI1EventByName('proj2on', '0', '0', '0');
	}

function projector3On()
	{
		javascript:TriggerWACI1EventByName('proj3on', '0', '0', '0');
	}

function projector4On()
	{
		javascript:TriggerWACI1EventByName('proj4on', '0', '0', '0');
	}

function projector5On()
	{
		javascript:TriggerWACI3EventByName('proj5on', '0', '0', '0');
	}

function projector6On()
	{
		javascript:TriggerWACI4EventByName('proj6on', '0', '0', '0');
	}

function projector7On()
	{
		javascript:TriggerWACI4EventByName('proj7on', '0', '0', '0');
	}

/* end Projector ON */


/* start Projector OFF */

function projHLoff()
	{
		projector1Off();
	}
function projHRoff()
	{
		projector2Off();
	}
function projFBHLoff()
	{
		projector3Off();
	}
function projFBHRoff()
	{
		projector4Off();
	}
function projCHLoff()
	{
		projector5Off();
	}
function projCHCoff()
	{
		projector7Off();
	}
function projCHRoff()
	{
		projector6Off();
	}


function projector1Off()
	{
		javascript:TriggerWACI1EventByName('proj1off', '0', '0', '0');
	}

function projector2Off()
	{
		javascript:TriggerWACI1EventByName('proj2off', '0', '0', '0');
	}

function projector3Off()
	{
		javascript:TriggerWACI1EventByName('proj3off', '0', '0', '0');
	}

function projector4Off()
	{
		javascript:TriggerWACI1EventByName('proj4off', '0', '0', '0');
	}

function projector5Off()
	{
		javascript:TriggerWACI3EventByName('proj5off', '0', '0', '0');
	}

function projector6Off()
	{
		javascript:TriggerWACI4EventByName('proj6off', '0', '0', '0');
	}

function projector7Off()
	{
		javascript:TriggerWACI4EventByName('proj7off', '0', '0', '0');
	}


/* end Projector OFF */


function masterWCOn()
	{
		window.setTimeout("projector1On();",1000);
		window.setTimeout("projector2On();",1000);
		window.setTimeout("projector3On();",1000);
		window.setTimeout("projector4On();",1000);
		window.setTimeout("projector5On();",1000);
		window.setTimeout("projector6On();",1000);
		window.setTimeout("projector7On();",1000);
		window.setTimeout("plasmaVC1On();",1000);
		window.setTimeout("plasmaVC2On();",1000);
		window.setTimeout("plasmaVC3On();",1000);
		window.setTimeout("plasmaVC4On();",1000);
		window.setTimeout("plasmaVC5On();",1000);
		window.setTimeout("plasmaVC6On();",1000);
		window.setTimeout("plasmaFBOn();",1000);
		window.setTimeout("plasmaPRAYEROn();",1000);
	}
function masterWCOff()
	{
		window.setTimeout("projector1Off();",1000);
		window.setTimeout("projector2Off();",1000);
		window.setTimeout("projector3Off();",1000);
		window.setTimeout("projector4Off();",1000);
		window.setTimeout("projector5Off();",1000);
		window.setTimeout("projector6Off();",1000);
		window.setTimeout("projector7Off();",1000);
		window.setTimeout("plasmaVC1Off();",1000);
		window.setTimeout("plasmaVC2Off();",1000);
		window.setTimeout("plasmaVC3Off();",1000);
		window.setTimeout("plasmaVC4Off();",1000);
		window.setTimeout("plasmaVC5Off();",1000);
		window.setTimeout("plasmaVC6Off();",1000);
		window.setTimeout("plasmaFBOff();",1000);
		window.setTimeout("plasmaPRAYEROff();",1000);
	}



