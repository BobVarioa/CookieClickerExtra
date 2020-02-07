// Mod
Game.Win('Third-party');
if (MainMod === undefined) var MainMod = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
MainMod.name = 'Cookie Clicker Extra';
MainMod.version = '1.0';
MainMod.GameVersion = '2.022';

MainMod.launch = function () {
	MainMod.init = function () {
		var iconsURL = 'github.url/img/customIcons.png';
		/*
		// Upgrades
		var last; var order = 1400; var i = 0;
		last = Game.TieredUpgrade('Blacker holes', 'Black hole inverters are <b>twice</b> as efficient.<q>Bigger and blacker.</q>', 'Black hole inverter', 1); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Blackest holes', 'Black hole inverters are <b>twice</b> as efficient.<q>The biggest and blackest.</q>', 'Black hole inverter', 2); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Vantablack holes', 'Black hole inverters are <b>twice</b> as efficient.<q>The universe doesn\'t care about some idiot\'s copyright.</q>', 'Black hole inverter', 3); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('African-American holes', 'Black hole inverters are <b>twice</b> as efficient.<q>Some people take political correctness a little too far.</q>', 'Black hole inverter', 4); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Event Horizon Comics', 'Black hole inverters are <b>twice</b> as efficient.<q>dot com</q>', 'Black hole inverter', 5); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Large Hadron Collider', 'Black hole inverters are <b>twice</b> as efficient.<q>Smashing things together has never been so well funded!</q>', 'Black hole inverter', 6); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Superconducting Super Collider', 'Black hole inverters are <b>twice</b> as efficient.<q>In the land of what might have been.</q>', 'Black hole inverter', 7); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Hawking radiators', 'Black hole inverters are <b>twice</b> as efficient.<q>14 March 2018.</q>', 'Black hole inverter', 8); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Micro black holes', 'Black hole inverters are <b>twice</b> as efficient.<q>Fun sized</q>', 'Black hole inverter', 9); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Accretion disco', 'Black hole inverters are <b>twice</b> as efficient.<q>Everybody dance now!</q>', 'Black hole inverter', 10); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredUpgrade('Gravitational waves', 'Black hole inverters are <b>twice</b> as efficient.<q>What\'s better that one black hole? Two of them put together!</q>', 'Black hole inverter', 11); last.icon[2] = iconsURL; last.order = order + i / 100; i++;

		order = 256;
		last = Game.GrandmaSynergy('Heavy grandmas', 'A dense grandma to accrete more cookies.', 'Black hole inverter'); last.order = order;

		order = 5001
		last = Game.SynergyUpgrade('Daring pilots', "<q>You've never heard of the Millennium Falcon? It's the ship that made the Kessel Run in less than twelve parsecs.</q>", 'Black hole inverter', 'Shipment', 'synergy1'); last.icon[2] = iconsURL; last.order = order;
		last = Game.SynergyUpgrade('General relativity', '<q>Space is time. Time is space</q>', 'Black hole inverter', 'Time machine', 'synergy2'); last.icon[2] = iconsURL; last.order = order + 0.01;


		// Achievements
		order = 2400; i = 0;
		last = Game.TieredAchievement('Single singularity', 'Have <b>1</b> black hole inverter.', 'Black hole inverter', 1); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Penrose diagram', 'Have <b>50</b> black hole inverters.', 'Black hole inverter', 2); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Schwarzschild', 'Have <b>100</b> black hole inverters.', 'Black hole inverter', 3); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Primordial black holes', 'Have <b>150</b> black hole inverters.', 'Black hole inverter', 4); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('No-hair theorem', 'Have <b>200</b> black hole inverters.', 'Black hole inverter', 5); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Photon sphere', 'Have <b>250</b> black hole inverters.', 'Black hole inverter', 6); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Information paradox', 'Have <b>300</b> black hole inverters.', 'Black hole inverter', 7); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Gravitational lensing', 'Have <b>350</b> black hole inverters.', 'Black hole inverter', 8); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Galactic nuclei', 'Have <b>400</b> black hole inverters.', 'Black hole inverter', 9); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Sagittarius A*', 'Have <b>450</b> black hole inverters.', 'Black hole inverter', 10); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Hey now, you\'re a dead star', 'Have <b>500</b> black hole inverters.', 'Black hole inverter', 11); last.icon[2] = iconsURL; last.order = order + i / 100; i++;

		order = 2420; i = 0;
		last = Game.ProductionAchievement('Relativistic jets', 'Black hole inverter', 1); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.ProductionAchievement('Primordial black holes', 'Black hole inverter', 2); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.ProductionAchievement('Naked singularity', 'Black hole inverter', 3); last.icon[2] = iconsURL; last.order = order + i / 100; i++;

		last = CCSE.NewAchievement('M87', 'Reach level <b>10</b> black hole inverters.', [1, 26, iconsURL]);
		Game.Objects['Black hole inverter'].levelAchiev10 = last; last.order = order + i / 100; i++;
		*/
		
		Game.customComputeLumpType.push(function () {
		/*
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
		*/
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
		
		Game.customStatsMenu.push(function () {
			CCSE.AppendStatsVersionNumber(MainMod.name, MainMod.version);
		});

		// Finish up
		MainMod.isLoaded = 1;
		if (MainMod.postloadHooks) {
			for (var i = 0; i < MainMod.postloadHooks.length; ++i) MainMod.postloadHooks[i]();
		}

		if (Game.prefs.popups) Game.Popup(MainMod.name + ' loaded!');
		else Game.Notify(MainMod.name + ' loaded!', '', '', 1, 1);
	}
	}
	

	if (CCSE.ConfirmGameVersion(MainMod.name, MainMod.version, MainMod.GameVersion)) MainMod.init();


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
