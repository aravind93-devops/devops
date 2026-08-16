const express = require('express');
const dotenv = require('dotenv');

const env = process.argv[2] || "dev";
dotenv.config({ path: '.env.${env}' });

function log(message) {
	const time = new Date(). toISOString();
	console.log('[${time}] [${env. toUpperCase()}] ${message}');
}

const app = express();

const PORT = process.env.PORT;
const APP = process.env.APP;

app.get('/', (req, res) => {
	res.send("Hey good day!" + APP);
});

app.get('/health', (req,res) => {
	log("Health check called");
	res.status(200).json({
		Status: "I'm Good"
	});
});

app.listen(PORT , () => {
	log("i'm running on port" + PORT);
});

