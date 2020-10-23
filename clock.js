const m = moment();

var day = m.format("dddd");
var today = m.format("MMMM Do YYYY, h:mm:ss a");

console.log(day);
console.log(today);
console.log(m.format("[Today is] dddd L"));


// Display today's date on html page
var intervalSeconds = setInterval(function() {
    $("#date").html(day + " " + today + " " + moment().format("hh:mm:ssa"));
});