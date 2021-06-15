$(document).ready(function(){
    var treeData = $("#treeData").val();
    treeData = treeData.replace(/\'/g, "\"");
    treeData = JSON.parse(treeData);
    var margin = {top: 20, right: 120, bottom: 20, left: 240},
    width = 1200  - margin.right - margin.left,
    height = 700 - margin.top - margin.bottom;

    var i = 0;

    var tree = d3.layout.tree().size([height, width]);

    var diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });

    var svg = d3.select("#bomTree").append("svg").attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = treeData[0];

    update(root);

    function update(source) {

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
       links = tree.links(nodes);

      // Normalize for fixed-depth.
      nodes.forEach(function(d) { d.y = d.depth * 300; });

      // Declare the nodesâ€¦
      var node = svg.selectAll("g.node")
       .data(nodes, function(d) { return d.id || (d.id = ++i); });

      // Enter the nodes.
      var nodeEnter = node.enter().append("g")
       .attr("class", "node")
       .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")"; });

      nodeEnter.append("circle")
       .attr("r", 10)
       .attr("class","bb_tooltip")
       .style("fill", "#fff")
       .on("mouseover", function() { tooltip.style("display", null); })
            .on("mouseout",  function() { tooltip.style("display", "none"); })
            .on("mousemove", function(d) {
                tooltip.style("left", (d3.event.pageX + 10) + "px");
                tooltip.style("top", (d3.event.pageY - 10) + "px");
                if(d.parent!='null'){
                    tooltip.text(d.name +" 상위도면 :" +d.parent.name);
                }else{
                    tooltip.text(d.name);
                }
            });


      nodeEnter.append("text")
       .attr("x", function(d) {
        return d.children || d._children ? -13 : 13; })
       .attr("dy", ".35em")
       .attr("text-anchor", function(d) {
        return d.children || d._children ? "end" : "start"; })
       .text(function(d) { return d.name; })
       .style("fill-opacity", 1);

      // Declare the linksâ€¦
      var link = svg.selectAll("path.link")
       .data(links, function(d) { return d.target.id; });

      // Enter the links.
      link.enter().insert("path", "g")
       .attr("class", "link")
       .attr("d", diagonal);

    }
     var tooltip = d3.select("#bomTree").append("div")
        .attr("class", "toolTip")
        .style("display", "none");

});
function Mover(){

}