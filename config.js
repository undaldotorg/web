"use strict";

var WiresphereConfig = {
	Background: {
		SolidBg: {							
			Color: '#1f2021'				// Solid background color
		},
		
		Picture: {
			Enabled: true,					// Background picture true/false
			Opacity: '0.07'					// Background picture opacity
		},
		
		Gradient: {
			Enabled: true,					// Background animated gradient true/false	
			StopAColor : '88,139,148',		// Background animated gradient Stop A
			StopBColor : '112,53,93',		// Background animated gradient Stop B
			Opacity : 0.4					// Background animated gradient opacity
		},
		
		
		Sphere3D: {
			lineColor: 0xffffff,			// Color of sphere outline
			lineOpacity: 0.5,				// Opacity of front face of sphere
			backlineOpacity: 0.05,			// Opacity of backface of sphere
			particleColor: 0xffffff,		// Color of particles
			particleOpacity: 0.5,			// Opacity of particles
			particleSize: 5,				// Size of particles
			particlesAmmount: 750,			// Ammount of particles
			moveSpeed: 0.07,				// Speed of particles
			cameraXMoveMax: 1.5,			// Mouse movement max rotation
			cameraYMoveMax: 0.75,			// Mouse movement max rotation
			cameraXMoveElastic: 0.02,		// Mouse movement smoothness
			cameraYMoveElastic: 0.02		// Mouse movement smoothness
		},
		
		Noise: {
			Enabled: true,					// Background noise true/false
			Opacity: '0.05'					// Background noise opacity
		}
		
	},
	
	Colors: {
		JSOverride: true,					// Set to false if you want to tweak CSS
		
		Tagline: {							// Tagline
			FirstLine: '#62b6bf',			// Color of first line of tagline
			SecondLine: '#ffffff'			// Color of second line of tagline
		},
		
		Buttons: {							// Buttons
			Outline: '#62b6bf',				// Color of buttons outline
			Text: '#ffffff',				// Color of buttons text
			TextHover: '#ffffff'			// Color of buttons text on hover
		},
		
		SideContent: {						// Side content 
			Background: '#111111',			// Background of side content 
			Text: '#ffffff',				// Text color of side content 
			ContactIcons: '#333333',		// Color of contact icons
		}
		
	},
	
	Map: {
		Longtitude: -73.946,				// X Map location 
		Latitude: 40.674,					// X Map location
		Style: [							// X Map style - refer to Google Maps for more details
		  {
			"stylers": [
			  { "saturation": -100 },
			  { "lightness": -62 },
			  { "gamma": 0.47 }
			]
		  },{
			"elementType": "labels.text",
			"stylers": [
			  { "color": "#ffffff" },
			  { "visibility": "simplified" }
			]
		  },{
			"elementType": "labels.icon",
			"stylers": [
			  { "gamma": 2.17 }
			]
		  }
		]
	}
	
}