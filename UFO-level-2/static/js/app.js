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



var ul = d3.select("ul").html("");

var filterGroup = {'Date':'1/11/2011','City':'roswell','State':'ca','Country':'us','Shape':'circle'};

Object.entries(filterGroup).forEach(([key,value])=> {

    ul.append("label").attr("for",key).text(`Enter a ${key}`);
    
    ul.append("input").attr("class","form-control").attr("id",key).attr("type","text").attr("placeholder",value);
});

// https://website.education.wisc.edu/~swu28/d3t/concept.html

d3.select("[for=Shape]").text("Select a Shape");

var shapes = tableData.map(alienReport => alienReport.shape);

// https://wsvincent.com/javascript-remove-duplicates-array/
var shapesUnique = [...new Set(shapes)];


d3.select("#Shape").remove();

d3.select("[for=Shape]").append("select");
d3.select('select').attr("id","Shapes").attr("name","Shapes");

// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_value
shapesUnique.forEach(shape => {
    d3.select('select').append("option").attr("value",shape).text(shape);
});


function runEnter(event) {

    d3.event.preventDefault();

    var inputDateElement = d3.select("#Date");

    var inputDateValue = inputDateElement.property("value");

    var inputCityElement = d3.select("#City");

    var inputCityValue = inputCityElement.property("value");

    var inputStateElement = d3.select("#State");

    var inputStateValue = inputStateElement.property("value");

    var inputCountryElement = d3.select("#Country");

    var inputCountryValue = inputCountryElement.property("value");

    var inputShapeElement = d3.select("option");

    var shapeValue = inputShapeElement.property("value");

    if (shapeValue === shapesUnique){
        console.log(shapeValue);
    }
    else {
        console.log("Shape not found!")
    }
      
    // tHead.html("");
    // var data = tableData.filter(alienReport => {
    //     alienReport.datetime === inputDateValue ||
    //     alienReport.city === inputCityValue ||
    //     alienReport.state === inputStateValue ||
    //     alienReport.country === inputCountryValue ||
    //     alienReport.shape === inputShapeValue 
    // });
    
    // console.log(data);

    // data.forEach(report => {
    //     row = d3.select("tHead").append("tr");
    //     Object.entries(report).forEach(([key,value]) => {
    //         cell = row.append("td").text(value);
    //     });
    // });

}