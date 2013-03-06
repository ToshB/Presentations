(function (){
	var script = document.createElement('script'),
		s = document.getElementsByTagName('script')[0];

	script.src = "http://provider.dev/part2.js";

	alert("Loader loaded");
	s.parentNode.insertBefore(script, s);
})();