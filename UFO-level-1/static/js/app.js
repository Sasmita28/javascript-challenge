// from data.js
var tableData = data;
// console.log(tableData);
var tBody = d3.select("tbody");


// populating the table with tableData 
tableData.forEach(alienReport => {
    row = d3.select("tBody").append("tr");
    Object.entries(alienReport).forEach(([key,value]) =>{
        cell = row.append("td").text(value);

    });
});


var form = d3.select("form");

var button = d3.select("button");


// assigning the events to the "form" and "button"
form.on("submit",runEnter);
button.on("click",runEnter);

function runEnter(event) {

    d3.event.preventDefault();

    // selecting the "datetime" element
    var inputElement = d3.select("#datetime");

    // selecting the value for the "datetime"
    var inputValue = inputElement.property("value");

    // console.log(inputValue);
      
    tBody.html("");
    //  checking for the date for filtering 
    var data = tableData.filter(alienReport => alienReport.datetime === inputValue);
    
    console.log(data);
    
    //  repopulating table with the filtered "data"
    data.forEach(report => {
        row = d3.select("tBody").append("tr");
        Object.entries(report).forEach(([key,value]) => {
            cell = row.append("td").text(value);
        });
    });


}