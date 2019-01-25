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
  var trainDest = $("#destination-input").val().trim();
  var initialTrain = moment($("#depature-input").val().trim()).format(H);
  var trainFrequency = $("#frequency-input").val().trim();


  var trainData = {
    name: trainName,
    destination: trainDest,
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

database.ref().on("child_added", function (snap) {
  var trnName = snap.val().name;
  var trnDest = snap.val().destination;
  var trnDepart = snap.val().initial;
  var trnFreq = snap.val().frequency;

  
});
// var trainDisplay = $("$<tr>").append()

//minutes till next arrival current time * frequency