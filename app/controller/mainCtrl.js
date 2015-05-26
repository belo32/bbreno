app.controller("mainCtrl", function($scope, $http){
	console.log("mainCtrl");
	$scope.companyTitle = "B & B Renovations and Services";

	$scope.data = {
		"home" : {
			"aboutUs": {
				"title" : "About Us",
				"content" : "Our company specializes in renovation, restoration and services of the following: building, kitchen, bathroom, patio, deck and landscaping, fencing, driveway and interlock, cleaning and restoration after building disasters, cooling and heating systems installation and repair, appliances installation and repair"
			},
			"contactUs" : {
				"phoneNumber" : "613-444-4444",
				"address" : "some address",
				"postalCode" : "k1g 2d7",
				"city" : "Ottawa",
				"province" : "Ontario",
				"country" : "Canada",
				"email" : "email@email.com"
			},
			"testimonials" : [
			{
				"testimonial" : "You did a great job",
				"name" : "John Doe"
			},
			{
				"testimonial" : "Would call them again",
				"name" : "Clair Bear"
			}
			],

			"menu" : {
				"home" : "Home",
				"services" : "Services",
				"contactUs" : "Contact",
				"faq" : "FAQ",
				"aboutUs" : "About Us"
			},
			"services" : {
				"title" : "Services",
				"list" : {
					"basement" : "Basement",
					"kitchen" : "Kitchen",
					"fecncing" : "Fencing",
					"deck" : "Deck",
					"interlock" : "Interlock | Driveway",
					"disaster" : "Disaster Restoration",
					"hvac" : "HVAC Systems",
					"appliances" : "Appliance Installation & Repair",
					"carpet" : "Carpet Installation"
				}
			},
			"contact" : {
				"title" : "Get a free quote now!",
				"message" : "We look forward to serving you.",
				"address" : "",
				"province" : "ON, Canada",
				"postal" : "",
				"phone1" : "(613) 979-1962",
				"phone2" : "(613) 276-7944",
				"email" : "bbrenovserv@gmail.com"
			}
		}
	}
	console.log($scope.data);
	/*$http.get('app/data.json').
	success(function(data, status, headers, config){
		console.log("Success: " + data);
	}).
	error(function(data, status, headers, config){
		console.log("Error: " + data);
	});*/

})