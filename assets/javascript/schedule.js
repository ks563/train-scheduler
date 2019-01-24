var config = {
    apiKey: "AIzaSyCYV-CRYXayHLEX2xF76YGG9iLQeZvKPhs",
    authDomain: "train-scheduler-ks.firebaseapp.com",
    databaseURL: "https://train-scheduler-ks.firebaseio.com",
    projectId: "train-scheduler-ks",
    storageBucket: "train-scheduler-ks.appspot.com",
    messagingSenderId: "625011446425"
  };
firebase.initializeApp(config);
  
var database = firebase.database();

var trainName;
var destination;
var initialTrain;
var trainFrequency;