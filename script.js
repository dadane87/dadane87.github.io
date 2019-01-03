		//jquery-3.3.1.min.js
		
		$("#circle").hover(function() {
					
			if ($("#circle").css("background-color") == "rgb(0, 128, 0)") {
				$("#circle").css("background-color","orange");
				console.log("color = green");
			} else {
				$("#circle").css("background-color","green");
				console.log("color = orange");
			}
		});

		/*$(".squares").hover(function() {
			
			$(this).css("display", "none");

		});

		
		$("div").click(function() {
		
			$(this).fadeOut("slow", function() {
				$("#wonder").html($("#wonder").html() + "<br>" + "FadeOut for " + $(this) + " finished");
			});
		});
		
		*/

		$("#btnOne").click(function() {
			if ($("#fadingP").css("display") == "none") {
				$("#fadingP").fadeIn();
				console.log("fading the shit in");				
			} else {
				$("#fadingP").fadeOut();
				console.log("fading the shit out");
			}
		});
		
		$("#btnTwo").click(function() {
			if ($("#hiddenText").css("display") == "none") {
				$("#hiddenText").fadeIn();
				console.log("fading the shit in");				
			} else {
				$("#hiddenText").fadeOut();
				console.log("fading the shit out");
			}
		});
		
		$("#circle2").click(function() {

			for (var i = 0; i < 5; i++) {
				$(this).animate({
					width:"0px", 
					height:"400px",
					marginLeft: "200px",
					}, 500, function() {
						$(this).css("background-color", "orange");
				});
				$(this).animate({
					width:"100px", 
					height:"100px",
					marginLeft: "0px"
					}, 500, function() {
						$(this).css("background-color", "green");
				});

			}
		});
