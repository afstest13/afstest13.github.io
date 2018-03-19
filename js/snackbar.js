function showSnackbar(type) {
    // Get the snackbar DIV
    if(type==1){
    var x = document.getElementById("snackbar");
	}else
	{
		var x = document.getElementById("snackbar2");
	}

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}