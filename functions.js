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
		}

		function ChangeLink(){
			var demo = document.getElementById('demo');
			var link = document.getElementById('about_and_contact');
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

		function HoverChangeTo(){
			var linkedin = document.getElementById('linkedin');
			var blurb = document.getElementById('blurb');
			switch (linkedin.getAttribute('src')) {
				case "social_icons/LinkedIn.png":
			        linkedin.src = "social_icons/github.png";
			        blurb = "does this work orrrrr";
			        break;
			    default:
				    linkedin.src ='stalin.png';
				    break;
			}
		}

		// OK WTH IF I COMMENT OUT THE BOTTOM FUNCTION IT WORKS YYYYY

		function HoverChangeBack(){
			var linkedin = document.getElementById('linkedin');
			switch (linkedin.getAttribute('src')) {
				case "social_icons/github.png":
			        linkedin.src = "social_icons/LinkedIn.png";
			        break;
			    default:
				    linkedin.src ='stalin.png';
				    break;
			}
		}