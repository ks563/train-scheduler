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

var trainName ="";
var trainDest ="";
var initialTrain= 0;
var trainFrequency =0;

$("#add-train-btn").on("click", function () {
  event.preventDefault();

  trainName = $("#train-name-input").val().trim();
  trainDest = $("#destination-input").val().trim();
  initialTrain = moment($("#depature-input").val().trim()).format(H);
  trainFrequency = $("#frequency-input").val().trim();


  // var trainData = 

  database.ref().push({
    name: trainName,
    destination: trainDest,
    initial: initialTrain,
    frequency: trainFrequency
  });

  console.log(trainData.name);
  console.log(trainData.location);
  console.log(trainData.initial);
  console.log(trainData.frequency);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#depature-input").val("");
  $("#frequency-input").val("");

});

database.ref().on("child_added", function (snap) {
  trainName = snap.val().name;
  trainDest = snap.val().destination;
  initialTrain = snap.val().initial;
  trainFrequency = snap.val().frequency;

  
});
// var trainDisplay = $("$<tr>").append()

//minutes till next arrival current time * frequency