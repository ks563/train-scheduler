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

var trainName = "";
var trainDest = "";
var initialTrain = 0;
var trainFrequency = 0;

$("#add-train-btn").on("click", function () {
  event.preventDefault();

  //takes train info from form
  trainName = $("#train-name-input").val().trim();
  trainDest = $("#destination-input").val().trim();
  initialTrain = moment($("#depature-input").val());
  trainFrequency = $("#frequency-input").val().trim();

  //holds data in a temp object
  var trainData = {
    name: trainName,
    destination: trainDest,
    initial: initialTrain,
    frequency: trainFrequency
  };

  //pushes train data to the root of the database
  database.ref().push(trainData);

  //clears form
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#depature-input").val("");
  $("#frequency-input").val("");

});
//creates firebase event for adding train information to the database and all the information to the table in the html
database.ref().on("child_added", function (childSnap) {
  var trnName = childSnap.val().name;
  var trnDest = childSnap.val().destination;
  var initialTrn = childSnap.val().initial;
  var trnFrequency = childSnap.val().frequency;

  //creates new row of train information
  var trainRow = $("$<tr>").append(
    $("#<td>").text(trnName),
    $("#<td>").text(trnDest),
    $("#<td>").text(initialTrn),
    $("#<td>").text(trnFrequency),
  );
  
  //appends new row to the table
  $("#train-table > body").append(trainRow);
});
//

//minutes till next arrival current time * frequency