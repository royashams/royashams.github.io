		
/**
 * This function is for the left button, it changes the image in the navigation diamond 
 *'demo' based on its previous image.
 * similar to a counter-clockwise rotation.
 */
		function GoDown(){
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
/**
 * This function is for the left button, it changes the image in the navigation diamond 
 *'demo' based on its previous image.
 * similar to a clockwise rotation.
 */

		function GoUp(){
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

/**
 * This function changes the link relative to the "go_button" based on the current image 
 displayed on the navigation diamond 'demo'
 */

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


// the following functions are used to change different states of fading in the buttons to draw attention to the user.
// first, set up a global counter variable recording the number of clicks. This is called when left or right buttons are clicked.
		var count = 0;

/**
 * This function is a basic counter, used when onclick is called from the left or right buttons.
 */
		function click_counter() {
			document.getElementById("go_button").classList.add('fade_class');
			count += 1;}

/**
 * Adds a fade attribute to an image, provided buttons were never clicked on. 
 */
		function start_fade(image){
			// if left or right buttons were never clicked, resume fading.
			if (count == 0) {
				document.getElementById(image).classList.add('fade_class');
			}
		}

/**
 * Removes a fade attribute to the given image. 
 */
		function end_fade(image){
			document.getElementById(image).classList.remove('fade_class');
			}




