var app = app || {};


app.Animation = (function () {

    var tl1 = new TimelineMax(),
        atlas,
        txt1,
        rating,
        cta_txt,
        cta_arrow,
        curtain,
        buttonExit,
        buttonLegal,
        legal;

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
        rating = document.getElementById('rating');
        txt1 = document.getElementById('txt1');
        atlas = document.getElementById('atlas');
        cta_txt = document.getElementById('cta_txt');
        cta_arrow = document.getElementById('cta_arrow');
        curtain = document.getElementById('curtain');
        buttonExit = document.getElementById('button-exit');
        buttonLegal = document.getElementById('button-legal');
        legal = document.getElementById('legal');

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta_arrow, .25, {x: 5});
            TweenMax.to(cta_arrow, .25, {x: 0, delay: .25});
        });

        buttonLegal.addEventListener('mouseover', function () {
            TweenMax.to(legal, .25, {opacity: 1});
        });

        buttonLegal.addEventListener('mouseout', function () {
            TweenMax.to(legal, .25, {opacity: 0});
        });
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
        tl1.to(curtain, .5, {opacity: 0})
            .from(atlas, .5, {x:"+=20", y:"-=3", scale:.9, ease: Sine.easeOut}, "-=.5")
            .to(txt1, .5, {opacity: 1})
            .to(rating, .5, {opacity: 1})
            .to(cta_txt, .5, {opacity: 1})
            .to(cta_arrow, .5, {opacity: 1}, "-=.5");
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
