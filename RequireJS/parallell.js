function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type  = 'text/javascript';
    script.async = true;
    script.src   = url
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
    if (script.addEventListener)
        script.addEventListener('load', callback, false);
    else {
		script.attachEvent('onreadystatechange', readyHandler = function() {
			if (/complete|loaded/.test(script.readyState)) {
    			callback();
				script.detachEvent('onreadystatechange', readyHandler);
			} 
		}); 
	}
}


var requirements = 2;
function tryExecute(){
	if(--requirements == 0){
		$('body').append('<div id="popup">Hello World</div>');
		$('#popup').dialog();

	}
}

loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function (){
	tryExecute();
});

loadScript('https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js', function (){
	tryExecute();
});