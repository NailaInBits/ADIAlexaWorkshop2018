/**
 * This code demonstrates a simple skill built with the Amazon Alexa Skills
 * development kit.
 **/

'use strict';

// TODO: replace with other kinds of facts
var FACTS = [
  "Gorillas are herbivores and eat leaves, shoots, roots, vines and fruits. R I P Harambe",
	"Cross River gorillas are critically endangered, there are fewer than 300. R I P Harambe",
	"Gorillas are ground-dwelling and live in groups of 6-12. R I P Harambe",
	"Gorillas are shy animals that are most active during the day. R I P Harambe",
	"At dusk, each gorilla constructs a ‘nest’ of leaves and plant material to sleep in. R I P Harambe",
	"Gorilla infants are helpless at birth and weigh about 3-4 lbs. R I P Harambe",
	"Mother gorillas nurse their babies for about 3 years. R I P Harambe",
	"Gorillas are threatened by habitat loss due to increasing human populations R I P Harambe",
	"Gorillas are large apes that are native to Africa. R I P Harambe",
	"Gorillas live in groups. R I P Harambe",
	"Groups of gorillas are called troops or bands. R I P Harambe",
	"Like humans, female gorillas are pregnant for nine months. R I P Harambe",
	"Gorillas' arms are longer than their legs. R I P Harambe",
	"Gorillas can learn sign language. R I P Harambe",
	"Gorillas usually don't need to drink water from lakes or streams. R I P Harambe",
	"Gorillas have unique noseprints, which can be used to identify individuals. R I P Harambe"
];

var handlers = {
  'LaunchRequest': function () { this.emit('GetFact'); },
  'GetNewFactIntent': function () { this.emit('GetFact'); },
  'GetFact': function() {
    // Randomly select a fact from the array
    const factIndex = Math.floor(Math.random() * FACTS.length);
    const randomFact = FACTS[factIndex];

    // Create speech output
    const speechOutput = "Here's your fact: " + randomFact;
    this.emit(':tellWithCard', speechOutput, "Here's your Gorilla fact:", randomFact);
  }
};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Include the AWS Alexa Library.
  const Alexa = require("alexa-sdk");

  // Create an instance of the Alexa library and pass it the requested command.
  var alexa = Alexa.handler(event, context);

  // Give our Alexa instance instructions for handling commands and execute the request.
  alexa.registerHandlers(handlers);
  alexa.execute();
};
