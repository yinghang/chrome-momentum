var core = new momentum.Core();

core.start();
	// I want to run the time update and rendering every second
setInterval(function() {
	core.updateTime();
	core.render();
},1000*30);

	// I only want to fetch and update the weather once every ten minutes
setInterval(function() {
	core.updateWeather();
	core.render();
}, 1000*60*10);
