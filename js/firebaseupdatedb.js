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
	var appointment=document.getElementById("appointment");
	var appointmentDetails=appointment.value;
	console.log(appointmentDetails);
	var messageListRef = firebase.database().ref('Appointments');
	var newMessageRef = messageListRef.push();
	newMessageRef.set({
	  'Date ': emailaddrstring
	  'Time ':
	  'Phone no. ': 
	  'Name ':
	});
	console.log("Appointment Added Successfully");
}