require("dotenv").config();
const keys = require('./keys');
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var request = require('request');
var indico = require('indico.io');
indico.apiKey = '284aae3e3fd0a425180ce3db57d634da';

var text;
var line = "-------------------------";

var params = { screen_name: 'realDonaldTrump', tweet_mode: 'extended', count: 10 };
client.get('statuses/user_timeline', params, function (error, tweets, response) {

    if (error) {
        console.log(error);
        return;
    };

    console.log("Donald Trumps most recent tweet:\n" )
    console.log(tweets[0].full_text);

    text = tweets[0].full_text;


    var response = function (res) {
        console.log(line);
        for (var key in res) {
            console.log(key + ": " + Math.floor(res[key] * 100) + "%");
        };
    };
    var logError = function (err) { console.log(err); }

    indico.emotion(text)
        .then(response)
        .catch(logError);

});



