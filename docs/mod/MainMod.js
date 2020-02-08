// Mod
Game.Win('Third-party');
if (MainMod === undefined) var MainMod = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
MainMod.name = 'Cookie Clicker Extra';
MainMod.version = '1.0';
MainMod.GameVersion = '2.022';

MainMod.launch = function () {
	MainMod.init = function () {
		var iconsURL = 'https://raw.githubusercontent.com/masterofbob777cc/CookieClickerExtra/master/CookieClickerMod.png';
		// Upgrades
		var last;
		var order = Game.Upgrades["Loreols"].order + 1 / 1000;
		var upPrice  = 999999999999;
		var upPrice2 = 99999999999999;
		Game.NewUpgradeCookie({
			name:'Birthday Cake Loreo',
			desc:'Cookie production multiplier <b>+1%</b> for every year Cookie Clicker has existed (currently : <b>+' + Beautify(Math.floor((Date.now()-new Date(2013,7,8))/(1000*60*60*24*365))) + '%</b>).<br><q>Placeholder Text</q>',
			icon:[10, 12, iconsURL],
			require:'Box of brand biscuits',
			power: Beautify(Math.floor((Date.now()-new Date(2013,7,8))/(1000*60*60*24*365))),
			price: 999999999999999*5
			}); 
		Game.NewUpgradeCookie({
			name:'Mint Loreo',
			desc:'Placeholder Text',
			icon:[10, 13, iconsURL],
			require:'Box of brand biscuits',
			power: 2,
			price: 999999999999999*5
			}); 
		/*
		Game.customComputeLumpType.push(function () {
		
		Type of lump to be chosen 
		1 : Bifurcated
		2 : Golden
		3 : Meaty
		4 : Caramelized
		5 : Golden Bifurcated
		6 : Meaty Bifurcated
		7 : Caramelized Bifurcated 
		8 : Cookie Lump
		9 : Bifurcated Cookie Lump
		10 : Dragon-Roasted Cookie Lump 
		11 : Bifurcated Dragon-Roasted Cookie Lump
		/
		var moddedTypes = [];
		var vanillaTypes = [];
		if (vanillaTypes.includes(1)) { moddedTypes.splice(moddedTypes.indexOf(1), 1); var isbifurcated = true;};
		if (types) var vanillaTypes = vanillaTypes.concat(types);
		
		// Modded
		if (Math.random()<1/100) moddedTypes.push(8); // Cookie Lump
		if (Math.random()<1/100) moddedTypes.push(10); // Dragon-Roasted Cookie Lump
		
		// Bifurcated
		if (vanillaTypes.includes(2) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(2), 1); moddedTypes.push(5); };
		if (vanillaTypes.includes(3) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(3), 1); moddedTypes.push(6); };
		if (vanillaTypes.includes(4) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(4), 1); moddedTypes.push(7); };
		if (moddedTypes.includes(8) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(8), 1); moddedTypes.push(9); };
		if (moddedTypes.includes(10) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(8), 1); moddedTypes.push(11); };
		types = types.concat(moddedTypes);
				
		});
		
		Game.customDoLumps.push(function () {
			// TODO
		});
		*/
		Game.customStatsMenu.push(function () {
			CCSE.AppendStatsVersionNumber(MainMod.name, MainMod.version);
		});
	}
	// Finish up
	MainMod.isLoaded = 1;
	if (MainMod.postloadHooks) {
		for (var i = 0; i < MainMod.postloadHooks.length; ++i) MainMod.postloadHooks[i]();
	}
	if (Game.prefs.popups) 
	{
		Game.Popup(MainMod.name + ' loaded!'); 
	} else {
		Game.Notify(MainMod.name + ' loaded!', '', '', 1, 1);
	}
}

if (!MainMod.isLoaded) {
	if (CCSE && CCSE.isLoaded) {
		MainMod.launch();
	}
	else {
		if (!CCSE) var CCSE = {};
		if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(MainMod.launch);
	}
}
