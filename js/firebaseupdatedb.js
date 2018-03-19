function addSubscriber(){
	console.log("Adding Subscriber");
	var emailaddr=document.getElementById("emailaddress");
	var emailaddrstring=emailaddr.value;
	console.log(emailaddrstring);
	var messageListRef = firebase.database().ref('subscriber');
	var newMessageRef = messageListRef.push();
	newMessageRef.set({
	  'User-Email': emailaddrstring
	});
	console.log("Subscriber Added Successfully");
}
