// Display the submitted data
const submittedData = document.getElementById('submittedData');

if (option === 'Family') {
    submittedData.innerHTML = `Welcome Back Home, ${mrCheckbox ? 'Mr' : ''}${mrsCheckbox ? 'Mrs' : ''} ${name} ${surname}🥰🥰 !`;
} else if (option === 'Friends') {
    submittedData.innerHTML = `Welcome dear friend, ${mrCheckbox ? 'Mr' : ''}${mrsCheckbox ? 'Mrs' : ''} ${name} ${surname} Hope you have a Fun Time with Us😊!`;
} else if (option === 'Well Wisher') {
    submittedData.innerHTML = `Dear , ${mrCheckbox ? 'Mr' : ''}${mrsCheckbox ? 'Mrs' : ''} ${name} ${surname} welcome to the family of Adebayo 🥰!`;
} else if (option === 'Co - Workers') {
    submittedData.innerHTML = `Dear , ${mrCheckbox ? 'Mr' : ''}${mrsCheckbox ? 'Mrs' : ''} ${name} ${surname} welcome to the family of Adebayo, Have Fun and we hope you enjoy the Moments Here!`;
} else {
    submittedData.innerHTML = `Welcome, ${mrCheckbox ? 'Mr' : ''}${mrsCheckbox ? 'Mrs' : ''} ${name} ${surname}!`;
    alert('Please fill up the recommended procedures');
}

// Start confetti animation
confetti.start();

// Redirect back to the form page after a certain delay
setTimeout(() => {
    window.location.href = 'index.html'; 
}, 3000); // 3000 milliseconds (3 seconds) delay before redirecting
