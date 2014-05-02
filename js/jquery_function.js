$(document).ready(function () {
	var device = "";
	$(window).on("load resize", function () {
		var size_mobile = 480;
		var size_tablet = 1024;
		var size_desktop = 1366;
		var size_browser = $(this).width();
		if (size_browser >= size_desktop) {
			desktop();
		} else if (size_browser > size_mobile && size_browser <= size_tablet) {
			tablet()
		} else if (size_browser <= size_mobile) {
			mobile();
		}		
		return false;
	});
	//for mobile function
	function mobile() {
		device = "Mobile";
	}
	//for tablet function
	function tablet() {
		device = "Tablet";
	}
	//for desktop function
	function desktop() {
		device = "Desktop";
	}
});
