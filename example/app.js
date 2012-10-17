// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel({text:"photofinder2"});
win.add(label);

// TODO: write your module tests here
var photofinder2 = require('jp.co.tubasa.photofinder2');
//Ti.API.info("yokada module is => " + photofinder2);
//Ti.API.info("yokada photo list: " + JSON.stringify(photofinder2.list()));
var images = photofinder2.list();
//var sdcardDir = Ti.Filesystem.getFile('/mnt/sdcard');
//Ti.API.info('yokada images[3]: ' + images[3]);
//alert(JSON.stringify(images));
//alert('file://' + images[5]);
/*
var iv = Ti.UI.createImageView({
	image:'file://' + images[5],
	width:100,
	height:100,
	bottom:0
});
*/

var scrollView = Ti.UI.createScrollView();
win.add(scrollView);
images.forEach(function(el, i){
	var iv = Ti.UI.createImageView({
		image : 'file://' + el,
		borderColor : "#000",
		backgroundColor : "white",
		width : "108dp",
		height : "108dp",
		top : (Math.floor(i / 3) * "107") + "dp",
		left : ((i % 3) * "107") + "dp"
		//, contentWidth: el.images[7].height
		//, contentHeight: el.images[7].width
	});
	scrollView.add(iv); 
});


win.open();


/*
label.text = photofinder2.example();

Ti.API.info("module exampleProp is => " + photofinder2.exampleProp);
photofinder2.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = photofinder2.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}
*/

