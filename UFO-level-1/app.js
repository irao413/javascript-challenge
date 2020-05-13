// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody")

function displayData(data){ 
    tbody.text("")
    data.forEach(function(sightings){
    new_tr = tbody.append("tr")
    Object.entries(sightings).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)
    })
})}

displayData(tableData)

var datetime = d3.select("#datetime")

var button = d3.select("filter-btn")

datetime.on("click", runEnter);
button.on("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();

    console.log(datetime.property("value"));
    
    var filteredData = tableData.filter(sightings => sightings.datetime===datetime.property("value"))
    //display the new table
    displayData(filteredData);
}
