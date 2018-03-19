// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
<<<<<<< HEAD
var img_arr = document.getElementsByClassName("imgs");
=======
var imgArray = document.getElementsByClassName("pop");
>>>>>>> 85bef7f524b848be9ea9001a3febbcd9bcf443e3
var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");

<<<<<<< HEAD
var click_function = function(){
=======
var clickFunction = function(){
>>>>>>> 85bef7f524b848be9ea9001a3febbcd9bcf443e3
	var sticky_wrapper=document.getElementById("sticky-wrapper");
	sticky_wrapper.style.display="none";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
<<<<<<< HEAD
for (var i=0;i<img_arr.length;i++){
	img_arr[i].addEventListener('click', click_function, false);
=======
for(var i=0;i< imgArray.length ;i++)
{
	imgArray[i].addEventListener('click',clickFunction,false);
>>>>>>> 85bef7f524b848be9ea9001a3febbcd9bcf443e3
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	var sticky_wrapper=document.getElementById("sticky-wrapper");
	modal.style.display = "none";
	sticky_wrapper.style.display="block";
    
}