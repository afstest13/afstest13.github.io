// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");

img.onclick = function(){
	var sticky_wrapper=document.getElementById("sticky-wrapper");
	sticky_wrapper.style.display="none";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	var sticky_wrapper=document.getElementById("sticky-wrapper");
	modal.style.display = "none";
	sticky_wrapper.style.display="block";
    
}