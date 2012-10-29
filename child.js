var messageParent = function(scrollTop){
		var d = document;
		var h = Math.max(
			d.body.scrollHeight, d.documentElement.scrollHeight,
			d.body.offsetHeight, d.documentElement.offsetHeight,
			d.body.clientHeight, d.documentElement.clientHeight
		);
		h = (scrollTop)? h+'s':h;
		if(top.postMessage){
			top.postMessage( h , '*');
		} else {
			window.location.hash = 'h'+h;
		}
}
