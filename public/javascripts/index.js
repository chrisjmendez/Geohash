
var loadMap = function(){
	var myLatlng = new google.maps.LatLng( <%= lat %>, <%= lon %>);
	var myOptions = {
		zoom: <%= zoom %>,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map"), myOptions);
};
window.onload = loadMap; 