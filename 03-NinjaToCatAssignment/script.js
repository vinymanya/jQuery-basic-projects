$(document).ready(function(){
	$("img").click(function(){	
		var cat = $(this).attr("src");
		var ninja = $(this).attr("data-alt-src");
		console.log(cat, ninja);
		// Swap values of these attributes
		$(this).attr("data-alt-src", cat);
		$(this).attr("src", ninja);

	});

});
