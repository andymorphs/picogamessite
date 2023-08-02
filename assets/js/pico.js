$(document).ready(function() {
      $.ajax({
        type: "GET",
        url: "/assets/tsv/pico.tsv",
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

            // Add the rowDiv to the outputDiv
            outputDiv.append(rowDiv);

            // Extract specific values based on headers and perform manipulations
            var headers = lines[0].split("\t");
            if (j > 0) {
              var cols = rowData;
              var dir_title = cols[headers.indexOf('Games')];
              var dir_date = cols[headers.indexOf('Date')];
              var dir_genre = cols[headers.indexOf('type')];
              var session_id = '';
              var desc = '';
              var title = dir_title;

              if (desc.length > 0) {
                title = '<a href="#" class="styled lclasses-desc-info" title="View description for class">' +
                  '<span>' + dir_title + '</span>' +
                  '<i class="name-icon er-accent-site far fa-info-circle" aria-hidden="true"></i>' +
                  '</a>' +
                  '<div class="sub" data-id="desc">' + desc + '</div>';
              }

              var lower = title.toLowerCase();
              var truncatedLower = lower.slice(0, 30);

              // Use the truncatedLower variable as needed
              console.log(truncatedLower); // Example usage: logging to the console
            }
          }
        }
      });
    });