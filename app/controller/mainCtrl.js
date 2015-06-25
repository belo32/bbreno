app.controller("mainCtrl", function($scope, $http){
	console.log("mainCtrl");
	$scope.companyTitle = "B & B Renovations and Services";

	$scope.data = {
		"home" : {
			"aboutUs": {
				"title" : "About Us",
				"content" : "Our company specializes in renovation, restoration and services of the following: building, kitchen, bathroom, patio, deck and landscaping, fencing, driveway and interlock, cleaning and restoration after building disasters, cooling and heating systems installation and repair, appliances installation and repair."
			},
			"contactUs" : {
				"phoneNumber" : "(613) 979-1962",
				"phoneNumber2" : "(613) 276-7944",
				"address" : "some address",
				"postalCode" : "k1g 2d7",
				"city" : "Ottawa",
				"province" : "Ontario",
				"country" : "Canada",
				"email" : "bbrenovserv@gmail.com"
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
				"list" : [ 
				{
					"title" : "Basement",
					"url" : "service/basement.html",
					"description" : "Complete floor and Wall finish, Isolation, Hanging ceiling, Basement living room, Basement shower-room, Basement bedroom, Basement office, Ventilation/ Heating / Air conditioning, Electricity",
					"sectionImg" : ""
				},
				{
					"title" : "Kitchen",
					"url" : "service/kitchen.html",
					"subTitle" : "CABINET | COUNTER-TOPS | BACK-SPLAHES | APPLIANCES | STORAGE | LIGHTING & EATING AREA",
					"description" : "Kitchen Renovation & Remodelling Expert.A well-designed kitchen whether you’re looking for a cosmetic makeover or a dramatic transformation, you’ve come to the right place. Custom made,A sparkling amazing kitchen new design to a kitchen renovation, decor and design.  \nRural chic makeover, country kitchen or melds traditional inspiration with contemporary style or very trendy European traditional-style kitchens. Top-quality drawer durable as well as inner organizing systems for functionality. Customized storage for everything from linens to recycling materials to dishware to food. Appliances design fitting into drawers, including refrigerated, dishwasher, warming and even microwave drawers, fully customized and integrated kitchen with multiple zones for food prep and storage.",
					"sectionImg" : " Kitchen Renovation & Remodelling Expert. A well-designed kitchen whether you’re looking for a cosmetic makeover or a dramatic transformation, you’ve come to the right place.\n\nCustom made,A sparkling amazing kitchen new design to a kitchen renovation, decor and design.  Rural chic makeover, country kitchen or melds traditional inspiration with contemporary style or very trendy European traditional-style kitchens. Top-quality drawer durable as well as inner organizing systems for functionality. Customized storage for everything from linens to recycling materials to dishware to food. Appliances design fitting into drawers, including refrigerated, dishwasher, warming and even microwave drawers, fully customized and integrated kitchen with multiple zones for food prep and storage.",
				},
				{
					"title" : "Fencing",
					"url" : "service/fencing.html",
					"description" : "We can work all around your property by using our best quality of fence materials PVC, metal or wood. We can go ahead also by installing the material of your choice.",
					"sectionImg" : ""
				},
				{
					"title" : "Deck",
					"url" : "service/deck.html",
					"description" : "With the best quality of wood, our experts will be able to manage, design; we are able to make different plans and proposal to sweet your desire different.",
					"sectionImg" : ""
				},
				{
					"title" : "Interlock | Driveway",
					"url" : "service/interlock_driveway.html",
					"description" : "Our best selection of stones will make a big difference on your properties. Our samples and models will help you to make a choice of the style you wish to install. We do have different proposals for different budgets.",
					"sectionImg" : ""
				},
				{
					"title" : "Disaster Restoration",
					"url" : "service/disaster_restoration.html",
					"description" : "Very sad and devastating when accidents suddenly happened fire, water leeks, flooding damage our property. On your phone call or advises our specialized team will take care of the whole process in order to restore your property to its genuine even improved after disasters.",
					"descExtraTitle" : "FireDamage:",
					"descExtra" : "Complete reconstruction or remodelling\nSmoke damage - restoration\nSmoke odour - removal / deodorization\nStructure board-up\nDemolition, cleanup, debris removal\nSecure storage of furniture and appliances\nWall cleaning, preparation, painting",
					"waterDmgTitle" :"Water damage:",
					"waterDmgDesc" : "Emergency structure repairs\nCarpet and floor cleaning and reinstallation\nSump pumps\nControlled high-speed structure drying capabilities\nDeodorizing and mildew treatment\nWall cleaning, preparation and painting\nState-of-the-art equipment for emergency water extraction", 
					"sectionImg" : ""
				},
				{
					"title" : "HVAC Systems",
					"url" : "service/hvac_systems.html",
					"description" : "Our technicians will assist you to find the right and the best way to install and your systems.We have several prosals of maintenance of your HVC all around seasons.",
					"sectionImg" : ""
				},
				{
					"title" : "Applicance Installation & Repair",
					"url" : "service/appliances_repair.html",
					"description" : "Our team is able to install and repair all kind of appliances at your place.Will be more than happy to assist, help to make the right choice of your appliance.",
					"sectionImg" : "" 
				},
				{
					"title" : "Carpet Installation",
					"url" : "service/carpet_installation.html",
					"description" : "",
					"sectionImg" : ""
				}
				]				
				
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
			},
			
		},
		"images" : {
			"basement" : [
			"include/img/services/img1.jpg",
			"include/img/services/img2.jpg"
			],
			"kitchen" :[
			"include/img/services/img3.jpg",
			"include/img/services/img4.jpg",
			"include/img/services/img5.jpg"
			],
			"deck" : [
			"include/img/services/img6.jpg",
			"include/img/services/img7.jpg",
			"include/img/services/img8.jpg"
			],
			"fencing" : [
			"include/img/services/img9.jpg",
			"include/img/services/img10.jpg"
			]
		}

	}
	console.log($scope.data);

	$scope.services = $scope.data.home.services;
	$scope.images = $scope.data.images;
	console.log($scope.services);
	console.log($scope.images);
	/*$http.get('app/data.json').
	success(function(data, status, headers, config){
		console.log("Success: " + data);
	}).
	error(function(data, status, headers, config){
		console.log("Error: " + data);
	});*/

})