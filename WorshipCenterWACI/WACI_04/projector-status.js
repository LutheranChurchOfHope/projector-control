
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
