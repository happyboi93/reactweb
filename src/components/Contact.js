import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

const Contact=() => {
	return (
		<div>
		  <Navbar />
		  <Card 
		  	name='whatsapp'
		  	comment='Welcome to has a branded whatsapp business account called LitMedia,
			    where he offers a lot of services like: Graphics designing course
			    										Programming course(in programming every language)
			    										Pickup and delivery services
			    										Animation creation and course
			    To get in touch With israel click on the name below'
			link='https://api.whatsapp.com/send?phone=2349133842196&text=My%20name%20is%20.......%0AI%20would%20like%20to%20know%20more%20about%20you%20and%20what%20you%20offer%20%3F%0A'
		  />
		  <Card
		  	name='Github'
		  	comment='A self thought web developer aiming at becoming s full stack developer,
		  		App developer and Software developer.
		  		Willing to create a community of pro and upcoming devs where coding problem can be solved.'
		  	link='https://github.com/happyboi93/'
		  />
		  <Card 
		  	name='Gmail'
		  	comment='Always available to repond to every mail sent to our mailing system,
		  		because it brings ease of conversation and fast information transmission '
		  	link='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGDRLqmVHcnndHMVlPNflLThdFPsZXfvVKlXZxHSXSLmNtXRPGFTMMGzLDvWktlFtQgqB'
		  />
		</div>
	)
}

export default Contact;

// Israel is a Coder with fundamental knowledge in web development. He enjoys coding
// 			  	even though he faces a lot of bugs and a PUBG Mobile player 

// Welcome to has a branded whatsapp business account called LitMedia,
// 			    where he offers a lot of services like: Graphics designing course
// 			    										Programming course(in programming every language)
// 			    										Pickup and delivery services
// 			    										Animation creation and course
// 			    To get in touch With israel click on the name below

//  "https://api.whatsapp.com/send?phone=2349133842196&text=My%20name%20is%20.......%0AI%20would%20like%20to%20know%20more%20about%20you%20and%20what%20you%20offer%20%3F%0A"
