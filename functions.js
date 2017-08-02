		function GoDown(){
			// gonna try writing a switch statement
			var demo = document.getElementById('demo');
			switch (demo.getAttribute('src')) {
			    case 'original.png':
			        demo.src = 'portfolios.png';
			        break;
			    case 'portfolios.png':
				    demo.src = 'misc.png';
				    break;
			    case 'misc.png':
				    demo.src = 'experience.png';
				    break;
				case 'experience.png':
					demo.src = 'about_and_contact.png';
					break;
				case 'about_and_contact.png':
					demo.src = 'original.png';
					break;
				default: 
					demo.src = 'go_pls.png';
					break;
			}
			end_fade("left");
			end_fade("right");
			start_fade("go_button");
		}

		function GoUp(){
			// gonna try writing a switch statement
			// YES IT WORKS BUT BECAUSE I USED A SEMICOLONNN
			var demo = document.getElementById('demo');
			switch (demo.getAttribute('src')) {
			    case 'original.png':
			        demo.src = 'about_and_contact.png';
			        break;
			    case 'about_and_contact.png':
				    demo.src = 'experience.png';
				    break;
			    case 'experience.png':
				    demo.src = 'misc.png';
				    break;
				case 'misc.png':
					demo.src = 'portfolios.png';
					break;
				case 'portfolios.png':
					demo.src = 'original.png';
					break;
				default: 
					demo.src = 'go_pls.png';
					break;
			}
			end_fade("left");
			end_fade("right");
			start_fade("go_button");

		}

		function ChangeLink(){
			var demo = document.getElementById('demo');
			var link = document.getElementById('go_button');
			switch (demo.getAttribute('src')) {
				case 'original.png':
			        link.href = "index.html";
			        break;
			    case 'about_and_contact.png':
			        link.href = "about_and_contact.html";
			        break;
			    case 'portfolios.png':
				    link.href = "portfolio.html";
				    break;
			    case 'experience.png':
				    link.href = "professional.html";
				    break;	
				case 'misc.png':
					link.href = "misc.html";
					break;
				default: 
					link.href = "error.html";
			        break;				
			}	
		}

		function HoverChangeTo(icon){
			var picture = document.getElementById(icon);
			var blurb = document.getElementById("blurb");
			//alternatively use dictionaries tbh
			var id_to_str = {'linkedin':"LinkedIn aaa", 'github':"GitHub"};
			for (key in id_to_str) {
				if (picture.id == key) {
					blurb.innerHTML = id_to_str[key];
				}
			}
		}

		function fade(element) {
		    var op = 1;  // initial opacity
		    var timer = setInterval(function () {
		        if (op <= 0.1){
		            clearInterval(timer);
		            element.style.display = 'none';
		        }
		        element.style.opacity = op;
		        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		        op -= op * 0.1;
		    }, 50);
		}

		function Since(year) {
			// Return the current year minus the year give in the variable
			var today = new Date();
			var current = today.getFullYear();
			var doc = document.getElementById("date_me");
			document.write((current-year)+" years");
		}

		function ChangeDemo(image) {
			var demo = document.getElementById('demo');
			demo.src = image;
		}



		function start_fade(image){
			document.getElementById(image).classList.add('fade_class');
		}

		function end_fade(image){
			document.getElementById(image).classList.remove('fade_class');
		}

		// $("#slideshow > div:gt(0)").hide();

		// setInterval(function() {
		//   $('#slideshow > div:first')
		//     .fadeOut(1000)
		//     .next()
		//     .fadeIn(1000)
		//     .end()
		//     .appendTo('#slideshow');
		// }, 3000);

		// OK so ill put slideshow stuff down here its 5:58 a the airport sup

		var slideIndex = 1;
		// showSlides(slideIndex);
		var slides = document.getElementsByClassName("mySlides");
		slides[2].style.display = "block"; 


		// PROBLEM: first thing it does is not display the first image but if you press the arrows it goes to the 2nd image asap

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1} 
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
		      slides[i].style.display = "none"; 
		  }
		  for (i = 0; i < dots.length; i++) {
		      dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block"; 
		  dots[slideIndex-1].className += " active";
		}



