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


  var trainData = {
    name: trainName,
    location: destination,
    initial: initialTrain,
    frequency: trainFrequency
  };

  database.ref().push(trainData);

  console.log(trainData.name);
  console.log(trainData.location);
  console.log(trainData.initial);
  console.log(trainData.frequency);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#depature-input").val("");
  $("#frequency-input").val("");

});

var trainDisplay = $("$<tr>").append()

//minutes till next arrival current time * frequency