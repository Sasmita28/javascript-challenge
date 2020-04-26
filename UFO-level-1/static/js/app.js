// from data.js
var tableData = data;
// console.log(tableData);
var tHead = d3.select("thead");

// YOUR CODE HERE!
tableData.forEach(alienReport => {
    row = d3.select("tHead").append("tr");
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
      
    tHead.html("");
    var data = tableData.filter(alienReport => alienReport.datetime === inputValue);
    
    console.log(data);

    data.forEach(report => {
        row = d3.select("tHead").append("tr");
        Object.entries(report).forEach(([key,value]) => {
            cell = row.append("td").text(value);
        });
    });


}