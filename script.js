function getLocation() {
if (!navigator.geolocation) {
alert('Geolocation not supported');
return;
}


navigator.geolocation.getCurrentPosition(
pos => {
document.getElementById('locationText').value =
`Lat: ${pos.coords.latitude}, Long: ${pos.coords.longitude}`;
},
() => alert('Location permission denied')
);
}


// Prevent form refresh (UI-only demo)
document.getElementById('complaintForm').addEventListener('submit', e => {
e.preventDefault();
alert('Complaint captured locally (no server)');
});