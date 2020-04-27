// from data.js
var tableData = data;
// console.log(tableData);
var tBody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(alienReport => {
    row = d3.select("tBody").append("tr");
    Object.entries(alienReport).forEach(([key,value]) =>{
        cell = row.append("td").text(value);

    });
});

var form = d3.select("form");

var button = d3.select("button");

form.on("submit",runEnter);
button.on("click",runEnter);

function runEnter(event) {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    // console.log(inputValue);
      
    tBody.html("");
    var data = tableData.filter(alienReport => alienReport.datetime === inputValue);
    
    console.log(data);

    data.forEach(report => {
        row = d3.select("tBody").append("tr");
        Object.entries(report).forEach(([key,value]) => {
            cell = row.append("td").text(value);
        });
    });


}