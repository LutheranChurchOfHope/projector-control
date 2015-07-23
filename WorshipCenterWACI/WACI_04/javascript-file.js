
function foldbackAutoPC()
	{
		javascript:TriggerWACI1EventByName('proj3and4autopc', '0', '0', '0');
	}


function plasmaFBinputA()
	{
		javascript:TriggerWACI3EventByName('plasma9input6', '0', '0', '0');
	}
function plasmaFBinputB()
	{
		javascript:TriggerWACI3EventByName('plasma9input7', '0', '0', '0');
	}
		

function plasmaRossHDMI()
	{
		javascript:TriggerWACI3EventByName('Plasma7HDMI', '0', '0', '0');
	}
function plasmaRossVGA()
	{
		javascript:TriggerWACI3EventByName('Plasma7VGA', '0', '0', '0');
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
	function proj8on()
	{
		projector8On();
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
	
	function projector8On()
	{
		javascript:TriggerWACI2EventByName('proj8on', '0', '0', '0');
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
	
function proj8off()
	{
		projector8Off();
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
	
	function projector8Off()
	{
		javascript:TriggerWACI2EventByName('proj8off', '0', '0', '0');
	}


/* end Projector OFF */




function vcPlasmasON()
	{
		window.setTimeout("plasmaVC1On();",1000);
		window.setTimeout("plasmaVC2On();",1000);
		window.setTimeout("plasmaVC3On();",1000);
		window.setTimeout("plasmaVC4On();",1000);
		window.setTimeout("plasmaVC5On();",1000);
		window.setTimeout("plasmaVC6On();",1000);
	}

function vcPlasmasOFF()
	{
		window.setTimeout("plasmaVC1Off();",1000);
		window.setTimeout("plasmaVC2Off();",1000);
		window.setTimeout("plasmaVC3Off();",1000);
		window.setTimeout("plasmaVC4Off();",1000);
		window.setTimeout("plasmaVC5Off();",1000);
		window.setTimeout("plasmaVC6Off();",1000);
	}


function allPlasmasON()
	{
		window.setTimeout("vcPlasmasON();",1000);
		window.setTimeout("plasmaFBOn();",1000);
		window.setTimeout("plasmaPRAYEROn();",1000);  
		window.setTimeout("plasmaGSOn();",1000);  
		window.setTimeout("plasmaENTRYOn();",1000);  
	}

function allPlasmasOFF()
	{
		window.setTimeout("vcPlasmasOFF();",1000);
		window.setTimeout("plasmaFBOff();",1000);
		window.setTimeout("plasmaPRAYEROff();",1000);  
		window.setTimeout("plasmaGSOff();",1000);  
		window.setTimeout("plasmaENTRYOff();",1000);  
	}


	function projectorsON()
	{
		window.setTimeout("projector1On();",1000);
		window.setTimeout("projector2On();",1000);
		window.setTimeout("projector3On();",1000);
		window.setTimeout("projector4On();",1000);
		window.setTimeout("projector5On();",1000);
		window.setTimeout("projector6On();",1000);
		window.setTimeout("projector7On();",1000);	
		window.setTimeout("projector8On();",1000);	
	}

	function projectorsOFF()
	{
		window.setTimeout("projector1Off();",1000);
		window.setTimeout("projector2Off();",1000);
		window.setTimeout("projector3Off();",1000);
		window.setTimeout("projector4Off();",1000);
		window.setTimeout("projector5Off();",1000);
		window.setTimeout("projector6Off();",1000);
		window.setTimeout("projector7Off();",1000);	
		window.setTimeout("projector8Off();",1000);	
	}


function masterWCOn()
	{
		var d = new Date().getDay();
		if (d == "0" || d == "6") 
			{

				window.setTimeout("projector1On();",1000);
				window.setTimeout("projector2On();",1000);
				window.setTimeout("projector3On();",1000);
				window.setTimeout("projector4On();",1000);
				window.setTimeout("projector5On();",1000);
				window.setTimeout("projector6On();",1000);
				window.setTimeout("projector7On();",1000);
				window.setTimeout("projector8On();",1000);
				window.setTimeout("plasmaVC1On();",1000);
				window.setTimeout("plasmaVC2On();",1000);
				window.setTimeout("plasmaVC3On();",1000);
				window.setTimeout("plasmaVC4On();",1000);
				window.setTimeout("plasmaVC5On();",1000);
				window.setTimeout("plasmaVC6On();",1000);
				window.setTimeout("plasmaFBOn();",1000);
				window.setTimeout("plasmaPRAYEROn();",1000);
			}
		else
			{
				window.setTimeout("projector1On();",1000);
				window.setTimeout("projector2On();",1000);
				window.setTimeout("projector3On();",1000);
				window.setTimeout("projector4On();",1000);
				window.setTimeout("projector5On();",1000);
				window.setTimeout("projector6On();",1000);
				window.setTimeout("projector7On();",1000);
				window.setTimeout("projector8On();",1000);
				window.setTimeout("plasmaVC1On();",1000);
				window.setTimeout("plasmaVC2On();",1000);
				window.setTimeout("plasmaVC3On();",1000);
				window.setTimeout("plasmaVC4On();",1000);
				window.setTimeout("plasmaVC5On();",1000);
				window.setTimeout("plasmaVC6On();",1000);
				window.setTimeout("plasmaPRAYEROn();",1000);
			}
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
		window.setTimeout("projector8Off();",1000);
		window.setTimeout("plasmaVC1Off();",1000);
		window.setTimeout("plasmaVC2Off();",1000);
		window.setTimeout("plasmaVC3Off();",1000);
		window.setTimeout("plasmaVC4Off();",1000);
		window.setTimeout("plasmaVC5Off();",1000);
		window.setTimeout("plasmaVC6Off();",1000);
		window.setTimeout("plasmaFBOff();",1000);
		window.setTimeout("plasmaPRAYEROff();",1000);   
	}
