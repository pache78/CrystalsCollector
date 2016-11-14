$(document).ready(function() {

				//variables and for each colored crystal//
				var wins = 0;
				var losses = 0;
				var counter = 0;

				var randomStart = Math.floor((Math.random() * 120) +1); 
				
				//generating random numbers 1-12//
				var randomNumber1 = Math.floor((Math.random() * 12) +1);
				document.getElementById("red").value = randomNumber1;

				var randomNumber2 = Math.floor((Math.random() * 12) +1);
				document.getElementById("blue").value = randomNumber2;

				var randomNumber3 = Math.floor((Math.random() * 12) +1);
				document.getElementById("yellow").value = randomNumber3;

				var randomNumber4 = Math.floor((Math.random() * 12) +1);
				document.getElementById("green").value = randomNumber4;

				//Gather info on the element that was clicked on//
				$('button').click(function() {
					console.log(this);
				});
			});
						
		
	
	

	















