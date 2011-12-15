# Iframe Height
Iframe height is a simple tool to allow cross domain messaging, specifically iframe height resizing for responsive designs.

## Demo
### Visit here and try resizing the screen size.  The inner iframe height should resize accordingly [zerg.ws](http://zerg.ws/iframe/demo.html)

## Usage
Add the parent.js file to your containing page and the child.js to the contained page.

In the parent page make a call to:

IframeResize.load(options);

Config options defined below.

In the child page, make a call to messageParent() from your document ready function or window onload function.  The the messageParent function tries to use the document.scrollHeight to get the height of the document, but this is not always going to be the case for everyone.  You might just want to get the height of a given element or body using jquery or other selector.

## Config Options

Options : {
	src // The source url that the iframe is going to load
	element // The id of the element that the iframe will be rendered into
	domain // Used for security purposes to validate where the message is coming from.  When you have some control of the parent and child you will want to set this. See demo.
}

## Example

``` js
window.onload = function() {
	IframeResize.load({
		src : 'http://mysite.com/child.html',
		element : 'embed',
		domain : 'mysite.com'
	});
}

```

## License
IframeResize is &copy; 2011 [John Nelson](http://dailyrelevance.com) and is licensed under the terms of GPL &amp; MIT licenses.