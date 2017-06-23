// calls the class .disapear and tells it to include a function of fading out an image when the button .dispaer is clicked on 
$(".disapear").click(function() {
	$("img").fadeOut();
});
// this makes the image appear when you click on the button appear 
$(".appear").click(function() {
	$("img").fadeIn("slow");
});

// this tells h1 to adopt the properties of the class .styleswitch from css to restyle it when its double clicked on
$(".stuff h1").dblclick(function() {
	$(".stuff h1").toggleClass("styleswitch1");
});

// adds a two more lists to the ul when the button poop is clicked on
$(".poop").click(function() {
	$("ul").append("<li>list3</li>");
	$("ul").append("<li>list4</li>");
});

// changes the style of the div when hovered on
$(".query").hover(function() {
	$(".query").toggleClass("changeme");
});

// makes the h2 elemnt slide up when my mouse leaves it
$(".query h2").mouseleave(function() {
	$(".query h2").slideUp();
});

// makes the yellow div disapear when hovered
$(".big").hover(function() {
	$(".big").fadeOut();
});

// makes the div reapear when you click on the button
$(".lastone").click(function() {
	$(".big").fadeIn();
});

// changes the color of h4 when hovered on
$("h4").hover(function () {
	$("h4").toggleClass("colorme");
});