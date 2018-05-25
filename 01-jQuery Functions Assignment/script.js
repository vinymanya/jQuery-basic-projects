// External JS file
$(document).ready(function(){
    $("#btn").click(function(){
        $("p:nth-last-child(2)").css("color", "hotpink");
    });
    
    $("#hide").click(function(){
    	$("h1").hide(1000, function(){
    		alert("The heading is now hidden!");
    	});
    });
    $("#show").click(function(){
    	$("h1").show().css("color","cornflowerblue");
    });
    $("#toggle").click(function(){
    	$("h1").toggle();
    });

    // Using jQuery Slide methods
    $("#slideDown").click(function(){
    	$("#space1").slideDown("slow", function(){
    		$(this).append("<br><br>Here you are!!!");
    	});
    });

    $("#slideUp").click(function(){
    	$("#space2").slideUp("slow");
    });

    // fadeIn with different speed
    $("#fadeIn").click(function(){
    	$("#div1").fadeIn();
    	$("#div2").fadeIn("slow");
    	$("#div3").fadeIn(3000);
    });

    $("#fadeOut").click(function(){
    	$("#div1").fadeOut();
    	$("#div2").fadeOut("slow");
    	$("#div3").fadeOut(3000);
    });

    //The use of jQuery text,html and val methods

    $("#btn1").click(function(){
    	alert("Here is the text: " + $("#mytest").text());
    });
    $("#btn2").click(function(){
    	alert("Here is the html: " + $("#mytest").text());
    });

    $("#btn3").click(function(){
    	alert("here is my value: " + $("#test").val());
    });

    //setting attribute with jQuery attr() method!!!
    $("#btn4").click(function(){
    	$("#attr").attr("href", "https://www.jQuery.com");
    });
});