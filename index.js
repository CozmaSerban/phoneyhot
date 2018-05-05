var accountSid = 'ACfcd285771562da34da9174aeb247b62a'; // Your Account SID from www.twilio.com/console
var authToken = 'a3974736faff0ea675781ac80b2eec58';   // Your Auth Token from www.twilio.com/console


var twilio = require('twilio')(accountSid, authToken);
var app = require('express')();
var callAnswer = require('twilio').twiml.VoiceResponse;
const urlencoded = require('body-parser').urlencoded;
app.use(urlencoded({extended: false}));

app.get('/answer', (req , res) => {
    res.send('Hello world!!');
    const city = req.body.FromCity;
    console.log(req.body);
  // Use the Twilio Node.js SDK to build an XML response
    const twiml = new callAnswer();
    twiml.say({ voice: 'alice' }, `Never gonna give you up ${city}.`);
  //twiml.play({}, 'https://demo.twilio.com/docs/classic.mp3');


  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

app.listen(process.env.PORT, function(){
    console.log('I`m linstening on 3000');
})