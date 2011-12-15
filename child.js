var messageParent = function(scrollTop){
		var h = document.body.scrollHeight;
		h = (scrollTop)? h+'s':h;
		if(top.postMessage){
			top.postMessage( h , '*');
		} else {
			window.location.hash = 'h'+h;
		}
}
