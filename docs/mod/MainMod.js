// Mod
Game.Win('Third-party');
if (MainMod === undefined) var MainMod = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
MainMod.name = 'Cookie Clicker Extra';
MainMod.version = '1.0';
MainMod.GameVersion = '2.022';

MainMod.launch = function () {
	MainMod.init = function () {
		var iconsURL = 'https://masterofbob777cc.github.io/CookieClickerExtra/mod/CookieClickerMod.png';
		// Upgrades
		MainMod.Upgrades = [];
		var orderadder = 1 / 1000;
		MainMod.Upgrades.push(CCSE.NewUpgrade("Birthday Cake Loreo",'Cookie production multiplier <b>+1%</b> for every year Cookie Clicker has existed (currently : <b>+' + Beautify(Math.floor((Date.now()-new Date(2013,7,8))/(1000*60*60*24*365))) + '%</b>).<br><q>Placeholder Text</q>',999999999999999*5,[10, 12, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = Math.floor((Date.now()-new Date(2013,7,8))/(1000*60*60*24*365));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Mint Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[10, 13, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Chocolate Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[10, 14, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Peanut Butter Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[10, 15, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Red Velvet Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[10, 16, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Peanut Butter Chocolate Pie Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[10, 17, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Spring Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[11, 12, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Dark Chocolate Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[11, 13, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Carrot Cake Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[11, 14, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Golden Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[11, 15, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Lemon Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[11, 16, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
		
		MainMod.Upgrades.push(CCSE.NewUpgrade("Cinnamon Bun Loreo",'Placeholder Text.<br><q>Placeholder Text</q>',999999999999999*5,[11, 17, iconsURL]));
		MainMod.Upgrades[MainMod.Upgrades.length - 1].power = 2;
		MainMod.Upgrades[MainMod.Upgrades.length - 1].require = 'Box of brand biscuits';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = 'cookie';
		MainMod.Upgrades[MainMod.Upgrades.length - 1].order = 10030.126 + orderadder; orderadder+=1/1000;
		Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
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
	if(CCSE.ConfirmGameVersion(MainMod.name, MainMod.version, MainMod.GameVersion)) MainMod.init();
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
