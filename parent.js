(function() {

	var el,	iframe,	i, script, messageHandler, element, container, options, xdomain,
	resize = window.IframeResize = {};
	id = 'iframe-4ee0adbddd0ca',
	props = {
		src : '',
		width : '100%',
		style : 'padding: 0; margin: 0; border: none; display: block; height: 0; overflow: hidden;',
		scrolling : 'no',
		frameBorder : 0,
		id : id
	},
	ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1,

	// Sets the height of the iframe
	setHeight = function (height) {
		document.getElementById(id).style.height = height + 'px';
	},

	// Handler when window.postMessage is available
	messageHandler = function (e) {
		var height, r,
			regex = new RegExp(xdomain + '$'),
			matches = e.origin.match(regex);
		if(matches.length == 1){
			strD = e.data + "";
			r = strD.match(/^(\d+)(s?)$/);
			if(r && r.length == 3){
				height = parseInt(r[1]);
				if (!isNaN(height)) {
					try {
						setHeight(height);
					} catch (ex) {}
				}
				if(r[2] == "s"){
					scroll(0,0);
				}
			}
		}
	},

	// Sets the default values then overrides
	setProps = function (options) {
		for (i in props) {
			try {
				var prop = (props[i] == options[i] || typeof(options[i]) == "undefined")? props[i] : options[i];
				if (i !== 'style') {
					iframe[i] = prop;
				} else {
					iframe[i].cssText = prop;
				}
			} catch (ex) {}
		}
	},
	setup = function(options) {
		options = options || {};
		xdomain = options.domain || '*';
		element = options.element || 'iframe-embed';
		container = document.getElementById(element);
		el = !ie ? 'iframe' : '<iframe name="' + element + '"></iframe>';
		iframe = document.createElement(el);
		setProps(options);
	};

	resize.load = function (options){
		setup(options);
		if(!container) return;
		try {
			container.appendChild(iframe);
			if (window.postMessage) {
				if (window.addEventListener) {
					window.addEventListener('message', messageHandler, false);
				} else if (window.attachEvent) {
					window.attachEvent('onmessage', messageHandler);
				}
			} else {
				setInterval(function () {
					var hash = window.location.hash,
						matches = hash.match(/^#h(\d+)(s?)$/);
					if (matches) {
						setHeight(matches[1]);
						if(matches[2] == 's'){
							scroll(0,0);
						}
					}
				}, 150);
			}
		} catch (ey) {}
	}
})();
