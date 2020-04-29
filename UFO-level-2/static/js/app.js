// from data.js
var tableData = data;
// console.log(tableData);


// selecting the tbody
var tBody = d3.select("tbody");

// populating the html table with tableData
tableData.forEach(alienReport => {
    row = d3.select("tBody").append("tr");
    Object.entries(alienReport).forEach(([key,value]) =>{
        cell = row.append("td").text(value);

    });
});



// selecting the button for future use
var button = d3.select("button");


//  making the 'ul' of the list-group class empty for appending  labels and input tags
var ul = d3.select("ul").html("");

// assigning data for future use
var filterGroup = {'datetime':'1/11/2011','city':'roswell','state':'ca','country':'us','shape':'Circle'};


// populating filterGroup data to construct label and input tags

Object.entries(filterGroup).forEach(([key,value])=> {

    ul.append("label").attr("for",key).text(`Enter a ${key}`);

  
    ul.append("input").attr("class","form-control").attr("id",key).attr("type","text").attr("placeholder",value);
});


// just trying to make last input tag to a dropdown

// https://website.education.wisc.edu/~swu28/d3t/concept.html(how to select element for the attribute "for")

// changing the text for the input tag for shape
d3.select("[for=shape]").text("Select a shape");


// extracting shape data from tableData
var shapes = tableData.map(alienReport => alienReport.shape);


// Only using the unique values
// https://wsvincent.com/javascript-remove-duplicates-array/
var shapesUnique = [...new Set(shapes)];


// remove the existing input tag for shape
d3.select("#shape").remove();

// appending select tag and giving it the attributes
d3.select("[for=shape]").append("select");
d3.select('select').attr("id","shape").attr("name","Shapes");

//  appending option for each unique shape
shapesUnique.forEach(shape => {
    d3.select('select').append("option").attr("value",shape).text(shape);
});


// assigning to an event
d3.select("#shape").on("change", runEnter);

// defining filters to a empty dictionary
var filters = {}

   
// selecting all the input tags and assigning to an event
d3.selectAll("input").on("change", runEnter);

function runEnter() {
    
    // selecting all the input node elements using "this"
    var inputElement  = d3.select(this);

    // taking the value which the user has given for each input and making it lowercase(just incase)
    var inputValue = inputElement.property("value").toLowerCase();

    // taking id of each input, user has given
    var inputId = inputElement.attr("id");

    // console.log(inputValue);

    // emptying the table
    tBody.html("");

    // constrcting filters dictionary(if input is given, its id and its value will be stored in the "filters" dictionary, if not it will delete the id)
    if (inputValue) {
    
    filters[inputId]= inputValue;
    }
    else {
        delete filters[inputId];

    }


    // for filtering
    // https://stackoverflow.com/questions/31831651/javascript-filter-array-multiple-conditions/31831801(with 19 upvotes)

    
    var data = tableData.filter(search, filters);

    //  it filters data using the "filters" dictionary and using .every (very useful)
    function search(alienReport){
    return Object.keys(this).every((key) => alienReport[key] === this[key]);
    }

    // repopulate the table with the filtered "data"
    // console.log(data);
    data.forEach(report => {
        row = d3.select("tBody").append("tr");
        Object.entries(report).forEach(([key,value]) => {
            cell = row.append("td").text(value);
        });
    }); 
    
    
};

    
button.on("click",runEnter); 

console.log(filters);
   

    
    

    

    
   


