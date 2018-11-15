
	var styleText = "line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important;";
	var all = document.getElementsByTagName("*"); 
	for(var i = 0; i < all.length; i++){ 
	all[i].style.cssText = all[i].style.cssText + " " + styleText
	if (all[i].tagName == "P"){
		all[i].style.cssText = styleText + " margin-bottom: 2em !important;";
	}
}
