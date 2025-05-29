// Creat function called send reminder takes parameter email
// Wait for 5 seconds (5000 milliseconds) to Log the reminder message
    // Send reminders for each user in users
    // Call the function to send reminders
async function sendReminder(email) {
	
	await new Promise(resolve => setTimeout(resolve, 5000));

	console.log(`Reminder sent to ${email}`);
}

async function sendRemindersToUsers() {
	const users = ['tihitnaabraham@gmail.com', 'bereketbeki@gmail.com', 'bezawitbez@gmail.com'];

	
	for (const user of users) {
    	await sendReminder(user);
	}
}


sendRemindersToUsers();

// create function called loginAttempt takes parameter number of attempt
// creat asynchronous function to try logging in
// Exit the function if login is successful
// Log if all attempts failed
// Call the function to try logging in
function loginAttempt(attemptNumber) {
	return new Promise((resolve, reject) => {
    	setTimeout(() => {
        	if (attemptNumber === 3) {
            	resolve("Login successful");
        	} else {
            	reject("Login failed");
        	}
    	}, 1000); 
	});
}


async function tryLogin() {
	for (let attempt = 1; attempt <= 3; attempt++) {
    	try {
        	const result = await loginAttempt(attempt);
        	console.log(result); 
        	return; 
    	} catch (error) {
        	console.log(error); 
    	}
	}
	console.log("Login failed after 3 attempts"); 
}


tryLogin();
//creat function time up takes time as a parameter
// creat asynchronous function to  countdown from 5 seconds
// Display the current time left
// Wait for 1 second (1000 milliseconds)
// Decrease the time left by 1
// Log the final message
// Call the countdown timer function

function timeUp(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}

async function countdownTimer() {
	let timeLeft = 5; 

	while (timeLeft >= 0) {
    	console.log(timeLeft); 
    	await timeUp(1000); 
    	timeLeft--; 
	}

	console.log("Time is up"); 
}


countdownTimer();
//create function called wait takes parameter time in ms
//create asynchronous function called load page to log loading header,
// waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", 
// waits 1 second; and finally logs "Page fully loaded"
//Call the load page  function


function wait(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}

async function loadPage() {
	console.log("Loading header...");
	await wait(1000); 

	console.log("Loading content...");
	await wait(2000); 

	console.log("Loading footer...");
	await wait(1000); 

	console.log("Page fully loaded");
}


loadPage();
//creat function called fetch price takes symbol as parameter
//create asynchronous function called load stock prices to log "Price for [symbol] retrieved" after 2 seconds 
// Use async/await to call it for two different stocks ("AAPL" and "GOOG") 
// callget stock prices function
function fetchPrice(symbol) {
	return new Promise(resolve => {
    	setTimeout(() => {
        	resolve(`Price for ${symbol} retrieved`);
    	}, 2000); 
	});
}

async function getStockPrices() {
	try {
    	const applePrice = await fetchPrice("AAPL");
    	console.log(applePrice); 

    	const googlePrice = await fetchPrice("GOOG");
    	console.log(googlePrice); 
	} catch (error) {
    	console.error("Error fetching stock prices:", error);
	}
}


getStockPrices();






