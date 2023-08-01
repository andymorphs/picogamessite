// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).ready(function(){

      $.ajax({
        type: "GET",
        url: "../assets/tsv/pico.tsv",
        dataType: "text",
        success: function(data) {
          var lines = data.split("\n");
          var outputDiv = $("#output");

          // Create divs for each row
          for (var j = 0; j < lines.length; j++) {
            var rowData = lines[j].split("\t");
            var rowDiv = $("<div class='row'></div>");

            // Create divs for each column
            for (var k = 0; k < rowData.length; k++) {
              var columnDiv = $("<div></div>");
              columnDiv.append($("<span class='label'>" + rowData[k] + ": </span>"));
              columnDiv.append($("<span>" + rowData[k] + "</span>"));
              rowDiv.append(columnDiv);
            }

            outputDiv.append(rowDiv);
          }
        }
      });
    });

