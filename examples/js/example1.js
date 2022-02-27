function leafletBackgroundMap(){
    var map = L.map('backgroundMap', {
        scrollWheelZoom:false
    }).setView([51.505, -0.09], 13);

    var basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
}

function d3Map(){
    //Example 1.2 line 1...container block
    var container = d3.select("#chart") //get the <body> element from the DOM
        .append("svg") //put a new svg in the body
        .attr("width", '100%') //assign the width
        .attr("height", 500) //assign the height
        .attr("class", "chart") //always assign a class (as the block name) for styling and future selection
        .style("background-color", "rgba(0,0,0,0.2)");
}

leafletBackgroundMap();
d3Map();
