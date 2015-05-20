app.controller("menuCtrl", function($scope){
	$scope.isHidden = 'hidden';
	$scope.selectService  = function(obj){
		console.log("selectService: " + obj);
		if(obj == 0){
			$scope.isHidden = 'hidden';
		}else{
			$scope.isHidden = '';
		}
		console.log($scope);
	}
	//default value
	$scope.viewUrl = "aboutUs.html";
	$scope.setSelectedContent = function(item, service) {
		console.log(item);
		$scope.viewUrl = item;

		
		if(service == 0){
			$scope.isHidden = 'hidden';
		} else {
			$scope.isHidden = '';
		}

		console.log($scope);
	}


})