// init controller
var controller = new ScrollMagic.Controller();

// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#animate1", "zap")
					.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);