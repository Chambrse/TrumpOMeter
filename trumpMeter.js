require("dotenv").config();
const keys = require('./keys');
var Twitter = require('twitter');
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var toneAnalyzer = new ToneAnalyzerV3(keys.IBM);
var client = new Twitter(keys.twitter);
var request = require('request');
var indico = require('indico.io');
indico.apiKey = '284aae3e3fd0a425180ce3db57d634da';

var text;

var params = { screen_name: 'realDonaldTrump', tweet_mode: 'extended', count: 10 };
client.get('statuses/user_timeline', params, function (error, tweets, response) {

    if (error) {
        console.log(error);
        return;
    };

    console.log(tweets[0].full_text);

    text = tweets[0].full_text;

    /*     var toneParams = {
            'tone_input': { 'text': text },
            'content_type': 'application/json'
        };
        
        toneAnalyzer.tone(toneParams, function (error, analysis) {
            if (error) {
                console.log(error);
            } else {
                console.log(JSON.stringify(analysis, null, 2));
            }
        }); 0; */

    /*     request({
            method: 'POST',
            url: 'https://api.theysay.io/v1/emotion',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            },
            body: {
                text: "Test Text",
                level: "sentence"
            }
          }, function (error, response, body) {
            console.log(error);
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
          }); */

    var response = function (res) { console.log(res); }
    var logError = function (err) { console.log(err); }

    // single example
    indico.emotion(text)
        .then(response)
        .catch(logError);

});



