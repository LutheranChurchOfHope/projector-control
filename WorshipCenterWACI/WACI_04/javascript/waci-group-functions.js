/*
	This file contains the "group" functions, like Master ON/OFF,
	Plasmas ON/OFF, et cetera.
*/



function vcPlasmasON()
{
	window.setTimeout("waciBox(wc, vcPlasma01, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, vcPlasma02, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, vcPlasma03, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, vcPlasma04, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, vcPlasma05, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, vcPlasma06, nope, power_on);",1000);
}

function vcPlasmasOFF()
{
	window.setTimeout("waciBox(wc, vcPlasma01, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, vcPlasma02, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, vcPlasma03, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, vcPlasma04, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, vcPlasma05, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, vcPlasma06, nope, power_off);",1000);
}


function allPlasmasON()
{
	window.setTimeout("vcPlasmasON();",1000);
	window.setTimeout("waciBox(wc, footballTV, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, prayerTVs, nope, power_on);",1000);  
	window.setTimeout("waciBox(wc, gsPlasmas, nope, power_on);",1000);  
	window.setTimeout("waciBox(wc, entryPlasmas, nope, power_on);",1000);  
}

function allPlasmasOFF()
{
	window.setTimeout("vcPlasmasOFF();",1000);
	window.setTimeout("waciBox(wc, footballTV, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, prayerTVs, nope, power_off);",1000);  
	window.setTimeout("waciBox(wc, gsPlasmas, nope, power_off);",1000);  
	window.setTimeout("waciBox(wc, entryPlasmas, nope, power_off);",1000);  
}


function projectorsON()
{
	window.setTimeout("waciBox(wc, centerBeam1, nope, power_on);",1000);	
	window.setTimeout("waciBox(wc, centerCenter, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, centerLeft, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, centerRight, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, mainLeft, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, mainRight, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, foldbackLeft, nope, power_on);",1000);
	window.setTimeout("waciBox(wc, foldbackRight, nope, power_on);",1000);	
}

function projectorsOFF()
{
	window.setTimeout("waciBox(wc, centerBeam1, nope, power_off);",1000);	
	window.setTimeout("waciBox(wc, centerCenter, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, centerLeft, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, centerRight, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, mainLeft, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, mainRight, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, foldbackLeft, nope, power_off);",1000);
	window.setTimeout("waciBox(wc, foldbackRight, nope, power_off);",1000);	
}


function masterWCOn()
{
	var d = new Date().getDay();
	if (d == "0" || d == "6") 
	{
		window.setTimeout("projectorsON();",1000);
		window.setTimeout("vcPlasmasON();",1000);
		window.setTimeout("waciBox(wc, footballTV, nope, power_on);",1000);
		window.setTimeout("waciBox(wc, prayerTVs, nope, power_on);",1000);  
	}
	else
	{
		window.setTimeout("projectorsON();",1000);
		window.setTimeout("vcPlasmasON();",1000);
		window.setTimeout("waciBox(wc, prayerTVs, nope, power_on);",1000);  
	}
}

function masterWCOff()
{
		window.setTimeout("projectorsOFF();",1000);
		window.setTimeout("vcPlasmasOFF();",1000);
		window.setTimeout("waciBox(wc, footballTV, nope, power_off);",1000);
		window.setTimeout("waciBox(wc, prayerTVs, nope, power_off);",1000);  
}
