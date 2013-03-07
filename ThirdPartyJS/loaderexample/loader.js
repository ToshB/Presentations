alert("Loader loaded!");
(function (){
	var script = document.createElement('script'),
		s = document.getElementsByTagName('script')[0];

	script.src = "http://provider.dev/part2.js";
	script.async = true;

	s.parentNode.insertBefore(script, s);
})();