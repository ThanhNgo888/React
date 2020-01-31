const headerContainer = document.getElementById("header");
const subHeaderContainer = document.getElementById("subHeader");
const contentsContainer = document.getElementById("contents");

//====================================================================================================

var header = React.createElement("h1", {id:"header"}, "Hello Dojo!");
ReactDOM.render(header, headerContainer);
//=====================================================================================================

var subHeader = React.createElement("h2", {id:"subHeader"}, "Things I need to do:");
ReactDOM.render(subHeader, subHeaderContainer);
//=====================================================================================================

var listItem1 = React.createElement("li",null, "Learn React");
var listItem2 = React.createElement("li",null, "Climb Mt. Everest");
var listItem3 = React.createElement("li",null, "Run a marathon");
var listItem4 = React.createElement("li",null, "Feed the dogs");

var contents = React.createElement("ul", null, listItem1, listItem2, listItem3, listItem4);
ReactDOM.render(contents, contentsContainer);