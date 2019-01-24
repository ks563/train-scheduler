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

$("#add-train-btn").on("click", function () {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var initialTrain = moment($("#depature-input").val().trim()).format(H);
  var trainFrequency = $("#frequency-input").val().trim();

});