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
function addAppointment()
{
	console.log("Adding Appointment");
	var first_name=document.getElementById("fname").value;
	var last_name=document.getElementById("lname").value;
	var email=document.getElementById("email").value;
	var date_time=document.getElementById("date").value;
	console.log("Credential Recorded:"+first_name+last_name+email+date_time);
	var messageListRef = firebase.database().ref('Appointments');
	var newMessageRef = messageListRef.push();
	newMessageRef.set({
	  'Name':first_name+last_name,
	  'Email':email,
	  'DateTime':date_time
	});
	console.log("Appointment Added Successfully");
	$('#myModal').modal('hide');
}